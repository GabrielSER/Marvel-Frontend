import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUserCharacters } from '../../contexts/UserCharactersContext'
import { useForms } from '../../contexts/FormsContext'
import { usePowers } from '../../contexts/PowersContext'

const POWER_COST = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }

export default function Sheet() {
    const { id } = useParams()
    const { get, byId, levelUp, longRest, shortRest, patch, usePower, spendSP_unlockPower, spendSP_skillUp } = useUserCharacters()
    const { formsById } = useForms()
    const { powersById } = usePowers()
    const [sheet, setSheet] = useState(null)

    useEffect(() => { (async () => setSheet(await get(id)))() }, [id]) // load

    useEffect(() => { if (byId[id]) setSheet(byId[id]) }, [byId, id])

    const availableSP = useMemo(() => {
        if (!sheet) return 0
        return (sheet.totalSP || 0) - (sheet.spentSP || 0)
    }, [sheet])

    if (!sheet) return <div style={{ padding: 16 }}>Loading…</div>

    const form = formsById?.[sheet.formId]

    const unlocked = new Set(sheet.unlockedPowers?.map(p => String(p.powerId)) || [])
    const groupedPowers = useMemo(() => {
        const res = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] }
            ; (form?.powers || []).forEach(pid => {
                const pw = powersById?.[pid]
                if (!pw) return
                const level = pw.level === 'ultimate' ? 5 : Number(pw.level || 0)
                res[level].push(pw)
            })
        return res
    }, [form, powersById])

    const SkillRow = ({ label, keyName, baseValue }) => {
        const purchased = sheet.skillLevels?.find(s => s.key === keyName)?.value || 0
        const total = (baseValue || 0) + purchased
        const toLevel = Math.min(8, purchased + 1)
        const canUpgrade = availableSP > 0 && toLevel > purchased

        return (
            <div className="flex items-center justify-between py-1 border-b border-black/10">
                <div>{label}</div>
                <div className="flex items-center gap-2">
                    <span className="text-sm">Base {baseValue || 0} + {purchased} = <b>{total}</b></span>
                    <button
                        disabled={!canUpgrade}
                        onClick={async () => {
                            const d = await spendSP_skillUp(sheet._id, { skillKey: keyName, toLevel })
                            setSheet(d)
                        }}
                    >
                        Upgrade
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="p-4 space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">{form?.name || 'Character'}</h1>
                    <div className="text-sm">Level {sheet.level}</div>
                </div>
                <div className="flex gap-2">
                    <button onClick={async () => setSheet(await levelUp(sheet._id))}>Level Up</button>
                    <button onClick={async () => setSheet(await shortRest(sheet._id))}>Short Rest</button>
                    <button onClick={async () => setSheet(await longRest(sheet._id))}>Long Rest</button>
                </div>
            </header>

            {/* HP / PP */}
            <section className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 shadow bg-white/80">
                    <div className="font-bold mb-2">HP</div>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={sheet.currentHP}
                            onChange={e => setSheet({ ...sheet, currentHP: Number(e.target.value) })}
                            className="w-24"
                        />
                        <span>/ {sheet.maxHP}</span>
                        <button onClick={async () => setSheet(await patch(sheet._id, { currentHP: sheet.currentHP }))}>Save</button>
                    </div>
                </div>
                <div className="rounded-xl p-4 shadow bg-white/80">
                    <div className="font-bold mb-2">PP</div>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={sheet.currentPP}
                            onChange={e => setSheet({ ...sheet, currentPP: Number(e.target.value) })}
                            className="w-24"
                        />
                        <span>/ {sheet.maxPP}</span>
                        <button onClick={async () => setSheet(await patch(sheet._id, { currentPP: sheet.currentPP }))}>Save</button>
                    </div>
                </div>
            </section>

            {/* SP */}
            <section className="rounded-xl p-4 shadow bg-white/80">
                <div className="font-bold">Skill Points</div>
                <div className="text-sm">Total: {sheet.totalSP} • Spent: {sheet.spentSP} • Available: <b>{availableSP}</b></div>
            </section>

            {/* POWERS */}
            <section className="rounded-xl p-4 shadow bg-white/80">
                <h2 className="font-bold mb-2">Powers</h2>

                {([0, 1, 2, 3, 4, 5]).map(lvl => (
                    <div key={lvl} className="mb-4">
                        <div className="font-semibold">Level {lvl === 5 ? 'Ultimate' : lvl}</div>
                        <div className="grid md:grid-cols-2 gap-3">
                            {(groupedPowers[lvl] || []).map(pw => {
                                const isUnlocked = unlocked.has(String(pw._id))
                                const costPP = POWER_COST[lvl]
                                return (
                                    <div key={pw._id} className="p-3 rounded border bg-white">
                                        <div className="font-semibold">{pw.name}</div>
                                        <div className="text-xs opacity-70">{pw.description}</div>
                                        <div className="mt-2 flex gap-2">
                                            {!isUnlocked && lvl !== 0 && (
                                                <button
                                                    onClick={async () => setSheet(await spendSP_unlockPower(sheet._id, { powerId: pw._id, powerLevel: lvl }))}
                                                    disabled={availableSP <= 0}
                                                >
                                                    Unlock (SP cost handled server)
                                                </button>
                                            )}
                                            {(isUnlocked || lvl === 0) && (
                                                <button
                                                    onClick={async () => {
                                                        const d = await usePower(sheet._id, { powerId: pw._id, levelCost: costPP })
                                                        setSheet(prev => ({ ...prev, currentPP: d.currentPP }))
                                                    }}
                                                    disabled={sheet.currentPP < costPP}
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
                ))}
            </section>

            {/* SKILLS */}
            <section className="rounded-xl p-4 shadow bg-white/80">
                <h2 className="font-bold mb-2">Skills</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <div className="font-semibold mb-1">Physical / Combat</div>
                        {Object.entries(form?.skills || {}).map(([k, v]) => (
                            <SkillRow key={k} label={k} keyName={k} baseValue={v} />
                        ))}
                    </div>
                    <div>
                        <div className="font-semibold mb-1">Special Skills</div>
                        {Object.entries(form?.specialSkills || {}).map(([k, v]) => (
                            <SkillRow key={k} label={k} keyName={k} baseValue={v} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
