// ─────────────────────────────────────────────────────────────
//  components/Testimonials.jsx
//
//  "What Pet Parents Say" section.
//  - Auto-scrolling marquee (2 rows, opposite directions)
//  - Real profile photos from Unsplash (free to use)
//  - Each card: star rating, quote, avatar photo, name, pet + location
// ─────────────────────────────────────────────────────────────

import React from "react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Maria Santos",
        pet: "Golden Retriever mom",
        location: "Makati, PH",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 5,
        quote:
            "Pawfect changed our lives! Finding Coco through their adoption service was the best decision we ever made. The whole process was so smooth and the staff were incredibly helpful.",
    },
    {
        id: 2,
        name: "Carlo Reyes",
        pet: "Cat dad of 2",
        location: "BGC, PH",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 5,
        quote:
            "The grooming spa is absolutely amazing. My cats come home looking and smelling wonderful every single time. Worth every peso!",
    },
    {
        id: 3,
        name: "Jessa Lim",
        pet: "Rescue dog parent",
        location: "Quezon City, PH",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 5,
        quote:
            "I was nervous about adopting a rescue but Pawfect made it so easy. They matched us with Bruno perfectly — he fits right into our family.",
    },
    {
        id: 4,
        name: "Ryan Cruz",
        pet: "First-time pet owner",
        location: "Pasig, PH",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 4,
        quote:
            "As a first-time pet owner, I had so many questions. The team was patient, knowledgeable, and helped me get everything I needed for my new puppy.",
    },
    {
        id: 5,
        name: "Ana Dela Cruz",
        pet: "Dog grooming regular",
        location: "Alabang, PH",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 5,
        quote:
            "The grooming team knows exactly how to handle anxious dogs. My pup used to hate baths — now she actually gets excited when we pull up to Pawfect!",
    },
    {
        id: 6,
        name: "Miguel Torres",
        pet: "Adopted 3 cats",
        location: "Mandaluyong, PH",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop&crop=face",
        rating: 5,
        quote:
            "Three cats later and I keep coming back. The Paw Pass subscription is such great value — grooming + discounts + priority service. Can't recommend enough.",
    },
];

// Duplicate for seamless looping
const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...[...TESTIMONIALS].reverse(), ...[...TESTIMONIALS].reverse()];

function StarRating({ count }) {
    return (
        <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ fontSize: "16px", color: i < count ? "#FFD93D" : "#ddd" }}>
                    ★
                </span>
            ))}
        </div>
    );
}

function TestimonialCard({ t }) {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "26px 28px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                minWidth: "400px",
                maxWidth: "400px",
                flexShrink: 0,
            }}
        >
            <StarRating count={t.rating} />
            <p
                style={{
                    fontSize: "14px",
                    color: "#555",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                    marginBottom: "20px",
                }}
            >
                "{t.quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                    src={t.avatar}
                    alt={`${t.name} profile`}
                    style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                        border: "2px solid #FFF0E8",
                    }}
                />
                <div>
                    <div style={{ fontWeight: "800", fontSize: "14px", color: "#1a1a2e" }}>
                        {t.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#aaa", marginTop: "2px" }}>
                        {t.pet} · {t.location}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="section"
            style={{
                background: "linear-gradient(135deg, #FFF8F5 0%, #F5F0FF 100%)",
                overflow: "hidden",
            }}
        >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <span className="badge" style={{ background: "#FFF9E0", color: "#b8860b" }}>
                    ⭐ Happy Pet Parents
                </span>
                <h2 className="section-title">
                    What Pet Parents <span style={{ color: "#FF6B35" }}>Say</span>
                </h2>
                <p className="section-sub" style={{ margin: "0 auto" }}>
                    Real reviews from real fur families. We let our happy customers do the talking.
                </p>
            </div>

            {/* Marquee styles */}
            <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  35s linear infinite; }
        .marquee-right { animation: marquee-right 35s linear infinite; }
      `}</style>

            {/* Row 1 — scrolls left */}
            <div style={{ overflow: "hidden", marginBottom: "24px" }}>
                <div className="marquee-left" style={{ display: "flex", gap: "24px", width: "max-content" }}>
                    {ROW1.map((t, i) => (
                        <TestimonialCard key={`r1-${i}`} t={t} />
                    ))}
                </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div style={{ overflow: "hidden" }}>
                <div className="marquee-right" style={{ display: "flex", gap: "24px", width: "max-content" }}>
                    {ROW2.map((t, i) => (
                        <TestimonialCard key={`r2-${i}`} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;