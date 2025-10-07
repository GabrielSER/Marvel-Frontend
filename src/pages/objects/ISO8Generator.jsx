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
    if (n === 100) return "S+";    // 100           → 1%
    if (n >= 95) return "S";       // 95–99         → 5%
    if (n >= 86) return "A";       // 86–94         → 9%
    if (n >= 71) return "B";       // 71–85         → 15%
    if (n >= 51) return "C";       // 51–70         → 20%
    if (n >= 36) return "D";       // 36–50         → 15%
    if (n >= 21) return "E";       // 21–35         → 15%
    return "F";                    // 1–20          → 20%
}

const EFFECTS_BY_GRADE = { "S+": 3, "S": 3, "A": 2, "B": 2, "C": 1, "D": 1, "E": 1, "F": 1 };
const COMBATS_BY_GRADE = { "S+": 30, "S": 25, "A": 20, "B": 20, "C": 10, "D": 10, "E": 10, "F": 10 };
const STAT_POINTS_BY_GRADE = { "S+": 3, "S": 2, "A": 2, "B": 1, "C": 1, "D": 1, "E": 1, "F": 1 };
const HP_BY_GRADE = { "S+": 30, "S": 20, "A": 20, "B": 10, "C": 10, "D": 10, "E": 10, "F": 10 };
const STAT_INCREASE_BY_GRADE = { "S+": 30, "S": 20, "A": 20, "B": 10, "C": 10, "D": 10, "E": 10, "F": 10 };

// ---------------- UI HELPERS ----------------

// Debounce helper: smooths heavy UI updates without affecting the input caret
function useDebouncedValue(value, delay = 160) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    }, [value, delay]);
    return debounced;
}

const Section = ({ title, children, text, accent = "bg-comic-secondary" }) => (
    <div className="w-full px-3 md:px-4">
        {/* Center the header + text to the same max width */}
        <div className="w-full mx-0 md:mx-auto">
            <div className="flex justify-center mb-3">
                <ComicTitlePanel className={clsx(accent, "px-4")}>
                    <h2 className="text-lg md:text-xl font-semibold text-center">{title}</h2>
                </ComicTitlePanel>
            </div>

            {text && (
                <p className="text-gray-700 mb-2 text-left px-4 md:px-20 py-2 md:py-4">
                    {text}
                </p>
            )}
        </div>

        {/* Center the white section */}
        <div className="w-full max-w-6xl mx-auto bg-white/80 rounded-2xl shadow p-3 md:p-4">
            {children}
        </div>
    </div>
);

const Field = ({ label, value, onChange, placeholder, type = "text", min, max, right }) => (
    <label className="flex items-center gap-3 justify-between py-2">
        <span className="text-sm font-semibold w-36 md:w-44">{label}</span>
        <input
            className="input input-bordered w-24 md:w-28 text-center font-mono border border-primary"
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
// =======================================================

/** INLINE nav (mobile & desktop): sits right UNDER the step content */
const StepNav = ({ onBack, onContinue, continueDisabled, showBack = true, showContinue = true }) => (
    <div className="mt-6 w-full flex items-center justify-between">
        <div className="flex-1">
            {showBack && (
                <button
                    className="btn btn-outline btn-sm md:btn-md"
                    onMouseDown={(e) => e.preventDefault()} // keep focus in the input
                    onClick={onBack}
                >
                    <ComicTitlePanel className="bg-white">
                        ← Back
                    </ComicTitlePanel>
                </button>
            )}
        </div>
        <div className="flex-1 text-right">
            {showContinue && !continueDisabled && (
                <button
                    className="btn btn-primary btn-sm md:btn-md"
                    onMouseDown={(e) => e.preventDefault()} // keep focus in the input
                    onClick={onContinue}
                >
                    <ComicTitlePanel className="bg-white">
                        Continue →
                    </ComicTitlePanel>
                </button>
            )}
        </div>
    </div>
);

const ColorStep = memo(function ColorStep({ onBack, onContinue, showBack, showContinue }) {
    const [input, setInput] = useState("");
    const n = Number.parseInt(input, 10);
    const valid = Number.isInteger(n) && n >= 2 && n <= 8; // block RETRY=1
    const preview = Number.isInteger(n) && n >= 1 && n <= 8 ? COLOR_BY_D8[n] : null;

    return (
        <Section
            title="Discovery • Determine Color (roll a D8)"
            text="ISO-8 are colorless with first found. To unlock the ISO-8's potential a character must do the discovering process. In this phase, the player will throw 1d8. This will determine the color of the ISO-8. The color of an ISO-8 is closely related to a stat. For example, red ISO-8 will always increase health (HP). Below you can determine the color of your ISO-8 according ot your 1d8 throw."
        >
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
                            right={<div />}
                            autoFocus
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
                        showBack={showBack}
                        showContinue={showContinue}
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

const RainbowStep = memo(function RainbowStep({ onBack, onContinue, showBack, showContinue }) {
    const [count] = useState(2);
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
        <Section
            title="Discovery • Rainbow colors (roll 2–3 D6)"
            text="ISO-8 are colorless with first found. To unlock the ISO-8's potential a character must do the discovering process. In this phase, the player will throw 1d8. This will determine the color of the ISO-8. The color of an ISO-8 is closely related to a stat. For example, red ISO-8 will always increase health (HP). Below you can determine the color of your ISO-8 according ot your 1d8 throw."
        >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-6 items-start">
                {/* Mobile crystal */}
                <div className="md:hidden flex justify-center mb-2">
                    <Iso8Crystal colors={colorsForMobile} grade={null} emphasize />
                </div>

                <div>
                    <div className="text-sm mb-2">
                        Roll <b>two d6</b>, type them, then press <b>Continue</b>. Reroll if you get duplicates.
                    </div>
                    <div className="flex items-center gap-3 mb-2">
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
                                    right={<div />}
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
                        showBack={showBack}
                        showContinue={showContinue}
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

const GradeStep = memo(function GradeStep({ d8Roll, colorsForCrystal, onBack, onContinue, showBack, showContinue }) {
    const [input, setInput] = useState("");

    // Debounce only the heavy preview (keeps typing buttery-smooth)
    const debounced = useDebouncedValue(input, 160);
    const n = Number.parseInt(debounced, 10);
    const gradePreview = Number.isInteger(n) ? gradeFromD100(n) : null;

    const valid = (() => {
        const raw = Number.parseInt(input, 10);
        return Number.isInteger(raw) && raw >= 1 && raw <= 100;
    })();

    return (
        <Section
            title="Grading • Determine Grade (roll a D100)"
            text="ISO-8 may vary in power and potential. After the color of an ISO-8 is discovered, its true potential will be unlocked in the form of the ISO-8's grade. The grade of an ISO-8 is meassured between F and S+ (F being the lowest grading of an ISO-8 and S+ being the highest). The higher grade ISO-8 have more special effects than the lower grade ones.  To determine the grade of an ISO-8 the player must throw 1d100. It is important to know that the duration of the effects granted by the ISO-8 is limited and once the crystal is activated the effect will last depending on the ISO-8 grade. Each Combat the player has will decrease 1 unit to the duration of the ISO-8."
        >
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
                            right={<div></div>}
                            autoFocus
                        />
                        <div className="w-60 md:w-80 text-xs md:text-sm">
                            {gradePreview ? (
                                <>
                                    <div>
                                        <b>{gradePreview}</b> • Duration: <b>{COMBATS_BY_GRADE[gradePreview]}</b> combats • Max effects: <b>{EFFECTS_BY_GRADE[gradePreview]}</b>
                                    </div>
                                    {COLOR_BY_D8[d8Roll]?.key === "RED" && (
                                        <div className="text-[11px] mt-1"><b>HP bonus:</b> {STAT_INCREASE_BY_GRADE[gradePreview]} HP</div>
                                    )}
                                </>
                            ) : <span className="opacity-60">Awaiting roll…</span>}
                        </div>
                    </div>

                    <StepNav
                        onBack={onBack}
                        onContinue={() => onContinue(Number.parseInt(input, 10))}
                        continueDisabled={!valid}
                        showBack={showBack}
                        showContinue={showContinue}
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

const EffectsStep = memo(function EffectsStep({ grade, maxEffects, colorsForCrystal, onBack, onContinue, showBack, showContinue }) {
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
        <Section
            title="Activation • Roll Effect(s) (D100 per effect)"
            text="Once you know the grade of your ISO-8 you can determine the effects that it will have on your character. As previously stated, depending on your ISO-8's grade there may up to 3 effects. Each effect will be determined by throwing another 1d100. The effect obtained will vary depending on the grade of your ISO-8 and the number obtained on your 1d100 throw.  Adter the ISO-8 is activated, the user will gain it's effects immediately. Have in mind, F and E rank ISO-8 may have negative effects. There is also the chance that the ISO-8 provides no additional effect. ISO-8 effects will last according to its grade."
        >
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
                                        right={<div className="flex"></div>}
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
                        showBack={showBack}
                        showContinue={showContinue}
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

    const isFirstStep = stepIdx === 0;
    const isLastStep = stepIdx === steps.length - 1;

    const colorsForCrystal = colorInfo?.key === "RAINBOW"
        ? (rainbowColors || [])
        : (hasColor && colorInfo.key !== "RAINBOW" ? [colorInfo.label] : []);

    // Restart handler
    const Restarter = () => {
        setD8Roll("");
        setRainbowD6([]);
        setD100GradeRoll("");
        setEffectRolls([]);
        setStepIdx(0);
    };

    return (
        <div className="flex flex-col items-center h-auto max-w-full py-6 md:py-8 gap-4 md:gap-6">
            <div className="px-3 md:px-6 w-full flex justify-center">
                <ComicTitlePanel>
                    <h1 className="text-4xl md:text-4xl font-semibold text-center p-4 z-50">ISO-8</h1>
                </ComicTitlePanel>
            </div>
            <p className='text-gray-700 mb-2 text-left px-6 md:px-20'>
                Isotope-8, also known as ISO-8 are mysterious energy crystals that appear as residue of events that involve great amounts of cosmic energy. These crystals have the power to improve the capabilities of individuals who activate them, but they also have a chance to weaken the user.
                The true nature of the Isotope-8 is unknown. Mutable at a subatomic level, the Iso-8 attaches itself to the essential characteristic of a material it touches and intensifies it. According to Otto Octavius, the Isotope-8 can be considered "the perfect catalyst," although Reed Richards has stated it is not because, unlike catalysts, the Isotope-8 also changes itself.
                There are three important phases in an ISO-8 crystal's lifespan: The discovery, the grading and the activation processes.
            </p>

            <div className="text-sm opacity-70">
                Step {Math.min(stepIdx + 1, steps.length)} of {Math.max(steps.length, 1)}
            </div>

            {current === "color" && (
                <ColorStep
                    showBack={false}
                    showContinue={true}
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
                    showBack={!isFirstStep}
                    showContinue={!isLastStep}
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
                    showBack={!isFirstStep}
                    showContinue={!isLastStep}
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
                    showBack={!isFirstStep}
                    showContinue={!isLastStep}
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

                    {/* Back only on summary */}
                    <StepNav
                        onBack={() => setStepIdx(i => Math.max(0, i - 1))}
                        onContinue={() => { }}
                        continueDisabled
                        showBack={true}
                        showContinue={false}
                    />
                </Section>
            )}

            {/* ----- GLOBAL RESTART BUTTON (below everything) ----- */}
            <div className="w-full max-w-6xl mx-auto px-3 md:px-4 mt-8 mb-8">
                <div className="flex justify-center">
                    <button
                        className="btn btn-outline"
                        onClick={Restarter}
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="Restart ISO-8 Generator"
                        title="Restart ISO-8 Generator"
                    >
                        <ComicTitlePanel className="bg-white">
                            ↺ Restart
                        </ComicTitlePanel>

                    </button>
                </div>
            </div>
        </div>
    );
}
