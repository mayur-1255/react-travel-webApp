import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="relative py-24 bg-dark text-white overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-black/80" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Your Dream Trip to India Starts Here
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Don't wait for the perfect moment. Take the moment and make it perfect.
                        Book your adventure with us today.
                    </p>
                    <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-black/20 flex items-center gap-2 mx-auto">
                        Book Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
