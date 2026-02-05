import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, center = true }) => {
    return (
        <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold uppercase tracking-wider text-sm mb-2"
            >
                {subtitle}
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold font-heading text-dark"
            >
                {title}
            </motion.h2>
            {center && (
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
            )}
        </div>
    );
};

export default SectionHeader;
