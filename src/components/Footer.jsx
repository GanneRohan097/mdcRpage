import React from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo text-gradient">MDC</h3>
                        <p className="footer-desc">
                            Meta Developers Community. Building the future, one line of code at a time.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <a href="mailto:contact@mdc.edu" className="contact-link">
                            <Mail size={18} /> contact@mdc.edu
                        </a>
                    </div>

                    <div className="footer-socials">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Github">
                                <Github size={20} />
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Meta Developers Community. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
