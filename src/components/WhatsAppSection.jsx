import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppSection.css';

const WhatsAppSection = () => {
    return (
        <section className="section wa-section">
            <div className="container">
                <div className="wa-card glass-panel text-center">
                    <div className="wa-icon-wrapper animate-float">
                        <MessageCircle size={48} />
                    </div>

                    <h2 className="wa-title">Stay with us!</h2>
                    <p className="wa-desc">
                        Join our official recruitment WhatsApp group to get instant updates,
                        ask questions, and interact with the MDC core team.
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
