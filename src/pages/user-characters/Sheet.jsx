// src/pages/Sheet.jsx
import { useEffect, useMemo, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useUserCharacters } from '../../contexts/UserCharactersContext'
import { useForms } from '../../contexts/FormsContext'
import { usePowers } from '../../contexts/PowersContext'
import { useCharacters } from '../../contexts/CharactersContext'

const POWER_PP_COST = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }

export default function Sheet() {
    const { id } = useParams()

    // contexts (always at top, stable order)
    const {
        get, byId,
        levelUp, longRest, shortRest, patch,
        usePower, spendSP_unlockPower, spendSP_skillUp,
    } = useUserCharacters()
    const { formsById, forms } = useForms() // support object and Map
    const { powersById } = usePowers()
    const { characters } = useCharacters()   // Map

    // local ui state
    const [sheet, setSheet] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    const load = useCallback(async (sheetId) => {
        setLoading(true)
        setErr(null)
        try {
            const s = await get(sheetId)
            setSheet(s || null)
        } catch (e) {
            console.error('[Sheet] load error', e)
            setErr(e?.message || 'Failed to load sheet')
            setSheet(null)
        } finally {
            setLoading(false)
        }
    }, [get])

    // initial + when id changes
    useEffect(() => {
        if (!id) return
        load(id)
    }, [id, load])

    // keep in sync with context store
    useEffect(() => {
        if (byId[id]) setSheet(byId[id])
    }, [byId, id])

    // ------- resolvers (safe even if data missing) -------
    const character = useMemo(() => {
        if (!sheet) return null
        const direct = characters.get(sheet.characterId)
        if (direct) return direct
        for (const ch of characters.values()) {
            if (String(ch._id) === String(sheet.characterId)) return ch
        }
        return null
    }, [sheet, characters])

    const form = useMemo(() => {
        if (!sheet) return null
        const key = String(sheet.formId)
        let f = formsById?.[key] || formsById?.[sheet.formId]
        if (f) return f
        if (forms && typeof forms.get === 'function') {
            f = forms.get(sheet.formId) || forms.get(key)
            if (f) return f
            for (const v of forms.values()) {
                if (String(v._id) === key) return v
            }
        }
        return null
    }, [sheet, formsById, forms])

    const availableSP = useMemo(() => {
        if (!sheet) return 0
        return (sheet.totalSP || 0) - (sheet.spentSP || 0)
    }, [sheet])

    const unlockedPowerIds = useMemo(() => {
        if (!sheet) return new Set()
        return new Set((sheet.unlockedPowers || []).map(p => String(p.powerId)))
    }, [sheet])

    const groupedPowers = useMemo(() => {
        const groups = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] }
        if (!form || !form.powers || !powersById) return groups
        for (const pid of form.powers) {
            const pw = powersById[String(pid)]
            if (!pw) continue
            const lvl = pw.level === 'ultimate' ? 5 : Number(pw.level || 0)
            groups[lvl]?.push(pw)
        }
        return groups
    }, [form, powersById])

    // ------- early UI states -------
    if (loading) return <div className="p-6">Loading…</div>

    if (err) {
        return (
            <div className="p-6 space-y-3">
                <div className="text-red-600 font-semibold">Error: {String(err)}</div>
                <button className="px-3 py-1 rounded bg-dark text-light" onClick={() => load(id)}>
                    Retry
                </button>
            </div>
        )
    }

    if (!sheet) {
        return (
            <div className="p-6 space-y-3">
                <div className="font-semibold">Sheet not found.</div>
                <button className="px-3 py-1 rounded bg-dark text-light" onClick={() => load(id)}>
                    Reload
                </button>
            </div>
        )
    }

    // ------- UI helpers -------
    const Header = () => (
        <header className="flex flex-col md:flex-row gap-4 md:items-center justify-between p-4 bg-dark text-light rounded-xl border border-light-2 shadow">
            <div className="flex items-center gap-4">
                {character?.logo && (
                    <img src={character.logo} alt={character.name} className="w-16 h-16 object-contain" />
                )}
                <div>
                    <h1 className="text-2xl font-bold">
                        {form?.name || character?.name || 'Character'}
                    </h1>
                    <div className="text-sm opacity-80">Level {sheet.level}</div>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-light text-dark" onClick={async () => setSheet(await levelUp(sheet._id))}>
                    Level Up
                </button>
                <button className="px-3 py-1 rounded-md bg-light text-dark" onClick={async () => setSheet(await shortRest(sheet._id))}>
                    Short Rest
                </button>
                <button className="px-3 py-1 rounded-md bg-light text-dark" onClick={async () => setSheet(await longRest(sheet._id))}>
                    Long Rest
                </button>
            </div>
        </header>
    )

    const DebugPanel = () => (
        <details className="rounded-lg border p-3 bg-white/70 text-xs">
            <summary className="cursor-pointer select-none font-semibold">Debug</summary>
            <div className="mt-2 space-y-1">
                <div><b>sheetId:</b> {String(sheet._id)}</div>
                <div><b>characterId (sheet):</b> {String(sheet.characterId)}</div>
                <div><b>formId (sheet):</b> {String(sheet.formId)}</div>
                <div><b>character loaded:</b> {character ? 'yes' : 'no'}</div>
                <div><b>form loaded:</b> {form ? 'yes' : 'no'}</div>
                <button className="mt-2 px-2 py-1 rounded bg-dark text-light" onClick={() => load(id)}>Force reload sheet</button>
            </div>
        </details>
    )

    const StatBadge = ({ label, value }) => (
        <div className="flex flex-col items-center gap-1 bg-white/80 rounded-lg p-3 shadow">
            <div className="text-xl font-bold">{value ?? '--'}</div>
            <label className="text-center font-bold text-xs">{label}</label>
        </div>
    )

    const EditableGauge = ({ label, field }) => {
        const max = field === 'currentHP' ? sheet.maxHP : sheet.maxPP
        const val = sheet[field]
        return (
            <div className="rounded-xl p-4 shadow bg-white/90 border border-black/10">
                <div className="font-bold mb-2">{label}</div>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={val}
                        onChange={(e) => setSheet({ ...sheet, [field]: Number(e.target.value) })}
                        className="w-24 px-2 py-1 border rounded"
                    />
                    <span>/ {max}</span>
                    <button
                        className="px-3 py-1 rounded bg-dark text-light"
                        onClick={async () => {
                            const partial = { [field]: sheet[field] }
                            setSheet(await patch(sheet._id, partial))
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }

    // ----- Skill normalization (fix for "Objects are not valid as a React child") -----
    const normalizeSkillEntry = (keyFromObject, entry) => {
        if (entry && typeof entry === 'object') {
            return {
                key: entry.uniqueName || keyFromObject,
                label: entry.name || keyFromObject,
                base: typeof entry.value === 'number' ? entry.value : 0,
            }
        }
        return { key: keyFromObject, label: keyFromObject, base: typeof entry === 'number' ? entry : 0 }
    }

    const SkillRow = ({ storageKey, label, base }) => {
        const purchased = sheet.skillLevels?.find(s => s.key === storageKey)?.value || 0
        const total = (base || 0) + purchased
        const toLevel = Math.min(8, purchased + 1)
        const canUpgrade = availableSP > 0 && toLevel > purchased

        return (
            <div className="flex items-center justify-between py-1 border-b border-black/10">
                <div className="capitalize">{label}</div>
                <div className="flex items-center gap-3">
                    <span className="text-sm">
                        Base {base ?? 0} + {purchased} = <b>{total}</b>
                    </span>
                    <button
                        className={`px-2 py-0.5 rounded ${canUpgrade ? 'bg-dark text-light' : 'bg-black/10 text-black/40 cursor-not-allowed'}`}
                        disabled={!canUpgrade}
                        onClick={async () => {
                            const updated = await spendSP_skillUp(sheet._id, { skillKey: storageKey, toLevel })
                            setSheet(updated)
                        }}
                    >
                        Upgrade
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="p-4 space-y-6 text-dark">
            <Header />
            <DebugPanel />

            {/* Character bio / art */}
            <section className="grid md:grid-cols-[280px,1fr] gap-4">
                <div className="rounded-xl overflow-hidden border border-light-2 bg-white/80 shadow min-h-[180px]">
                    {character?.image ? (
                        <img src={character.image} alt={character?.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="p-4 text-sm opacity-60">No character image</div>
                    )}
                </div>
                <div className="rounded-xl p-4 border border-light-2 bg-white/80 shadow">
                    <div className="font-bold text-lg mb-2">{character?.name || 'Character'}</div>
                    {character?.alterego && (
                        <div className="mb-2">
                            <span className="font-semibold">Real Name:</span> {character.alterego}
                        </div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {character?.description || 'No description.'}
                    </p>
                </div>
            </section>

            {/* HP / PP */}
            <section className="grid md:grid-cols-2 gap-4">
                <EditableGauge label="HP" field="currentHP" />
                <EditableGauge label="PP" field="currentPP" />
            </section>

            {/* Core stats */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatBadge label="Defense" value={form?.stats.defense} />
                <StatBadge label="Speed" value={form?.stats?.speed} />
                <StatBadge label="Agility" value={form?.stats?.agility} />
                <StatBadge label="Base HP" value={form?.stats?.hp} />
            </section>

            {/* Skill Points */}
            <section className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                <div className="font-bold">Skill Points</div>
                <div className="text-sm">
                    Total: {sheet.totalSP} • Spent: {sheet.spentSP} • Available: <b>{availableSP}</b>
                </div>
            </section>

            {/* Powers */}
            <section className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                <h2 className="font-bold mb-3">Powers</h2>
                {!form?.powers?.length ? (
                    <div className="text-sm opacity-60">No powers on this form.</div>
                ) : (
                    [0, 1, 2, 3, 4, 5].map((lvl) => (
                        <div key={lvl} className="mb-5">
                            <div className="font-semibold mb-2">Level {lvl === 5 ? 'Ultimate' : lvl}</div>
                            <div className="grid md:grid-cols-2 gap-3">
                                {(groupedPowers[lvl] || []).map((pw) => {
                                    const isUnlocked = unlockedPowerIds.has(String(pw._id)) || lvl === 0
                                    const costPP = POWER_PP_COST[lvl] || 0
                                    const canUse = sheet.currentPP >= costPP
                                    const canUnlock = !isUnlocked && availableSP > 0
                                    return (
                                        <div key={pw._id} className="p-3 rounded border bg-white">
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold">{pw.name}</div>
                                                <span className="text-xs opacity-70">Lvl {lvl === 5 ? 'Ult' : lvl}</span>
                                            </div>
                                            {pw.description && (
                                                <div className="text-xs opacity-80 mt-1 whitespace-pre-wrap">
                                                    {pw.description}
                                                </div>
                                            )}
                                            <div className="mt-3 flex gap-2">
                                                {!isUnlocked && lvl !== 0 && (
                                                    <button
                                                        className={`px-3 py-1 rounded ${canUnlock ? 'bg-dark text-light' : 'bg-black/10 text-black/40 cursor-not-allowed'}`}
                                                        disabled={!canUnlock}
                                                        onClick={async () => {
                                                            const updated = await spendSP_unlockPower(sheet._id, { powerId: pw._id, powerLevel: lvl })
                                                            setSheet(updated)
                                                        }}
                                                    >
                                                        Unlock (SP)
                                                    </button>
                                                )}
                                                {isUnlocked && (
                                                    <button
                                                        className={`px-3 py-1 rounded ${canUse ? 'bg-dark text-light' : 'bg-black/10 text-black/40 cursor-not-allowed'}`}
                                                        disabled={!canUse}
                                                        onClick={async () => {
                                                            const res = await usePower(sheet._id, { powerId: pw._id, levelCost: costPP })
                                                            if (res && res.currentPP != null) {
                                                                setSheet((prev) => ({ ...prev, currentPP: res.currentPP }))
                                                            } else if (res && res._id) {
                                                                setSheet(res)
                                                            }
                                                        }}
                                                    >
                                                        Use (PP {costPP})
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))
                )}
            </section>

            {/* Abilities & Weaknesses */}
            <section className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                    <h2 className="font-bold mb-2">Abilities</h2>
                    {form?.abilities?.length ? (
                        <ul className="list-disc pl-5 space-y-1">
                            {form.abilities.map((a, i) => (
                                <li key={i} className="text-sm whitespace-pre-wrap">{a}</li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-sm opacity-60">No abilities.</div>
                    )}
                </div>
                <div className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                    <h2 className="font-bold mb-2">Weaknesses</h2>
                    {form?.weaknesses?.length ? (
                        <ul className="list-disc pl-5 space-y-1">
                            {form.weaknesses.map((w, i) => (
                                <li key={i} className="text-sm whitespace-pre-wrap">{w}</li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-sm opacity-60">No weaknesses.</div>
                    )}
                </div>
            </section>

            {/* Progression */}
            <section className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                <h2 className="font-bold mb-2">Progression</h2>
                {form?.progression?.length ? (
                    <ol className="list-decimal pl-5 space-y-1">
                        {form.progression.map((p, idx) => (
                            <li key={idx} className="text-sm whitespace-pre-wrap">{p}</li>
                        ))}
                    </ol>
                ) : (
                    <div className="text-sm opacity-60">No progression listed.</div>
                )}
            </section>

            {/* Skills (general & special) */}
            <section className="rounded-xl p-4 shadow bg-white/80 border border-light-2">
                <h2 className="font-bold mb-3">Skills</h2>
                {!form ? (
                    <div className="text-sm opacity-60">Form data not loaded yet.</div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="font-semibold mb-1">General</div>
                            <div className="rounded-lg p-3 bg-white border">
                                {Object.entries(form?.skills || {}).map(([k, v]) => {
                                    const s = normalizeSkillEntry(k, v)
                                    return (
                                        <SkillRow
                                            key={s.key}
                                            storageKey={s.key}
                                            label={s.label}
                                            base={s.base}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold mb-1">Special Skills</div>
                            <div className="rounded-lg p-3 bg-white border">
                                {Object.entries(form?.specialSkills || {}).map(([k, v]) => {
                                    const s = normalizeSkillEntry(k, v)
                                    return (
                                        <SkillRow
                                            key={s.key}
                                            storageKey={s.key}
                                            label={s.label}
                                            base={s.base}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}
