import React from 'react';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import './WhatsAppSection.css';

import ISHITA from '../assets/ISHITA.jpg';
import GAGAN from '../assets/GAGAN.jpg';
import NITISH from '../assets/NITISH.jpeg';
import NANDAN from '../assets/NANDAN.JPG';
import SRAVANI from '../assets/SRAVANI.jpg';
import SNEHAL from '../assets/SNEHAL.jpg';

const ebMembers = [
    { name:"Nitish Raj Vinnakota", role: "President", image: NITISH },
    {name:"Gagan Rachakonda",  role: "Vice President", image: GAGAN },
    { name:"Ishita Gupta",  role: "Technical Head", image: ISHITA },
    { name:"Sravani Kalisetty",  role: "Creative Head", image: SRAVANI },
    { name:"Snehal Andavarapu",  role: "Secretary", image: SNEHAL },
    { name:"Jothisk Nandan Palla",  role: "Head of Operations", image: NANDAN }
];

const duplicatedMembers = [...ebMembers, ...ebMembers];

const WhatsAppSection = () => {
    return (
        <section id="contact" className="section wa-section">
            <div className="container">

                <h2 className="section-title text-center text-gradient">
                    Contact Us
                </h2>

                <p className="section-subtitle">
                    Meet our Executive Board
                </p>

                <div className="carousel-wrapper">
                    <div className="eb-carousel">
                        <div className="eb-carousel-track">
                            {duplicatedMembers.map((member, index) => (
                                <div className="eb-card" key={index}>

                                    <div className="eb-img-wrapper">
                                        <img src={member.image} alt={member.role} />
                                    </div>
                                    <p className='ebname'>
                                        {member.name}
                                    </p>
                                    <p className="eb-role text-gradient">
                                        {member.role}
                                    </p>

                                    <div className="Des">
                                        <Mail size={16}/>
                                        <p>mdc@gmail.com</p>
                                    </div>

                                    <a className="deslin" href="#">
                                        <Linkedin size={16}/> LinkedIn
                                    </a>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="wa-card glass-panel text-center mt-4">
                    <div className="wa-icon-wrapper animate-float">
                        <MessageCircle size={48}/>
                    </div>

                    <h3 className="wa-title">
                        Join our WhatsApp Group
                    </h3>

                    <p className="wa-desc">
                        Get instant updates, ask questions and interact with the MDC core team.
                    </p>

                    <a
                        href="https://chat.whatsapp.com/placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary wa-btn"
                    >
                        <MessageCircle size={20}/> Join WhatsApp Group
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhatsAppSection;