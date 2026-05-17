// ─────────────────────────────────────────────────────────────
//  components/Pricing.jsx
//
//  "Simple, Transparent Pricing" section.
//  - 3 plan cards: Free Paw, Paw Pass (popular), Premium Pack
//  - Icons: Lucide React (PawPrint, Star, Crown, Check)
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { PawPrint, Star, Crown, Check } from "lucide-react";

const PLANS = [
    {
        id: 1,
        name: "Free Paw",
        price: "₱0",
        period: "forever",
        color: "#888",
        bg: "#f9f9f9",
        icon: PawPrint,
        popular: false,
        features: [
            "Browse pet listings",
            "1 product order/month",
            "Community forum access",
            "Basic pet care guides",
            "Email support",
        ],
    },
    {
        id: 2,
        name: "Paw Pass",
        price: "₱299",
        period: "per month",
        color: "#FF6B35",
        bg: "#FFF8F5",
        icon: Star,
        popular: true,
        features: [
            "Unlimited product orders",
            "1 grooming session/month",
            "Priority adoption matching",
            "Premium pet guides",
            "Chat support",
            "10% shop discount",
        ],
    },
    {
        id: 3,
        name: "Premium Pack",
        price: "₱599",
        period: "per month",
        color: "#9B5DE5",
        bg: "#F8F3FF",
        icon: Crown,
        popular: false,
        features: [
            "Everything in Paw Pass",
            "3 grooming sessions/month",
            "VIP adoption pipeline",
            "Vet consultation (1x/mo)",
            "24/7 priority support",
            "20% shop discount",
            "Exclusive pet events",
        ],
    },
];

function PricingCard({ plan }) {
    const [hovered, setHovered] = useState(false);
    const [btnHovered, setBtnHovered] = useState(false);
    const { name, price, period, color, bg, icon: Icon, popular, features } = plan;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: bg,
                borderRadius: "24px",
                padding: "40px 32px 36px",
                position: "relative",
                border: popular ? `2px solid ${color}` : "2px solid transparent",
                boxShadow: popular
                    ? "0 20px 60px rgba(255,107,53,0.2)"
                    : hovered
                        ? "0 20px 60px rgba(0,0,0,0.1)"
                        : "0 8px 40px rgba(0,0,0,0.06)",
                transform: hovered ? "translateY(-8px)" : "translateY(0)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Most Popular badge */}
            {popular && (
                <div
                    style={{
                        position: "absolute",
                        top: "-16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: color,
                        color: "#fff",
                        borderRadius: "50px",
                        padding: "6px 20px",
                        fontSize: "13px",
                        fontWeight: "800",
                        fontFamily: "'Nunito', sans-serif",
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                    }}
                >
                    <Star size={13} fill="#fff" strokeWidth={0} />
                    Most Popular
                </div>
            )}

            {/* Plan icon */}
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: color + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                }}
            >
                <Icon size={24} color={color} strokeWidth={2} />
            </div>

            {/* Plan name */}
            <div
                style={{
                    fontFamily: "'Fredoka One', cursive",
                    fontSize: "1.4rem",
                    color: "#1a1a2e",
                    marginBottom: "16px",
                }}
            >
                {name}
            </div>

            {/* Price */}
            <div style={{ marginBottom: "28px" }}>
                <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2.8rem", color, lineHeight: 1 }}>
                    {price}
                </span>
                <span style={{ fontSize: "14px", color: "#999", fontWeight: "700", marginLeft: "6px" }}>
                    {period}
                </span>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(0,0,0,0.07)", marginBottom: "24px" }} />

            {/* Feature list */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                {features.map((feature) => (
                    <li key={feature} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#444", fontWeight: "600" }}>
                        <Check size={16} color={color} strokeWidth={2.5} />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* CTA button */}
            <button
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "50px",
                    border: `2px solid ${color}`,
                    background: popular
                        ? btnHovered ? "transparent" : color
                        : btnHovered ? color : "transparent",
                    color: popular
                        ? btnHovered ? color : "#fff"
                        : btnHovered ? "#fff" : color,
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: "800",
                    fontSize: "15px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                }}
            >
                {price === "₱0" ? "Get Started Free" : "Choose Plan"} →
            </button>
        </div>
    );
}

function Pricing() {
    return (
        <section id="pricing" className="section" style={{ background: "white", position: "relative", overflow: "hidden" }}>
            <span className="paw-watermark" style={{ bottom: "-40px", left: "-20px" }} aria-hidden="true">🐾</span>

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <span className="badge" style={{ background: "#F0EEFF", color: "#9B5DE5" }}>
                        💜 Pricing Plans
                    </span>
                    <h2 className="section-title">
                        Simple, <span style={{ color: "#9B5DE5" }}>Transparent</span> Pricing
                    </h2>
                    <p className="section-sub" style={{ margin: "0 auto" }}>
                        Start free. Upgrade when your fur family grows. Cancel anytime.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", alignItems: "start" }}>
                    {PLANS.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;