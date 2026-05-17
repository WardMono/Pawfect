// ─────────────────────────────────────────────────────────────
//  components/Gallery.jsx
//
//  "Find Your Forever Friend" section.
//  - 6 pet cards in a responsive grid
//  - Icons: Lucide React (Home, Heart, CheckCircle, Circle)
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { Home, Heart, CheckCircle, Circle, PawPrint } from "lucide-react";

const PETS = [
    {
        id: 1,
        name: "Coco",
        breed: "Golden Retriever",
        age: "2 yrs",
        status: "Available",
        accentColor: "#FF6B35",
        imageId: "1543466835-00a7907e9de1",
    },
    {
        id: 2,
        name: "Luna",
        breed: "Tabby Cat",
        age: "1 yr",
        status: "Available",
        accentColor: "#9B5DE5",
        imageId: "1533743983669-94fa5c4338ec",
    },
    {
        id: 3,
        name: "Max",
        breed: "Labrador Mix",
        age: "3 yrs",
        status: "Adopted",
        accentColor: "#00C9A7",
        imageId: "1561037404-61cd46aa615b",
    },
    {
        id: 4,
        name: "Mochi",
        breed: "Persian Cat",
        age: "4 yrs",
        status: "Available",
        accentColor: "#FF6B9D",
        imageId: "1573865526739-10659fec78a5",
    },
    {
        id: 5,
        name: "Cloud",
        breed: "Ragdoll Cat",
        age: "1.5 yrs",
        status: "Available",
        accentColor: "#9B5DE5",
        imageId: "1592194996308-7b43878e84a6",
    },
    {
        id: 6,
        name: "Bruno",
        breed: "Beagle Mix",
        age: "5 yrs",
        status: "Available",
        accentColor: "#FF6B35",
        imageId: "1518020382113-a7e8fc38eac9",
    },
];

function PetCard({ pet }) {
    const [hovered, setHovered] = useState(false);
    const [btnHovered, setBtnHovered] = useState(false);
    const { name, breed, age, status, accentColor, imageId } = pet;
    const isAdopted = status === "Adopted";

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.14)" : "0 8px 40px rgba(0,0,0,0.08)",
                transform: hovered ? "translateY(-8px)" : "translateY(0)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Photo + status badge */}
            <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                <img
                    src={`https://images.unsplash.com/photo-${imageId}?w=600&q=80&auto=format&fit=crop`}
                    alt={`${name} the ${breed}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transform: hovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.4s ease",
                    }}
                />
                {/* Status badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        background: isAdopted ? "#00C9A7" : "#FF6B35",
                        color: "#fff",
                        borderRadius: "50px",
                        padding: "5px 12px",
                        fontSize: "12px",
                        fontWeight: "800",
                        fontFamily: "'Nunito', sans-serif",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                    }}
                >
                    {isAdopted
                        ? <CheckCircle size={13} strokeWidth={2.5} />
                        : <Circle size={13} strokeWidth={2.5} />
                    }
                    {isAdopted ? "Adopted" : "Available"}
                </div>
            </div>

            {/* Card content */}
            <div style={{ padding: "22px 24px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.4rem", color: "#1a1a2e", margin: 0 }}>
                        {name}
                    </h3>
                    <span style={{ fontSize: "13px", color: "#aaa", fontWeight: "700" }}>{age}</span>
                </div>

                <p style={{ fontSize: "14px", color: "#888", fontWeight: "600", margin: "0 0 18px" }}>
                    {breed}
                </p>

                {/* Adopt button */}
                {!isAdopted && (
                    <button
                        onMouseEnter={() => setBtnHovered(true)}
                        onMouseLeave={() => setBtnHovered(false)}
                        style={{
                            width: "100%",
                            padding: "11px",
                            borderRadius: "50px",
                            border: `2px solid ${accentColor}`,
                            background: btnHovered ? accentColor : "transparent",
                            color: btnHovered ? "#fff" : accentColor,
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: "800",
                            fontSize: "14px",
                            cursor: "pointer",
                            transition: "all 0.25s ease",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "7px",
                        }}
                    >
                        <Home size={15} strokeWidth={2.5} />
                        Adopt {name}
                    </button>
                )}

                {/* Adopted placeholder */}
                {isAdopted && (
                    <div
                        style={{
                            width: "100%",
                            padding: "11px",
                            borderRadius: "50px",
                            background: "#f0fffe",
                            color: "#00C9A7",
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: "800",
                            fontSize: "14px",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "7px",
                            boxSizing: "border-box",
                        }}
                    >
                        <Heart size={15} color="#00C9A7" fill="#00C9A7" strokeWidth={0} />
                        Found a Home
                    </div>
                )}
            </div>
        </div>
    );
}

function Gallery() {
    const [viewBtnHovered, setViewBtnHovered] = useState(false);

    return (
        <section id="gallery" className="section" style={{ background: "#FFF5FF", position: "relative", overflow: "hidden" }}>
            <span className="paw-watermark" style={{ top: "-40px", right: "-20px" }} aria-hidden="true">🐾</span>

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <span className="badge" style={{ background: "#FFE8F0", color: "#FF6B9D" }}>
                        🐶🐱 Meet the Family
                    </span>
                    <h2 className="section-title">
                        Find Your <span style={{ color: "#FF6B9D" }}>Forever</span> Friend
                    </h2>
                    <p className="section-sub" style={{ margin: "0 auto" }}>
                        Our adorable rescues are looking for loving homes. Could you be their perfect match?
                    </p>
                </div>

                {/* Pet cards grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", marginBottom: "56px" }}>
                    {PETS.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center" }}>
                    <button
                        className="btn-primary"
                        onMouseEnter={() => setViewBtnHovered(true)}
                        onMouseLeave={() => setViewBtnHovered(false)}
                        style={{
                            transform: viewBtnHovered ? "translateY(-3px)" : "translateY(0)",
                            transition: "transform 0.25s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <PawPrint size={16} color="white" strokeWidth={2.5} />
                        View All Pets
                    </button>
                </div>
            </div>
        </section>
    );
}


export default Gallery;