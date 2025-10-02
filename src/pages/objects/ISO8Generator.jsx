// src/pages/objects/ISO8Generator.jsx
import { useMemo, useState, useEffect, useDeferredValue, memo } from "react";
import clsx from "clsx";

import ComicTitlePanel from "../ui/ComicTitlePanel";
import { DiceType } from "../content/dice/Dice";
import Content from "../ui/Content";
import Iso8Crystal from "./Iso8Crystal";

// ====== EFFECTS MATRIX (pre-generated JSON from your Excel) ======
import effectsMatrix from "../../data/iso8Effects.json";

// ---------------- ISO-8 RULES ----------------
const COLOR_BY_D8 = {
    1: { key: "RETRY", label: "RETRY", stat: "—", note: "ISO-8 can’t be activated yet. Wait 1 long rest and roll the D8 again." },
    2: { key: "BLUE", label: "Blue", stat: "Strength" },
    3: { key: "PURPLE", label: "Purple", stat: "Power" },
    4: { key: "GREEN", label: "Green", stat: "Defense" },
    5: { key: "YELLOW", label: "Yellow", stat: "Intelligence" },
    6: { key: "ORANGE", label: "Orange", stat: "Combo" },
    7: { key: "RED", label: "Red", stat: "HP" },
    8: { key: "RAINBOW", label: "Rainbow", stat: "Combined" },
};

const RAINBOW_D6_TO_COLOR = { 1: "Blue", 2: "Purple", 3: "Green", 4: "Yellow", 5: "Orange", 6: "Red" };

const COLOR_LABEL_TO_STAT = {
    Blue: "Strength", Purple: "Power", Green: "Defense",
    Yellow: "Intelligence", Orange: "Combo", Red: "HP",
};

function gradeFromD100(n) {
    if (n === 100) return "S+";
    if (n >= 97) return "S";
    if (n >= 90) return "A";
    if (n >= 80) return "B";
    if (n >= 65) return "C";
    if (n >= 46) return "D";
    if (n >= 26) return "E";
    return "F";
}

const EFFECTS_BY_GRADE = { "S+": 3, "S": 3, "A": 2, "B": 2, "C": 1, "D": 1, "E": 1, "F": 1 };
const COMBATS_BY_GRADE = { "S+": 30, "S": 25, "A": 20, "B": 20, "C": 10, "D": 10, "E": 10, "F": 10 };
const STAT_POINTS_BY_GRADE = { "S+": 3, "S": 2, "A": 2, "B": 1, "C": 1, "D": 1, "E": 1, "F": 1 };
const HP_BY_GRADE = { "S+": 30, "S": 20, "A": 20, "B": 10, "C": 10, "D": 10, "E": 10, "F": 10 };

const STAT_INCREASE_BY_GRADE = {
    "S+": "3 or +30 HP (Only red ISO-8)", "S": "2 or +20 HP (Only red ISO-8)", "A": "2 or +20 HP (Only red ISO-8)",
    "B": "1 or +10 HP (Only red ISO-8)", "C": "1 or +10 HP (Only red ISO-8)", "D": "1 or +10 HP (Only red ISO-8)",
    "E": "1 or +10 HP (Only red ISO-8)", "F": "1 or +10 HP (Only red ISO-8)",
};
const redBonusText = (grade, colorKey) => (colorKey === "RED" ? STAT_INCREASE_BY_GRADE[grade] : null);

// ---------------- UI HELPERS ----------------
const Section = ({ title, children, accent = "bg-comic-secondary" }) => (
    <div className="w-full max-w-6xl px-3 md:px-4">
        <div className="flex justify-center mb-3">
            <ComicTitlePanel className={clsx(accent, "px-4")}>
                <h2 className="text-lg md:text-xl font-semibold text-center">{title}</h2>
            </ComicTitlePanel>
        </div>
        <div className="bg-white/80 rounded-2xl shadow p-3 md:p-4">{children}</div>
    </div>
);

const Field = ({ label, value, onChange, placeholder, type = "text", min, max, right }) => (
    <label className="flex items-center gap-3 justify-between py-2">
        <span className="text-sm font-semibold w-36 md:w-44">{label}</span>
        <input
            className="input input-bordered w-24 md:w-28 text-center font-mono"
            value={value ?? ""}
            onChange={(e) => onChange?.(e.target.value)} // keep as string for smooth typing
            placeholder={placeholder}
            type={type}
            inputMode="numeric"
            min={min}
            max={max}
        />
        {right}
    </label>
);

// Dice tile that never re-renders unless its type changes
const StableDice = memo(function StableDice({ type }) {
    return <Content id="roll" params={{ type }} />;
});

// Effect lookup
const getEffectText = (grade, roll) => {
    if (!grade || !roll) return "";
    const col = effectsMatrix?.[grade];
    if (!col) return "";
    return col[Number(roll)] || "";
};

// =======================================================
//                    STEP COMPONENTS
//  (Local state; each step renders its own nav)
// =======================================================

/** Fixed bottom nav on mobile; inline on desktop */
const StepNav = ({ onBack, onContinue, continueDisabled }) => (
    <>
        {/* spacer so fixed bar doesn't cover content */}
        <div className="h-14 md:hidden" />
        <div className="md:mt-6 md:static fixed bottom-0 left-0 right-0 z-50 md:z-auto bg-white/95 md:bg-transparent backdrop-blur md:backdrop-blur-0 border-t md:border-0 border-black/10">
            <div className="mx-auto max-w-6xl px-3 py-2 flex items-center justify-between gap-3">
                <button className="btn btn-sm md:btn md:btn-outline" onClick={onBack}>← Back</button>
                <button className="btn btn-sm md:btn md:btn-primary" disabled={continueDisabled} onClick={onContinue}>
                    Continue →
                </button>
            </div>
        </div>
    </>
);

const ColorStep = memo(function ColorStep({ onBack, onContinue }) {
    const [input, setInput] = useState("");
    const n = Number.parseInt(input, 10);
    const valid = Number.isInteger(n) && n >= 2 && n <= 8; // block RETRY=1
    const preview = Number.isInteger(n) && n >= 1 && n <= 8 ? COLOR_BY_D8[n] : null;

    return (
        <Section title="Discovery • Determine Color (roll a D8)">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                {/* Mobile crystal preview (colorless) */}
                <div className="md:hidden flex justify-center mb-2">
                    <Iso8Crystal colors={[]} grade={null} emphasize />
                </div>

                <div>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                        <StableDice type={DiceType.D8} />
                        <Field
                            label="D8 result"
                            value={input}
                            onChange={setInput}
                            placeholder="1–8" min={1} max={8}
                            right={
                                <div />
                            }
                        />
                        <div className="w-52 md:w-72 text-xs md:text-sm">
                            {preview ? (
                                <>
                                    <span><b>{preview.label}</b> {preview.stat !== "—" && `(${preview.stat})`}</span>
                                    {preview.note && <div className="text-[11px] mt-1">{preview.note}</div>}
                                </>
                            ) : <span className="opacity-60">Awaiting roll…</span>}
                        </div>
                    </div>
                    <StepNav
                        onBack={onBack}
                        onContinue={() => onContinue(n)}
                        continueDisabled={!valid}
                    />
                </div>

                {/* Desktop crystal */}
                <div className="hidden md:flex justify-center">
                    <Iso8Crystal colors={[]} grade={null} emphasize />
                </div>
            </div>
        </Section>
    );
});

const RainbowStep = memo(function RainbowStep({ onBack, onContinue }) {
    const [count, setCount] = useState(2);
    const [inputs, setInputs] = useState([]); // string[]

    useEffect(() => {
        setInputs(prev => {
            const next = prev.slice(0, count);
            while (next.length < count) next.push("");
            return next;
        });
    }, [count]);

    const parsed = inputs.map(v => Number.parseInt(v, 10));
    const valid = parsed.length >= Math.min(count, 3) &&
        [...Array(count)].every((_, i) => Number.isInteger(parsed[i]) && parsed[i] >= 1 && parsed[i] <= 6);

    const colorsForMobile = parsed.filter(Number.isInteger).slice(0, count).map(n => RAINBOW_D6_TO_COLOR[n]);

    return (
        <Section title="Discovery • Rainbow colors (roll 2–3 D6)">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                {/* Mobile crystal */}
                <div className="md:hidden flex justify-center mb-2">
                    <Iso8Crystal colors={colorsForMobile} grade={null} emphasize />
                </div>

                <div>
                    <div className="text-sm font-semibold mb-2">
                        Roll <b>two or three d6</b>, type them, then press <b>Continue</b>.
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm">How many d6?</span>
                        <select
                            className="select select-bordered select-sm"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                        >
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                        <div className="text-xs opacity-60">1=Blue, 2=Purple, 3=Green, 4=Yellow, 5=Orange, 6=Red.</div>
                    </div>

                    {[...Array(count)].map((_, i) => {
                        const v = inputs[i] ?? "";
                        const n = Number.parseInt(v, 10);
                        return (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 py-1">
                                <StableDice type={DiceType.D6} />
                                <Field
                                    label={`D6 #${i + 1}`}
                                    value={v}
                                    onChange={(val) => setInputs(prev => prev.map((x, idx) => idx === i ? val : x))}
                                    placeholder="1–6" min={1} max={6}
                                    right={
                                        <div />
                                    }
                                />
                                <div className="w-40 md:w-48 text-xs md:text-sm">
                                    {Number.isInteger(n) ? <span>→ <b>{RAINBOW_D6_TO_COLOR[n]}</b></span>
                                        : <span className="opacity-60">Awaiting roll…</span>}
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-2 text-sm">
                        <b>Combined colors (preview):</b>{" "}
                        {colorsForMobile.join(" + ") || <span className="opacity-60">—</span>}
                    </div>

                    <StepNav
                        onBack={onBack}
                        onContinue={() => onContinue(parsed.slice(0, count))}
                        continueDisabled={!valid}
                    />
                </div>

                {/* Desktop crystal */}
                <div className="hidden md:flex justify-center">
                    <Iso8Crystal colors={colorsForMobile} grade={null} emphasize />
                </div>
            </div>
        </Section>
    );
});

const GradeStep = memo(function GradeStep({ d8Roll, colorsForCrystal, onBack, onContinue }) {
    const [input, setInput] = useState("");
    const deferred = useDeferredValue(input);
    const n = Number.parseInt(deferred, 10);
    const gradePreview = Number.isInteger(n) ? gradeFromD100(n) : null;

    const valid = (() => {
        const raw = Number.parseInt(input, 10);
        return Number.isInteger(raw) && raw >= 1 && raw <= 100;
    })();

    return (
        <Section title="Grading • Determine Grade (roll a D100)">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                {/* Mobile crystal */}
                <div className="md:hidden flex justify-center mb-2">
                    <Iso8Crystal colors={colorsForCrystal} grade={gradePreview} emphasize />
                </div>

                <div>
                    <p className="text-sm text-gray-700 mb-3">
                        Roll <b>1d100</b>, type your result, and press <b>Continue</b> to commit.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                        <StableDice type={DiceType.D100} />
                        <Field
                            label="D100 result"
                            value={input}
                            onChange={setInput}
                            placeholder="1–100" min={1} max={100}
                            right={
                                <div></div>
                            }
                        />
                        <div className="w-60 md:w-80 text-xs md:text-sm">
                            {gradePreview ? (
                                <>
                                    <div>
                                        <b>{gradePreview}</b> • Duration: <b>{COMBATS_BY_GRADE[gradePreview]}</b> combats • Max effects: <b>{EFFECTS_BY_GRADE[gradePreview]}</b>
                                    </div>
                                    {COLOR_BY_D8[d8Roll]?.key === "RED" && (
                                        <div className="text-[11px] mt-1"><b>Red bonus:</b> {STAT_INCREASE_BY_GRADE[gradePreview]}</div>
                                    )}
                                </>
                            ) : <span className="opacity-60">Awaiting roll…</span>}
                        </div>
                    </div>

                    <StepNav
                        onBack={onBack}
                        onContinue={() => onContinue(Number.parseInt(input, 10))}
                        continueDisabled={!valid}
                    />
                </div>

                {/* Desktop crystal */}
                <div className="hidden md:flex justify-center">
                    <Iso8Crystal colors={colorsForCrystal} grade={gradePreview} emphasize />
                </div>
            </div>
        </Section>
    );
});

const EffectsStep = memo(function EffectsStep({ grade, maxEffects, colorsForCrystal, onBack, onContinue }) {
    const [inputs, setInputs] = useState([]); // string[]

    useEffect(() => {
        setInputs(prev => {
            const next = prev.slice(0, maxEffects);
            while (next.length < maxEffects) next.push("");
            return next;
        });
    }, [maxEffects]);

    const deferred = useDeferredValue(inputs);

    const valid = inputs.length === maxEffects &&
        inputs.every(v => {
            const n = Number.parseInt(v, 10);
            return Number.isInteger(n) && n >= 1 && n <= 100;
        });

    return (
        <Section title="Activation • Roll Effect(s) (D100 per effect)">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                {/* Mobile crystal */}
                <div className="md:hidden flex justify-center mb-2">
                    <Iso8Crystal colors={colorsForCrystal} grade={grade} emphasize />
                </div>

                <div>
                    <p className="text-sm text-gray-700">
                        Roll <b>D100</b> once per effect. Type each result and press <b>Continue</b> to commit.
                    </p>

                    <div className="mt-3 flex flex-col gap-2">
                        <div className="flex flex-col items-center gap-2 mb-1">
                            <StableDice type={DiceType.D100} />
                            <span className="text-xs opacity-70">Use this roller and type the results below.</span>
                        </div>

                        {inputs.map((val, i) => {
                            const n = Number.parseInt(deferred[i] ?? val, 10);
                            const text = Number.isInteger(n) ? getEffectText(grade, n) : "";
                            return (
                                <div key={i} className="flex items-center gap-3 md:gap-4">
                                    <Field
                                        label={`Effect #${i + 1} (D100)`}
                                        value={val}
                                        onChange={(v) => setInputs(prev => prev.map((x, idx) => idx === i ? v : x))}
                                        placeholder="1–100" min={1} max={100}
                                        right={
                                            <div className="flex">

                                            </div>
                                        }
                                    />
                                    <div className="w-56 md:w-80 text-[11px] md:text-xs">
                                        {text || <span className="opacity-60">— effect preview</span>}
                                    </div>
                                </div>
                            );
                        })}

                        {inputs.length < (maxEffects || 0) && (
                            <div className="mt-2">
                                <button className="btn btn-sm btn-primary" onClick={() => setInputs(prev => [...prev, ""])}>
                                    Add effect roll ({inputs.length + 1} / {maxEffects})
                                </button>
                            </div>
                        )}
                    </div>

                    <StepNav
                        onBack={onBack}
                        onContinue={() => onContinue(inputs.map(v => Number.parseInt(v, 10)))}
                        continueDisabled={!valid}
                    />
                </div>

                {/* Desktop crystal */}
                <div className="hidden md:flex justify-center">
                    <Iso8Crystal colors={colorsForCrystal} grade={grade} emphasize />
                </div>
            </div>
        </Section>
    );
});

// =======================================================
//                      PAGE (Wizard)
// =======================================================
export default function ISO8Generator() {
    // -------- committed state (drives crystal + summary only) --------
    const [d8Roll, setD8Roll] = useState("");     // number or ""
    const [rainbowD6, setRainbowD6] = useState([]); // number[]
    const [d100GradeRoll, setD100GradeRoll] = useState("");
    const [effectRolls, setEffectRolls] = useState([]); // number[]

    const colorInfo = useMemo(() => COLOR_BY_D8[d8Roll] ?? null, [d8Roll]);
    const grade = useMemo(() => (d100GradeRoll ? gradeFromD100(Number(d100GradeRoll)) : null), [d100GradeRoll]);

    const maxEffects = grade ? EFFECTS_BY_GRADE[grade] : 0;
    const durationCombats = grade ? COMBATS_BY_GRADE[grade] : null;
    const redBonus = redBonusText(grade, colorInfo?.key);

    const rainbowColors = useMemo(() => {
        if (!colorInfo || colorInfo.key !== "RAINBOW") return [];
        return rainbowD6.filter(v => v >= 1 && v <= 6).map(v => RAINBOW_D6_TO_COLOR[v]);
    }, [colorInfo, rainbowD6]);

    const bonuses = useMemo(() => {
        if (!grade) return [];
        const build = (label) => label === "Red" ? `${HP_BY_GRADE[grade]} HP` : `${STAT_POINTS_BY_GRADE[grade]} ${COLOR_LABEL_TO_STAT[label]}`;
        if (colorInfo?.key === "RAINBOW") return rainbowColors.filter(Boolean).map(build);
        if (colorInfo?.label) return [build(colorInfo.label)];
        return [];
    }, [grade, colorInfo, rainbowColors]);

    const iso8 = useMemo(() => {
        const base = {
            color: colorInfo?.label ?? null,
            colorKey: colorInfo?.key ?? null,
            stat: colorInfo?.stat ?? null,
            grade: grade ?? null,
            durationCombats: durationCombats ?? null,
            effectRolls,
            bonuses,
        };
        if (colorInfo?.key === "RAINBOW") {
            return { ...base, rainbow: { count: rainbowD6.length, d6: rainbowD6, colors: rainbowColors } };
        }
        return base;
    }, [colorInfo, grade, durationCombats, effectRolls, bonuses, rainbowD6, rainbowColors]);

    // ---------- wizard steps ----------
    const [stepIdx, setStepIdx] = useState(0);
    const isRetry = colorInfo?.key === "RETRY";
    const isRainbow = colorInfo?.key === "RAINBOW";
    const hasColor = Boolean(colorInfo && !isRetry);

    const steps = useMemo(() => {
        const s = ["color"];
        if (isRainbow) s.push("rainbow");
        if (hasColor) s.push("grade", "effects", "summary");
        return s;
    }, [isRainbow, hasColor]);

    useEffect(() => { if (stepIdx >= steps.length) setStepIdx(Math.max(0, steps.length - 1)); }, [steps.length, stepIdx]);
    const current = steps[stepIdx] ?? "color";

    const colorsForCrystal = colorInfo?.key === "RAINBOW"
        ? (rainbowColors || [])
        : (hasColor && colorInfo.key !== "RAINBOW" ? [colorInfo.label] : []);

    return (
        <div className="flex flex-col items-center min-h-screen max-w-full py-6 md:py-8 gap-4 md:gap-6 pb-20 md:pb-8">
            <div className="px-3 md:px-6 w-full flex justify-center">
                <ComicTitlePanel>
                    <h1 className="text-3xl md:text-4xl font-semibold text-center">ISO-8 Generator</h1>
                </ComicTitlePanel>
            </div>

            <div className="text-sm opacity-70">
                Step {Math.min(stepIdx + 1, steps.length)} of {Math.max(steps.length, 1)}
            </div>

            {current === "color" && (
                <ColorStep
                    onBack={() => setStepIdx(i => Math.max(0, i))}
                    onContinue={(n) => {
                        setD8Roll(n);
                        if (n !== 8) { setRainbowD6([]); }
                        setStepIdx(i => i + 1);
                    }}
                />
            )}

            {current === "rainbow" && (
                <RainbowStep
                    onBack={() => setStepIdx(i => Math.max(0, i - 1))}
                    onContinue={(arr) => {
                        setRainbowD6(arr);
                        setStepIdx(i => i + 1);
                    }}
                />
            )}

            {current === "grade" && (
                <GradeStep
                    d8Roll={d8Roll}
                    colorsForCrystal={colorsForCrystal}
                    onBack={() => setStepIdx(i => Math.max(0, i - 1))}
                    onContinue={(n) => {
                        setD100GradeRoll(n);
                        setEffectRolls([]); // reset
                        setStepIdx(i => i + 1);
                    }}
                />
            )}

            {current === "effects" && (
                <EffectsStep
                    grade={grade}
                    maxEffects={maxEffects}
                    colorsForCrystal={colorsForCrystal}
                    onBack={() => setStepIdx(i => Math.max(0, i - 1))}
                    onContinue={(vals) => {
                        setEffectRolls(vals);
                        setStepIdx(i => i + 1);
                    }}
                />
            )}

            {current === "summary" && (
                <Section title="ISO-8 Summary" accent="bg-comic-primary">
                    {/* Mobile crystal */}
                    <div className="md:hidden flex justify-center mb-3">
                        <Iso8Crystal colors={colorsForCrystal} grade={grade} emphasize />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="rounded-xl border p-4">
                                <h3 className="font-semibold mb-2">Properties</h3>
                                <ul className="text-sm leading-7">
                                    <li><b>Color:</b> {iso8.color}</li>
                                    {iso8.colorKey === "RAINBOW" && iso8.rainbow?.colors?.length > 0 && (
                                        <>
                                            <li><b>Combined colors:</b> {iso8.rainbow.colors.join(" + ")}</li>
                                        </>
                                    )}
                                    <li><b>Grade:</b> {iso8.grade}</li>
                                    <li><b>Duration:</b> {iso8.durationCombats} combats (−1 per combat)</li>
                                    {iso8.bonuses?.length > 0 && <li><b>Bonuses:</b> + {iso8.bonuses.join(", + ")}</li>}
                                    {redBonus && <li><b>Red ISO-8 stat increase:</b> + {redBonus}</li>}
                                </ul>
                            </div>
                            <div className="rounded-xl border p-4">
                                <h3 className="font-semibold mb-2">Effects</h3>
                                {iso8.effectRolls?.length ? (
                                    <ol className="list-decimal list-inside text-sm leading-7">
                                        {iso8.effectRolls.map((r) => (
                                            <p key={r}> <b>{r}</b>: {getEffectText(iso8.grade, r) || <span className="opacity-60">—</span>}</p>
                                        ))}
                                    </ol>
                                ) : <div className="text-sm opacity-70">No effects recorded.</div>}
                            </div>
                        </div>

                        {/* Desktop crystal */}
                        <div className="hidden md:flex justify-center">
                            <Iso8Crystal colors={colorsForCrystal} grade={grade} emphasize />
                        </div>
                    </div>

                    {/* Desktop-only nav at summary */}
                    <div className="hidden md:flex mt-6 justify-between">
                        <button className="btn btn-outline" onClick={() => setStepIdx(i => Math.max(0, i - 1))}>← Back</button>
                        <button className="btn btn-primary" disabled>Finished</button>
                    </div>

                    {/* Mobile fixed nav (same StepNav style) */}
                    <div className="md:hidden">
                        <StepNav
                            onBack={() => setStepIdx(i => Math.max(0, i - 1))}
                            onContinue={() => { }}
                            continueDisabled
                        />
                    </div>
                </Section>
            )}
        </div>
    );
}
