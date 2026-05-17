// ─────────────────────────────────────────────────────────────
//  components/Hero.jsx
//
//  Full-screen landing section.
//  - Gradient background with decorative paw watermarks
//  - Headline + subtext + two CTA buttons
//  - Two floating pet images (blob shapes) on desktop
//  - Floating badges
//  - Stat counters row
//  - Icons: Lucide React (PawPrint, Cat, Dog, Home, Scissors)
// ─────────────────────────────────────────────────────────────

import React from "react";
import { PawPrint, Cat, Dog, Home, Scissors } from "lucide-react";

const IMG_DOG = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&auto=format&fit=crop";
const IMG_CAT = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80&auto=format&fit=crop";

const STATS = [
    { value: "2,400+", label: "Happy Pets" },
    { value: "98%", label: "Satisfaction" },
    { value: "500+", label: "Adoptions" },
];

function FloatingBadge({ icon: Icon, iconColor, text, color, style }) {
    return (
        <div
            style={{
                position: "absolute",
                background: "white",
                borderRadius: "20px",
                padding: "12px 20px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "800",
                fontSize: "13px",
                color,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                ...style,
            }}
        >
            <Icon size={15} color={iconColor} strokeWidth={2.5} />
            {text}
        </div>
    );
}

function Hero() {
    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #FFF8F5 0%, #FFF0FB 50%, #F0FAFF 100%)",
                display: "flex",
                alignItems: "center",
                padding: "100px 5% 60px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative paw watermarks */}
            <span className="paw-watermark" style={{ top: "-60px", right: "-40px" }} aria-hidden="true">🐾</span>
            <span className="paw-watermark" style={{ bottom: "-80px", left: "-30px", fontSize: "150px" }} aria-hidden="true">🐾</span>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "48px",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* ── Left: Text content ──────────────────────────── */}
                <div className="animate-fade-up" style={{ flex: "1 1 380px" }}>

                    {/* Top badge */}
                    <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    </span>

                    {/* Main headline */}
                    <h1
                        style={{
                            fontFamily: "'Fredoka One', cursive",
                            fontSize: "clamp(2.6rem, 6vw, 4.0rem)",
                            lineHeight: 1.1,
                            color: "#1a1a2e",
                            marginBottom: "20px",
                            marginTop: "4px",
                        }}
                    >
                        Where Every Paw{" "}
                        <br className="hide-mobile" />
                        <span style={{ color: "#FF6B35" }}>Finds</span> Its{" "}
                        <span style={{ color: "#00C9A7" }}>Perfect</span> Match{" "}
                    </h1>

                    {/* Subtext */}
                    <p className="section-sub" style={{ marginBottom: "36px" }}>
                        Adopt, groom, and spoil your furry family members. Pawfect is your
                        one-stop destination for pet products, grooming services, and
                        finding your next best friend.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        <button
                            className="btn-primary"
                            onClick={() => scrollTo("services")}
                            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                        >
                            Explore Services
                        </button>
                        <button
                            className="btn-outline"
                            onClick={() => scrollTo("gallery")}
                            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                        >
                            Meet the Pets
                        </button>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "flex", gap: "36px", marginTop: "48px", flexWrap: "wrap" }}>
                        {STATS.map(({ value, label }) => (
                            <div key={label}>
                                <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.9rem", color: "#FF6B35", lineHeight: 1 }}>
                                    {value}
                                </div>
                                <div style={{ fontSize: "13px", color: "#888", fontWeight: "700", marginTop: "4px" }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: Floating images (desktop only) ────────── */}
                <div
                    className="hide-mobile"
                    style={{ flex: "1 1 340px", position: "relative", height: "480px" }}
                >
                    {/* Main dog image */}
                    <div
                        className="animate-float"
                        style={{
                            position: "absolute",
                            top: "0",
                            right: "20px",
                            width: "280px",
                            height: "320px",
                            borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(255,107,53,0.25)",
                        }}
                    >
                        <img src={IMG_DOG} alt="Happy golden retriever" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    {/* Secondary cat image */}
                    <div
                        className="animate-float-delay"
                        style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            width: "200px",
                            height: "220px",
                            borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(0,201,167,0.25)",
                        }}
                    >
                        <img src={IMG_CAT} alt="Cute tabby cat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;