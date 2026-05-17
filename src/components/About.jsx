// ─────────────────────────────────────────────────────────────
//  components/About.jsx
//
//  "Our Story" section.
//  - Two-column layout: image left, text right
//  - Floating caption overlay on the image
//  - 4 feature highlight cards (icon + title + subtitle)
//  - Icons: Lucide React (Dog, Cat, Heart, Home, PawPrint, Star)
// ─────────────────────────────────────────────────────────────

import React from "react";
import { Dog, Cat, Heart, Home, PawPrint, Star } from "lucide-react";

const IMG_ABOUT =
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80&auto=format&fit=crop";

const FEATURES = [
    {
        icon: Dog,
        iconColor: "#FF6B35",
        iconBg: "#FFF0E8",
        title: "Dog-friendly spaces",
        sub: "Tailored just for pups",
    },
    {
        icon: Cat,
        iconColor: "#9B5DE5",
        iconBg: "#F5EEFF",
        title: "Cat-safe environment",
        sub: "Cozy zones for kitties",
    },
    {
        icon: Heart,
        iconColor: "#FFD93D",
        iconBg: "#FFFBE8",
        title: "Vet-approved products",
        sub: "Quality you can trust",
    },
    {
        icon: Home,
        iconColor: "#00C9A7",
        iconBg: "#E8FFF8",
        title: "Adoption-first mindset",
        sub: "Finding forever homes",
    },
];

function FeatureCard({ icon: Icon, iconColor, iconBg, title, sub }) {
    return (
        <div
            style={{
                background: "#FFF8F5",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
            <div
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                <Icon size={20} color={iconColor} strokeWidth={2} />
            </div>
            <div>
                <div style={{ fontWeight: "800", fontSize: "14px", color: "#333" }}>{title}</div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>{sub}</div>
            </div>
        </div>
    );
}

function About() {
    return (
        <section id="about" className="section" style={{ background: "white" }}>
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "48px",
                    alignItems: "center",
                }}
            >
                {/* ── Left: Image ────────────────────────────────── */}
                <div style={{ borderRadius: "32px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.1)", position: "relative" }}>
                    <img
                        src={IMG_ABOUT}
                        alt="Two dogs running happily together"
                        style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                    />
                    {/* Floating caption overlay */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            right: "20px",
                            background: "rgba(255, 255, 255, 0.95)",
                            borderRadius: "16px",
                            padding: "16px 20px",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                        }}
                    >
                        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.05rem", color: "#FF6B35", display: "flex", alignItems: "center", gap: "8px" }}>
                            <PawPrint size={16} color="#FF6B35" strokeWidth={2.5} />
                            Our Promise
                        </div>
                        <div style={{ fontSize: "13px", color: "#555", fontWeight: "600", marginTop: "4px" }}>
                            Every pet deserves love, care, and a forever home.
                        </div>
                    </div>
                </div>

                {/* ── Right: Text content ─────────────────────────── */}
                <div>
                    <span className="badge" style={{ background: "#E8FFF8", color: "#00C9A7", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        <Star size={13} color="#00C9A7" strokeWidth={2.5} />
                        Our Story
                    </span>

                    <h2 className="section-title">
                        Born from a <span style={{ color: "#FF6B35" }}>Love</span> for{" "}
                        <span style={{ color: "#00C9A7" }}>Pets</span>
                    </h2>

                    <p className="section-sub" style={{ marginBottom: "16px" }}>
                        Pawfect was founded in 2019 by two pet parents who believed every
                        animal deserves the best — not just food and shelter, but joy,
                        play, and a loving family.
                    </p>
                    <p className="section-sub" style={{ marginBottom: "32px" }}>
                        We started with a small rescue operation and grew into a
                        full-service pet platform offering premium products, expert
                        grooming, and a trusted adoption network — all in one place.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                        {FEATURES.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;