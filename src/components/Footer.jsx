import React from "react";
import { Globe, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-6 h-6 text-primary" />
                            <span className="text-xl font-bold font-heading">
                                Incredible<span className="text-secondary">India</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Experience the soul of India with our premium curated tours.
                            From the Himalayas to the Indian Ocean, we bring you the best journeys.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 border-l-4 border-primary pl-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-base">
                            <li><a href="#" className="hover:text-primary transition-colors block">Home</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Tour Packages</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Destinations</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 border-l-4 border-secondary pl-3">Support</h3>
                        <ul className="space-y-2 text-gray-400 text-base">
                            <li><a href="#" className="hover:text-secondary transition-colors block">FAQ</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors block">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors block">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors block">Cancellation Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 border-l-4 border-accent pl-3">Get in Touch</h3>
                        <ul className="space-y-3 text-gray-400 text-base">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span>123 Tourism Plaza, Connaught Place, New Delhi, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>hello@incredibleindia.tours</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-base">
                    <p>© {new Date().getFullYear()} Incredible India Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
