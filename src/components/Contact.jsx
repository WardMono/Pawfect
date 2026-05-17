// ─────────────────────────────────────────────────────────────
//  components/Contact.jsx
//
//  "Get in Touch" section.
//  - Contact info icons: lucide-react
//  - Social icons: react-icons (FaFacebookF, FaInstagram, FaTiktok)
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const CONTACT_INFO = [
    { icon: MapPin, label: "Visit Us", value: "123 Pawfect St., Makati City, Metro Manila" },
    { icon: Phone, label: "Call Us", value: "+63 2 8123 4567" },
    { icon: Mail, label: "Email Us", value: "hello@pawfect.ph" },
    { icon: Clock, label: "Hours", value: "Mon–Sat 9AM–7PM · Sun 10AM–5PM" },
];

const SOCIALS = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaTiktok, label: "TikTok" },
];

const SUBJECTS = [
    "General Inquiry",
    "Adoption",
    "Grooming",
    "Product Order",
    "Paw Pass",
];

function InputField({ label, type = "text", value, onChange, placeholder }) {
    const [focused, setFocused] = useState(false);
    return (
        <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "800", color: "#555", marginBottom: "8px" }}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "12px",
                    border: `1.5px solid ${focused ? "#FF6B35" : "#eee"}`,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "14px",
                    color: "#333",
                    outline: "none",
                    background: "#fff",
                    transition: "border-color 0.2s ease",
                    boxSizing: "border-box",
                }}
            />
        </div>
    );
}

function SocialBtn({ icon: Icon, label }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label={label}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "50px",
                border: "2px solid #FF6B35",
                background: hovered ? "#FF6B35" : "transparent",
                color: hovered ? "#fff" : "#FF6B35",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: "800",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.25s ease",
            }}
        >
            <Icon size={14} />
            <span>{label}</span>
        </button>
    );
}

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "General Inquiry", message: "" });
    const [submitHovered, setSubmitHovered] = useState(false);
    const [selectFocused, setSelectFocused] = useState(false);
    const [textareaFocused, setTextareaFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = () => {
        if (!form.name || !form.email || !form.message) return;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
    };

    return (
        <section id="contact" className="section" style={{ background: "#FAFAFA", position: "relative", overflow: "hidden" }}>
            <span className="paw-watermark" style={{ top: "-40px", right: "-20px" }} aria-hidden="true">🐾</span>

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "56px" }}>
                    <span className="badge" style={{ background: "#FFF0E8", color: "#FF6B35" }}>📬 Contact Us</span>
                    <h2 className="section-title">
                        Get in <span style={{ color: "#FF6B35" }}>Touch</span>
                    </h2>
                    <p className="section-sub" style={{ margin: "0 auto" }}>
                        Have a question? Want to visit? We'd love to hear from you and your furry friends!
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start" }}>

                    {/* ── Left: Contact Info ───────────────────────── */}
                    <div>
                        <h3 style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem", color: "#1a1a2e", marginBottom: "28px" }}>
                            Come say hello 👋
                        </h3>
                        {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                            <div key={label} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "22px" }}>
                                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#FFF0E8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Icon size={20} color="#FF6B35" strokeWidth={2} />
                                </div>
                                <div>
                                    <div style={{ fontSize: "12px", color: "#aaa", fontWeight: "700", marginBottom: "3px" }}>{label}</div>
                                    <div style={{ fontSize: "14px", color: "#333", fontWeight: "700" }}>{value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Social buttons */}
                        <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
                            {SOCIALS.map((s) => (
                                <SocialBtn key={s.label} icon={s.icon} label={s.label} />
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Contact Form ──────────────────────── */}
                    <div style={{ background: "#fff", borderRadius: "24px", padding: "36px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
                        <InputField label="Full Name" value={form.name} onChange={handleChange("name")} placeholder="Juan dela Cruz" />
                        <InputField label="Email Address" type="email" value={form.email} onChange={handleChange("email")} placeholder="juan@email.com" />

                        <div style={{ marginBottom: "18px" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: "800", color: "#555", marginBottom: "8px" }}>Subject</label>
                            <select
                                value={form.subject}
                                onChange={handleChange("subject")}
                                onFocus={() => setSelectFocused(true)}
                                onBlur={() => setSelectFocused(false)}
                                style={{
                                    width: "100%", padding: "14px 18px", borderRadius: "12px",
                                    border: `1.5px solid ${selectFocused ? "#FF6B35" : "#eee"}`,
                                    fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "#333",
                                    outline: "none", background: "#fff", cursor: "pointer",
                                    transition: "border-color 0.2s ease", boxSizing: "border-box",
                                }}
                            >
                                {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>

                        <div style={{ marginBottom: "24px" }}>
                            <label style={{ display: "block", fontSize: "13px", fontWeight: "800", color: "#555", marginBottom: "8px" }}>Message</label>
                            <textarea
                                value={form.message}
                                onChange={handleChange("message")}
                                placeholder="Tell us how we can help you and your pet..."
                                rows={5}
                                onFocus={() => setTextareaFocused(true)}
                                onBlur={() => setTextareaFocused(false)}
                                style={{
                                    width: "100%", padding: "14px 18px", borderRadius: "12px",
                                    border: `1.5px solid ${textareaFocused ? "#FF6B35" : "#eee"}`,
                                    fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "#333",
                                    outline: "none", background: "#fff", resize: "vertical",
                                    transition: "border-color 0.2s ease", boxSizing: "border-box",
                                }}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            onMouseEnter={() => setSubmitHovered(true)}
                            onMouseLeave={() => setSubmitHovered(false)}
                            style={{
                                width: "100%", padding: "16px", borderRadius: "50px", border: "none",
                                background: submitted ? "#00C9A7" : "#FF6B35",
                                color: "#fff", fontFamily: "'Nunito', sans-serif", fontWeight: "800",
                                fontSize: "16px", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                transform: submitHovered ? "translateY(-3px)" : "translateY(0)",
                                boxShadow: submitHovered ? "0 8px 25px rgba(255,107,53,0.5)" : "0 4px 20px rgba(255,107,53,0.4)",
                                transition: "all 0.25s ease",
                            }}
                        >
                            <Send size={16} strokeWidth={2.5} />
                            {submitted ? "Message Sent!" : "Send Message"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;