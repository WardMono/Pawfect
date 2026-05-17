// ─────────────────────────────────────────────────────────────
//  components/Services.jsx
//
//  "Our Pawsome Services" section.
//  - 3-column responsive card grid
//  - Icons: Lucide React (ShoppingBag, Scissors, Home)
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { ShoppingBag, Scissors, Home } from "lucide-react";

const SERVICES = [
    {
        id: 1,
        title: "Pet Shop",
        subLabel: "Products & Accessories",
        icon: ShoppingBag,
        accentColor: "#FF6B35",
        accentBg: "#FFF3EE",
        imageId: "1535930891776-0c2dfb7fda1a",
        description:
            "Everything your pet needs under one roof. From nutritious food to fun toys, cozy beds to stylish apparel — we've got your fur baby covered.",
        tags: ["Food & Treats", "Toys & Enrichment", "Beds & Crates", "Apparel"],
    },
    {
        id: 2,
        title: "Grooming Spa",
        subLabel: "Professional Care",
        icon: Scissors,
        accentColor: "#9B5DE5",
        accentBg: "#F5EEFF",
        imageId: "1625316708582-7c38734be31d",
        description:
            "Treat your pet to a luxurious spa day. Our professional groomers ensure your furry friend looks and feels their absolute best.",
        tags: ["Full Groom", "Bath & Dry", "Nail Trimming", "Teeth Cleaning"],
    },
    {
        id: 3,
        title: "Pet Adoption",
        subLabel: "Find Your Family",
        icon: Home,
        accentColor: "#00C9A7",
        accentBg: "#E8FFF8",
        imageId: "1601979031925-424e53b6caaa",
        description:
            "Give a rescued pet the loving home they deserve. Connect with vaccinated, microchipped pets ready to become your forever companion.",
        tags: ["Dogs", "Cats", "Vaccinated", "Microchipped"],
    },
];

function ServiceCard({ service }) {
    const [cardHovered, setCardHovered] = useState(false);
    const [btnHovered, setBtnHovered] = useState(false);
    const { title, subLabel, icon: Icon, accentColor, accentBg, imageId, description, tags } = service;

    return (
        <div
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
            style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: cardHovered ? "0 20px 60px rgba(0,0,0,0.14)" : "0 8px 40px rgba(0,0,0,0.08)",
                transform: cardHovered ? "translateY(-8px)" : "translateY(0)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Image with badge overlay */}
            <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                <img
                    src={`https://images.unsplash.com/photo-${imageId}?w=600&q=80&auto=format&fit=crop`}
                    alt={`${title} — ${subLabel}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transform: cardHovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.4s ease",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        background: "rgba(255,255,255,0.95)",
                        borderRadius: "50px",
                        padding: "6px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                    }}
                >
                    <Icon size={14} color={accentColor} strokeWidth={2.5} />
                    <span style={{ fontSize: "12px", fontWeight: "800", color: accentColor }}>
                        {subLabel}
                    </span>
                </div>
            </div>

            {/* Card content */}
            <div style={{ padding: "28px" }}>
                <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color: "#1a1a2e", marginBottom: "10px" }}>
                    {title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.7", marginBottom: "18px" }}>
                    {description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                background: accentBg,
                                color: accentColor,
                                borderRadius: "50px",
                                padding: "4px 12px",
                                fontSize: "12px",
                                fontWeight: "800",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "50px",
                        border: `2px solid ${accentColor}`,
                        background: btnHovered ? accentColor : "transparent",
                        color: btnHovered ? "#fff" : accentColor,
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: "800",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                    }}
                >
                    Learn More →
                </button>
            </div>
        </div>
    );
}

function Services() {
    return (
        <section id="services" className="section" style={{ background: "#FAFAFA", position: "relative", overflow: "hidden" }}>
            <span className="paw-watermark" style={{ top: "-40px", right: "-20px" }} aria-hidden="true">🐾</span>

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <span className="badge" style={{ background: "#FFF0E8", color: "#FF6B35" }}>✨ What We Offer</span>
                    <h2 className="section-title">
                        Our <span style={{ color: "#FF6B35" }}>Pawsome</span> Services
                    </h2>
                    <p className="section-sub" style={{ margin: "0 auto" }}>
                        Everything your pet needs — products, pampering, and a place to call home.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;