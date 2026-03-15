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
                            Meta Developer Communities. Building the future, one line of code at a time.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <a href="mailto:mdc_vsp@gitam.in" className="contact-link">
                            <Mail size={18} /> mdc_vsp@gitam.in
                        </a>
                    </div>

                    <div className="footer-socials">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/meta-developer-communities/posts/?feedView=all" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/mdc_vsp" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Meta Developer Communities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
