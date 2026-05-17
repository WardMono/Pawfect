// ─────────────────────────────────────────────────────────────
//  components/FAQ.jsx
//
//  "Got Questions?" section.
//  - Centered header with badge, title, subtitle
//  - Accordion: one item open at a time
//  - Arrow rotates 180° when open
//  - Open item: purple left border + light purple bg
//  - Hover: slight bg tint on closed items
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";

const FAQS = [
    {
        id: 1,
        question: "How does pet adoption work at Pawfect?",
        answer:
            "Browse available pets in our gallery, submit an adoption application, and our team will match you based on lifestyle and home environment. The process takes 3–5 business days.",
    },
    {
        id: 2,
        question: "Are all pets vaccinated and microchipped?",
        answer:
            "Yes! Every pet in our adoption program is fully vaccinated, dewormed, and microchipped before being listed. Vet records are included with every adoption.",
    },
    {
        id: 3,
        question: "What's included in the grooming packages?",
        answer:
            "Our Full Groom includes bath, blow dry, haircut, nail trimming, ear cleaning, and teeth brushing. Bath & Dry includes everything except the haircut. All packages use pet-safe, premium products.",
    },
    {
        id: 4,
        question: "Can I cancel my Paw Pass subscription anytime?",
        answer:
            "Absolutely. You can cancel anytime from your account dashboard with no penalties or fees. Your benefits stay active until the end of your current billing period.",
    },
    {
        id: 5,
        question: "Do you deliver pet products?",
        answer:
            "Yes, we deliver nationwide across the Philippines. Metro Manila orders arrive within 1–2 days. Provincial orders take 3–5 business days. Free delivery on orders over ₱999.",
    },
    {
        id: 6,
        question: "What if a pet I adopted doesn't work out?",
        answer:
            "We have a 30-day adjustment period. If the adoption isn't working for any reason, we'll help rehome the pet at no cost and support you through the entire process — no questions asked.",
    },
    {
        id: 7,
        question: "How do I book a grooming appointment?",
        answer:
            "Book via our website, call our hotline, or message us on Facebook. Paw Pass members get priority slots and can book up to 2 weeks in advance.",
    },
    {
        id: 8,
        question: "Is Pawfect open on weekends?",
        answer:
            "Yes! We're open Monday–Saturday 9AM–7PM and Sunday 10AM–5PM. Holiday hours may vary — check our Facebook page for the latest updates.",
    },
];

function FAQItem({ item, isOpen, onToggle }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: isOpen ? "1.5px solid #9B5DE5" : "1.5px solid #eee",
                borderLeft: isOpen ? "4px solid #9B5DE5" : "1.5px solid #eee",
                background: isOpen ? "#F8F3FF" : hovered ? "#FAFAFA" : "#fff",
                transition: "all 0.25s ease",
                marginBottom: "12px",
            }}
        >
            {/* Question row */}
            <button
                onClick={onToggle}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                }}
            >
                <span
                    style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: "800",
                        fontSize: "15px",
                        color: isOpen ? "#9B5DE5" : "#1a1a2e",
                        lineHeight: "1.4",
                        transition: "color 0.25s ease",
                    }}
                >
                    {item.question}
                </span>
                <span
                    style={{
                        fontSize: "18px",
                        color: isOpen ? "#9B5DE5" : "#aaa",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.1s ease, color 0.25s ease",
                        flexShrink: 0,
                    }}
                >
                    ▾
                </span>
            </button>

            {/* Answer — smooth expand */}
            <div
                style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                }}
            >
                <p
                    style={{
                        padding: "0 24px 20px",
                        margin: 0,
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.8",
                        fontWeight: "600",
                    }}
                >
                    {item.answer}
                </p>
            </div>
        </div>
    );
}

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            id="faq"
            className="section"
            style={{ background: "white", position: "relative", overflow: "hidden" }}
        >
            <span
                className="paw-watermark"
                style={{ bottom: "-40px", right: "-20px" }}
                aria-hidden="true"
            >
                🐾
            </span>

            <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <span className="badge" style={{ background: "#F0EEFF", color: "#9B5DE5" }}>
                        💜 FAQ
                    </span>
                    <h2 className="section-title">
                        Got <span style={{ color: "#9B5DE5" }}>Questions?</span>
                    </h2>
                    <p className="section-sub" style={{ margin: "0 auto" }}>
                        Everything you need to know about Pawfect. Can't find your answer? Just reach out!
                    </p>
                </div>

                {/* Accordion */}
                <div>
                    {FAQS.map((item) => (
                        <FAQItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;