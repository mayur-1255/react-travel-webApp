import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Heart, Award, Wallet, ShieldCheck, UserCheck, Headset, Settings } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
    {
        icon: Wallet,
        title: "Affordable Packages",
        desc: "Experience luxury without breaking the bank with our curated budget-friendly options.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Hotels",
        desc: "We partner only with top-rated hotels to ensure your stay is comfortable and safe.",
    },
    {
        icon: UserCheck,
        title: "Expert Local Guides",
        desc: "Discover hidden gems and local stories with our experienced professional guides.",
    },
    {
        icon: Headset,
        title: "24/7 Support",
        desc: "Our dedicated support team is always just a call away to assist you anytime.",
    },
    {
        icon: Settings,
        title: "Customizable Tours",
        desc: "Tailor your itinerary to match your preferences for a truly personal experience.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-sand/30">
            <div className="container mx-auto px-6">
                <SectionHeader title="Why Travel With Us" subtitle="Our Promise" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-4 text-dark">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
