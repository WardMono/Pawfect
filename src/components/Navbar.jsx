// ─────────────────────────────────────────────────────────────
//  components/Navbar.jsx
// ─────────────────────────────────────────────────────────────

import React, { useState, useEffect } from "react";
import { PawPrint, Menu, X } from "lucide-react";

const NAV_LINKS = ["About", "Services", "Pricing", "Gallery", "FAQ", "Contact"];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");   // ← NEW

    // Scroll → frosted glass effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ── IntersectionObserver → track which section is in view ──
    useEffect(() => {
        const observers = [];

        NAV_LINKS.forEach((link) => {
            const el = document.getElementById(link.toLowerCase());
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(link);
                    }
                },
                {
                    // Fire when the top ~25% of the section enters the viewport
                    rootMargin: "-10% 0px -65% 0px",
                    threshold: 0,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);   // ← immediately set active on click
        setMenuOpen(false);
    };

    // ── Shared active / base link styles ─────────────────────
    const getLinkStyle = (link) => ({
        background: "none",
        border: "none",
        borderBottom: activeSection === link
            ? "2px solid #FF6B35"
            : "2px solid transparent",
        cursor: "pointer",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "14px",
        fontWeight: "800",
        color: activeSection === link ? "#FF6B35" : "#444",
        transition: "color 0.2s, border-bottom 0.2s",
        padding: "4px 0",
        paddingBottom: "2px",
    });

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 5%",
                background: scrolled ? "rgba(255, 255, 255, 0.96)" : "transparent",
                backdropFilter: scrolled ? "blur(14px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
                boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
                transition: "background 0.35s ease, box-shadow 0.35s ease",
            }}
        >
            {/* ── Logo ─────────────────────────────────────────── */}
            <button
                onClick={() => scrollTo("hero")}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                }}
                aria-label="Pawfect home"
            >
                <PawPrint size={26} color="#FF6B35" strokeWidth={2.5} />
                <span
                    style={{
                        fontFamily: "'Fredoka One', cursive",
                        fontSize: "26px",
                        color: "#FF6B35",
                        letterSpacing: "0.5px",
                    }}
                >
                    Pawfect
                </span>
            </button>

            {/* ── Desktop Navigation ───────────────────────────── */}
            <div
                className="hide-mobile"
                style={{ display: "flex", gap: "28px", alignItems: "center" }}
            >
                {NAV_LINKS.map((link) => (
                    <button
                        key={link}
                        onClick={() => scrollTo(link)}
                        style={getLinkStyle(link)}
                        onMouseEnter={(e) => {
                            if (activeSection !== link)
                                e.currentTarget.style.color = "#FF6B35";
                        }}
                        onMouseLeave={(e) => {
                            if (activeSection !== link)
                                e.currentTarget.style.color = "#444";
                        }}
                    >
                        {link}
                    </button>
                ))}

                <button
                    onClick={() => scrollTo("pricing")}
                    style={{
                        background: "#FF6B35",
                        color: "white",
                        border: "none",
                        padding: "10px 22px",
                        borderRadius: "50px",
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: "800",
                        cursor: "pointer",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "0 4px 15px rgba(255,107,53,0.4)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,107,53,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(255,107,53,0.4)";
                    }}
                >
                    <PawPrint size={15} color="white" strokeWidth={2.5} />
                    Get Started
                </button>
            </div>

            {/* ── Mobile Hamburger ─────────────────────────────── */}
            <button
                className="show-mobile"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                style={{
                    display: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#1a1a2e",
                    padding: "4px",
                }}
            >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* ── Mobile Dropdown Menu ─────────────────────────── */}
            {menuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "70px",
                        left: 0,
                        right: 0,
                        background: "white",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                        padding: "20px 5%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        animation: "fadeUp 0.25s ease",
                    }}
                >
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                ...getLinkStyle(link),
                                fontSize: "16px",
                                textAlign: "left",
                                padding: "6px 0",
                                borderBottom: activeSection === link
                                    ? "1px solid #FF6B35"
                                    : "1px solid #f5f5f5",
                            }}
                        >
                            {link}
                        </button>
                    ))}
                    <button
                        className="btn-primary"
                        onClick={() => scrollTo("pricing")}
                        style={{ marginTop: "6px" }}
                    >
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;