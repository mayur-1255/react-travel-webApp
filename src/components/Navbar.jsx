import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Tours", path: "#tours" },
        { name: "Destinations", path: "/destinations" },
        { name: "About", path: "#about" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <Globe className={`w-8 h-8 ${scrolled ? "text-primary" : "text-white"}`} />
                    <span
                        className={`text-2xl font-bold font-heading ${scrolled ? "text-dark" : "text-white"
                            }`}
                    >
                        Incredible<span className="text-secondary">India</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        link.path.startsWith("#") ? (
                            <a
                                key={link.name}
                                href={link.path}
                                className={`text-lg font-medium hover:text-primary transition-colors ${scrolled ? "text-dark" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium hover:text-primary transition-colors ${scrolled ? "text-dark" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-md">
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={scrolled ? "text-dark" : "text-white"} />
                    ) : (
                        <Menu className={scrolled ? "text-dark" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-800 text-lg font-medium hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-primary text-white py-3 rounded-lg font-semibold w-full">
                                Book a Trip
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
