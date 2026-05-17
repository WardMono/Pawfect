// ─────────────────────────────────────────────────────────────
//  components/Footer.jsx
//
//  Site footer — dark background (#1a1a2e)
//  - 4-column grid: Brand, Quick Links, Services, Contact Info
//  - Brand icons: react-icons (FaFacebookF, FaInstagram, FaTiktok)
//  - Contact icons: lucide-react
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { PawPrint, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const QUICK_LINKS = ["Home", "About", "Services", "Pricing", "Gallery", "FAQ", "Contact"];

const SERVICES_LINKS = [
    "Pet Shop",
    "Grooming Spa",
    "Pet Adoption",
    "Paw Pass",
    "Premium Pack",
    "Vet Consultation",
];

const CONTACT_ITEMS = [
    { icon: MapPin, value: "123 Pawfect St., Makati City" },
    { icon: Phone, value: "+63 2 8123 4567" },
    { icon: Mail, value: "hello@pawfect.ph" },
    { icon: Clock, value: "Mon–Sat 9AM–7PM" },
];

const SOCIALS = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaTiktok, label: "TikTok" },
];

function FooterLink({ label, onClick }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: hovered ? "#FF6B35" : "rgba(255,255,255,0.65)",
                textAlign: "left",
                padding: "3px 0",
                transition: "color 0.2s ease",
            }}
        >
            {label}
        </button>
    );
}

function SocialCircle({ icon: Icon, label }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            aria-label={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: hovered ? "#FF6B35" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.25s ease",
            }}
        >
            <Icon size={16} color="#fff" />
        </button>
    );
}

function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const colTitle = (text) => (
        <h4 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.1rem", color: "#fff", marginBottom: "20px" }}>
            {text}
        </h4>
    );

    return (
        <footer style={{ background: "#1a1a2e" }}>
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "64px 5% 48px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "40px",
                }}
            >
                {/* ── Column 1: Brand ─────────────────────────────── */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <PawPrint size={26} color="#FF6B35" strokeWidth={2.5} />
                        <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "26px", color: "#FF6B35" }}>
                            Pawfect
                        </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.8", marginBottom: "8px", fontStyle: "italic" }}>
                        Where Every Paw Finds Its Perfect Match
                    </p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.8", marginBottom: "24px" }}>
                        Your one-stop pet destination in the Philippines. Adoption, grooming, and premium pet products — all with love.
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {SOCIALS.map((s) => (
                            <SocialCircle key={s.label} icon={s.icon} label={s.label} />
                        ))}
                    </div>
                </div>

                {/* ── Column 2: Quick Links ────────────────────────── */}
                <div>
                    {colTitle("Quick Links")}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {QUICK_LINKS.map((link) => (
                            <FooterLink key={link} label={link} onClick={() => scrollTo(link === "Home" ? "hero" : link)} />
                        ))}
                    </div>
                </div>

                {/* ── Column 3: Services ──────────────────────────── */}
                <div>
                    {colTitle("Services")}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {SERVICES_LINKS.map((s) => (
                            <FooterLink key={s} label={s} onClick={() => scrollTo("services")} />
                        ))}
                    </div>
                </div>

                {/* ── Column 4: Contact Info ───────────────────────── */}
                <div>
                    {colTitle("Contact")}
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        {CONTACT_ITEMS.map(({ icon: Icon, value }) => (
                            <div key={value} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                <Icon size={16} color="#FF6B35" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: "600", lineHeight: "1.5" }}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    padding: "20px 5%",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                    © 2025 Pawfect. All rights reserved.
                </span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "5px" }}>
                    Made with <Heart size={13} color="#FF6B35" fill="#FF6B35" /> for pets in the Philippines 🇵🇭
                </span>
            </div>
        </footer>
    );
}

export default Footer;