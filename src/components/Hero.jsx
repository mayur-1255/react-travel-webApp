
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion"; // Keeping framer for the typing effect
import { ArrowRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30, // Moves the background down slower than scroll
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text Parallax (Moves faster than scroll for depth)
            gsap.to(textRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Ref */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110" // scale-110 prevents white gaps on scroll
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            </div>

            <div ref={textRef} className="container relative z-10 px-6 text-center text-white">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-2 mb-4 text-secondary font-semibold uppercase tracking-widest text-sm"
                    >
                        <span className="bg-secondary/20 px-3 py-1 rounded-full backdrop-blur-sm border border-secondary/30">
                            Explore the Unexplored
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        {/* Line 1 Typing Effect */}
                        <motion.span
                            className="block"
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.08 }}
                        >
                            {Array.from("Discover India,").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>

                        {/* Line 2 Typing Effect (Gradient) */}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 block"
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.08, delayChildren: 1.5 }} // Start after first line
                        >
                            {Array.from("One Journey at a Time").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>

                    {/* Subtext - Appears after typing */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5, duration: 0.8 }} // Delayed
                        className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        From royal palaces to peaceful mountains and tropical beaches —
                        experience the magic of India with our premium curated tours.
                    </motion.p>

                    {/* Buttons - Appear after subtext */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2"
                        >
                            Explore Tours
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2"
                        >
                            Plan Your Trip
                            <MapPin className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
    );
};

export default Hero;
