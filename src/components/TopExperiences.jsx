import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
    { id: 1, name: "Desert Safari", image: "https://images.unsplash.com/photo-1526728388798-765ee8e1a5aa?q=80&w=1170&auto=format" },
    { id: 2, name: "Houseboat Stay", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format" },
    { id: 3, name: "River Rafting", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=600&auto=format" },
    { id: 4, name: "Temple Tours", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1170&auto=format" },
    { id: 5, name: "Jungle Safari", image: "https://images.unsplash.com/photo-1669021820358-317111184ede?q=80&w=1170&auto=format" },
];

const TopExperiences = () => {
    return (
        <section className="py-20 bg-orange-50 text-dark overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader title="Unforgettable Experiences" subtitle="Memories for Life" center={false} />

                {/* Scroll Container */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {/* Duplicate the array to create seamless loop */}
                        {[...experiences, ...experiences].map((exp, index) => (
                            <div
                                key={`${exp.id}-${index}`}
                                className="flex-none w-72 md:w-96"
                            >
                                <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/50">
                                    <img
                                        src={exp.image}
                                        alt={exp.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-2xl text-gray-100 font-bold font-heading mb-2">{exp.name}</h3>
                                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                            Explore the best of {exp.name} with our exclusive guides.
                                        </p>
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

export default TopExperiences;
