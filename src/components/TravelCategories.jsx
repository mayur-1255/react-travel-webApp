import React from "react";
import { motion } from "framer-motion";
import { Mountain, Umbrella, Building2, Trees, Cross } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = [
    { id: 1, name: "Himalayas", icon: Mountain, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format" },
    { id: 2, name: "Beaches", icon: Umbrella, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format" },
    { id: 3, name: "Heritage", icon: Building2, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&auto=format" },
    { id: 4, name: "Nature", icon: Trees, image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format" },
    { id: 5, name: "Spiritual", icon: Cross, image: "https://images.unsplash.com/photo-1768844370016-044dd73c1a7a?q=80&w=1171&auto=format" },
];

const TravelCategories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeader title="Pick Your Travel Style" subtitle="Categories" />

                {/* Scroll Container */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                    >
                        {/* Duplicate the array to create seamless loop */}
                        {[...categories, ...categories, ...categories].map((cat, index) => (
                            <div
                                key={`${cat.id}-${index}`}
                                className="flex-none w-64 group cursor-pointer"
                            >
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mb-4">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-dark/90 to-transparent z-20">
                                        <cat.icon className="w-8 h-8 text-accent mb-2" />
                                        <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TravelCategories;
