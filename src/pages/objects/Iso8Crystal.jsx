// src/pages/objects/Iso8Crystal.jsx
import clsx from "clsx";

/**
 * Props:
 *  - grade: "F" | "E" | "D" | "C" | "B" | "A" | "S" | "S+"
 *  - colorKey?: "red"|"blue"|"green"|"yellow"|"orange"|"purple"|"rainbow"
 *  - colors?: string[]    // e.g. ["Blue","Red"] for rainbow (the FIRST one drives animation)
 *  - emphasize?: boolean
 *  - className?: string
 *  - fluid?: boolean
 *  - showPill?: boolean
 *  - radiate?: boolean
 *  - animate?: boolean
 *  - float?: boolean      // NEW: enable/disable floating motion (default: true)
 */

const SIZE = { F: 110, E: 125, D: 140, C: 155, B: 170, A: 190, S: 212, "S+": 228 };

// ---- Base PNGs (your assets) ----
import F_base from "../../assets/iso8/baseF.png";
import E_base from "../../assets/iso8/baseE.png";
import D_base from "../../assets/iso8/baseD.png";
import C_base from "../../assets/iso8/baseC.png";
import B_base from "../../assets/iso8/baseB.png";
import A_base from "../../assets/iso8/baseA.png";
import S_base from "../../assets/iso8/baseS.png";
import Splus_base from "../../assets/iso8/baseSPlus.png";

const IMG = {
    F: { base: F_base },
    E: { base: E_base },
    D: { base: D_base },
    C: { base: C_base },
    B: { base: B_base },
    A: { base: A_base },
    S: { base: S_base },
    "S+": { base: Splus_base },
};

const HEX = {
    red: "#E53935",
    blue: "#3A86FF",
    green: "#22C55E",
    yellow: "#d9ff00ff",
    orange: "#FB8C00",
    purple: "#9B5DE5",
};

// Glow strength per grade
const GLOW = {
    F: { blur: 5, opacity: 0.08, scale: 0.42, layers: 1, speed: 8.0 },
    E: { blur: 8, opacity: 0.12, scale: 1.02, layers: 1, speed: 7.6 },
    D: { blur: 10, opacity: 0.16, scale: 1.04, layers: 2, speed: 7.2 },
    C: { blur: 12, opacity: 0.20, scale: 1.07, layers: 2, speed: 6.8 },
    B: { blur: 14, opacity: 0.25, scale: 1.10, layers: 3, speed: 6.2 },
    A: { blur: 16, opacity: 0.30, scale: 1.12, layers: 3, speed: 5.6 },
    S: { blur: 18, opacity: 0.35, scale: 1.15, layers: 4, speed: 5.0 },
    "S+": { blur: 20, opacity: 0.40, scale: 1.18, layers: 5, speed: 4.4 },
};

// NEW: Float strength (amp/rot/sec) per grade — lower grades = stronger float
const FLOAT = {
    F: { amp: 14, rot: 2.2, sec: 3.0 },
    E: { amp: 12, rot: 2.0, sec: 3.2 },
    D: { amp: 10, rot: 1.8, sec: 3.4 },
    C: { amp: 8, rot: 1.5, sec: 3.6 },
    B: { amp: 6, rot: 1.3, sec: 3.9 },
    A: { amp: 5, rot: 1.1, sec: 4.1 },
    S: { amp: 4, rot: 0.9, sec: 4.3 },
    "S+": { amp: 3, rot: 0.8, sec: 4.5 },
};

function resolveSrc(grade) {
    const entry = IMG[grade] || IMG.C;
    return entry.base;
}

function toRGBA(hex, a = 1) {
    const s = String(hex).replace("#", "");
    const r = parseInt(s.length === 3 ? s[0] + s[0] : s.slice(0, 2), 16);
    const g = parseInt(s.length === 3 ? s[1] + s[1] : s.slice(2, 4), 16);
    const b = parseInt(s.length === 3 ? s[2] + s[2] : s.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getColors({ colorKey, colors }) {
    if (Array.isArray(colors) && colors.length) {
        return colors.map(c => HEX[String(c).toLowerCase()]).filter(Boolean);
    }
    if (colorKey === "rainbow") {
        return ["blue", "purple", "green", "yellow", "orange", "red"].map(k => HEX[k]);
    }
    if (colorKey) {
        return [HEX[String(colorKey).toLowerCase()]].filter(Boolean);
    }
    return [];
}

// ---- Background builders ----
function buildGlowBackground(hexes, baseOpacity) {
    if (!hexes.length) return null;
    const layers = hexes.map(h => {
        const c1 = toRGBA(h, Math.min(baseOpacity, 0.95));
        const c2 = toRGBA(h, Math.max(baseOpacity * 0.55, 0.18));
        const c3 = toRGBA(h, Math.max(baseOpacity * 0.25, 0.10));
        return `radial-gradient(circle at 50% 45%, ${c1} 0%, ${c2} 38%, ${c3} 60%, transparent 78%)`;
    });
    return layers.join(", ");
}

function buildTintBackground({ colorKey, colors }) {
    const list = getColors({ colorKey, colors });
    if (!list.length) return null;
    if (list.length === 1) return list[0];
    const stops = list
        .map((h, i) => `${h} ${Math.round((i * 100) / (list.length - 1))}%`)
        .join(", ");
    return `linear-gradient(135deg, ${stops})`;
}

function buildDropShadow(hexes, gradeCfg) {
    if (!hexes.length) return "none";
    const spread = Math.round(gradeCfg.blur * 0.85);
    const steps = Math.max(gradeCfg.layers, 2);
    const parts = [];
    for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const blur = Math.round(spread * (0.4 + 0.6 * t));
        const alpha = gradeCfg.opacity * (0.5 + 0.5 * t);
        for (const h of hexes) {
            parts.push(`drop-shadow(0 0 ${blur}px ${toRGBA(h, alpha)})`);
        }
    }
    return parts.join(" ");
}

// Rays (single-color repeating conic for animation)
function buildRaysGradient(hexes, baseOpacity) {
    if (!hexes.length) return null;
    const c = toRGBA(hexes[0], baseOpacity * 0.45);
    return `repeating-conic-gradient(from 0deg, ${c} 0deg 6deg, transparent 6deg 22deg)`;
}

export default function Iso8Crystal({
    grade,
    colorKey,
    colors,
    emphasize,
    className,
    fluid = false,
    showPill = true,
    radiate = true,
    animate = true,
    float = true, // NEW default
}) {
    const g = grade || "F";
    const src = resolveSrc(g);
    const glowCfg = GLOW[g] || GLOW.F;
    const floatCfg = FLOAT[g] || FLOAT.C;

    // Full list (tint can blend)
    const fullColorList = getColors({ colorKey, colors });

    // Animation color: only ONE (first provided; for rainbow fallback to blue)
    const animColorList =
        fullColorList.length > 0 ? [fullColorList[0]] : colorKey === "rainbow" ? [HEX.blue] : [];

    const glowBg = radiate ? buildGlowBackground(animColorList, glowCfg.opacity) : null;
    const raysBg = radiate ? buildRaysGradient(animColorList, glowCfg.opacity) : null;
    const dropShadow = buildDropShadow(animColorList, glowCfg);
    const tint = buildTintBackground({ colorKey, colors });

    const boxStyle = fluid
        ? { width: "100%", position: "relative", isolation: "isolate", overflow: "visible" }
        : { width: SIZE[g] || 150, height: Math.round((SIZE[g] || 150) * 1.25), position: "relative", isolation: "isolate", overflow: "visible" };

    const maskStyles = {
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
    };

    // Animation timings
    const spinSec = Math.max(3.0, glowCfg.speed);
    const pulseSec = Math.max(2.0, glowCfg.speed * 0.52);
    const waveSec = Math.max(2.4, glowCfg.speed * 0.68);
    const shimmerSec = Math.max(1.9, glowCfg.speed * 0.48);

    // Float strength (now clearly visible, esp. on low grades)
    const floatAmpPx = floatCfg.amp;
    const floatRotDeg = floatCfg.rot;
    const floatSec = floatCfg.sec;

    return (
        <div className={clsx("relative", className)} style={boxStyle}>
            {fluid && <div style={{ paddingTop: "125%" }} />}

            {/* Floating wrapper – everything inside floats together */}
            <div
                className="absolute inset-0"
                style={{
                    transformOrigin: "50% 55%",
                    willChange: "transform",
                    animation: animate && float ? `iso8Float ${floatSec}s ease-in-out infinite alternate` : "none",
                    "--iso8-float-amp": `${floatAmpPx}px`,
                    "--iso8-float-amp-neg": `${-floatAmpPx}px`,
                    "--iso8-float-rot": `${floatRotDeg}deg`,
                    "--iso8-float-rot-neg": `${-floatRotDeg}deg`,
                }}
            >
                {/* Rays */}
                {raysBg && (
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            zIndex: 0,
                            transform: `scale(${glowCfg.scale * 1.08})`,
                            filter: `blur(${Math.round(glowCfg.blur * 0.6)}px)`,
                            background: raysBg,
                            opacity: Math.min(glowCfg.opacity * 0.85, 0.9),
                            borderRadius: "50%",
                            animation: animate ? `iso8Spin ${spinSec}s linear infinite` : "none",
                            mixBlendMode: "screen",
                        }}
                    />
                )}

                {/* Base glow */}
                {radiate && glowBg && (
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            zIndex: 0,
                            transform: `scale(${glowCfg.scale})`,
                            filter: `blur(${glowCfg.blur}px)`,
                            background: glowBg,
                            animation: animate ? `iso8Pulse ${pulseSec}s ease-in-out infinite alternate` : "none",
                        }}
                    />
                )}

                {/* Expanding waves */}
                {radiate && animColorList.length > 0 && (
                    <>
                        {[0, 1].map(i => {
                            const c = animColorList[0];
                            const base = toRGBA(c, Math.min(0.28 + i * 0.07, 0.45));
                            return (
                                <div
                                    key={i}
                                    aria-hidden
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        zIndex: 0,
                                        background: `radial-gradient(circle at 50% 48%, transparent 0%, transparent 55%, ${base} 65%, transparent 78%)`,
                                        filter: `blur(${Math.round(glowCfg.blur * 0.7)}px)`,
                                        transform: `scale(${1 + i * 0.08})`,
                                        animation: animate ? `iso8Wave ${waveSec + i * 0.6}s ease-out ${i * (waveSec * 0.25)}s infinite` : "none",
                                    }}
                                />
                            );
                        })}
                    </>
                )}

                {/* Crystal image */}
                <img
                    src={src}
                    alt={`ISO-8 grade ${g}`}
                    draggable={false}
                    decoding="async"
                    loading="lazy"
                    className="absolute inset-0"
                    style={{
                        zIndex: 2,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        imageRendering: "auto",
                        filter: `${emphasize ? "drop-shadow(0 6px 18px rgba(0,0,0,.35)) " : ""}${dropShadow}`,
                        pointerEvents: "none",
                        userSelect: "none",
                        willChange: "transform, filter, opacity",
                    }}
                />

                {/* Inner tint (can blend multiple colors) */}
                {tint && (
                    <>
                        <div
                            aria-hidden
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                zIndex: 3,
                                ...maskStyles,
                                background: tint,
                                mixBlendMode: "color",
                                opacity: 1,
                                animation: animate ? `iso8Shimmer ${shimmerSec}s ease-in-out infinite alternate` : "none",
                            }}
                        />
                        <div
                            aria-hidden
                            className="absolute inset-0 pointer-events-none"
                            style={{ zIndex: 3, ...maskStyles, background: tint, mixBlendMode: "multiply", opacity: 0.35 }}
                        />
                    </>
                )}

                {/* Grade pill (floats with the crystal) */}
                {showPill && grade && (
                    <div
                        className="absolute left-1/2 -translate-x-1/2 text-[11px] px-2 py-[2px] rounded-full bg-black/70 text-white font-semibold"
                        style={{ bottom: -8, zIndex: 4 }}
                    >
                        Grade {g}
                    </div>
                )}
            </div>

            {/* Keyframes */}
            <style>{`
        @keyframes iso8Spin {
          from { transform: rotate(0deg) scale(${(GLOW[g]?.scale * 1.08) || 1.1}); }
          to   { transform: rotate(360deg) scale(${(GLOW[g]?.scale * 1.08) || 1.1}); }
        }
        @keyframes iso8Pulse {
          0%   { opacity: 0.82; transform: scale(${(GLOW[g]?.scale) || 1.1}); }
          100% { opacity: 1.00; transform: scale(${(((GLOW[g]?.scale || 1.1) * 1.06)).toFixed(3)}); }
        }
        @keyframes iso8Wave {
          0%   { opacity: 0.00; transform: scale(0.90); }
          35%  { opacity: 0.58; }
          100% { opacity: 0.00; transform: scale(1.25); }
        }
        @keyframes iso8Shimmer {
          0%   { opacity: 0.30; }
          100% { opacity: 0.46; }
        }
        /* NEW: stronger floating motion (grade-specific via CSS vars) */
        @keyframes iso8Float {
          0%   { transform: translateY(var(--iso8-float-amp-neg)) rotate(var(--iso8-float-rot-neg)); }
          100% { transform: translateY(var(--iso8-float-amp))     rotate(var(--iso8-float-rot)); }
        }
      `}</style>
        </div>
    );
}
