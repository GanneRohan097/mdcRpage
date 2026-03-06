import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppSection.css';

const ebMembers = [
    { role: "President", image: "https://ui-avatars.com/api/?name=Executive+1&background=random&color=fff" },
    { role: "Vice President", image: "https://ui-avatars.com/api/?name=Executive+2&background=random&color=fff" },
    { role: "Technical Head", image: "https://ui-avatars.com/api/?name=Executive+3&background=random&color=fff" },
    { role: "Creative Head", image: "https://ui-avatars.com/api/?name=Executive+4&background=random&color=fff" },
    { role: "Secretary", image: "https://ui-avatars.com/api/?name=Executive+5&background=random&color=fff" },
    { role: "Head of Operations", image: "https://ui-avatars.com/api/?name=Executive+6&background=random&color=fff" }
];

const duplicatedMembers = [...ebMembers, ...ebMembers];

const WhatsAppSection = () => {
    return (
        <section id="contact" className="section wa-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Contact Us</h2>
                <p className="section-subtitle">Meet our Executive Board</p>

                <div className="carousel-wrapper">
                    <div className="eb-carousel">
                        <div className="eb-carousel-track">
                            {duplicatedMembers.map((member, index) => (
                                <div className="eb-card" key={index}>
                                    <img src={member.image} alt={member.name} className="eb-image" />
                                    <p className="eb-role text-gradient">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="wa-card glass-panel text-center mt-4">
                    <div className="wa-icon-wrapper animate-float">
                        <MessageCircle size={48} />
                    </div>

                    <h3 className="wa-title">Join our WhatsApp Group</h3>
                    <p className="wa-desc">
                        Get instant updates, ask questions, and interact with the MDC core team.
                    </p>

                    <a
                        href="https://chat.whatsapp.com/placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary wa-btn"
                    >
                        <MessageCircle size={20} /> Join WhatsApp Group
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppSection;
