import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "USA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format",
        text: "The most magical trip of my life! The guides were knowledgeable and the arrangements were flawless. Highly recommended!",
        rating: 5,
    },
    {
        id: 2,
        name: "David Chen",
        location: "Singapore",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format",
        text: "India is beautiful, and this team made sure we saw the best of it. The Rajasthan tour was absolutely royal.",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Clark",
        location: "UK",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format",
        text: "From airport pickup to the final goodbye, everything was perfect. The houseboat stay in Kerala was a dream.",
        rating: 4,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-sand/20">
            <div className="container mx-auto px-6">
                <SectionHeader title="What Travelers Say" subtitle="Testimonials" />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg relative mt-10"
                        >
                            <div className="absolute -top-10 left-8">
                                <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden">
                                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <Quote className="absolute top-8 right-8 text-primary/20 w-10 h-10" />

                            <div className="pt-12">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < t.rating ? "text-accent fill-accent" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-dark">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
