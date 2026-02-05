import React from "react";
import { motion } from "framer-motion";
import { Clock, Star, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const packages = [
    {
        id: 1,
        title: "Royal Rajasthan Tour",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070",
        days: "7 Days / 6 Nights",
        rating: 4.9,
        price: "₹15000",
        tagline: "Land of Kings",
    },
    {
        id: 2,
        title: "Himalayan Adventure",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070",
        days: "10 Days / 9 Nights",
        rating: 4.8,
        price: "₹30000",
        tagline: "The Abode of Snow",
    },
    {
        id: 3,
        title: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070",
        days: "6 Days / 5 Nights",
        rating: 4.9,
        price: "₹12000",
        tagline: "God's Own Country",
    },
    {
        id: 4,
        title: "Goa Beach Holiday",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974",
        days: "5 Days / 4 Nights",
        rating: 4.7,
        price: "₹7000",
        tagline: "Sun, Sand & Sea",
    },
];

const FeaturedPackages = () => {
    return (
        <section className="py-20 bg-white" id="tours">
            <div className="container mx-auto px-6">
                <SectionHeader title="Trending Tour Packages" subtitle="Curated For You" />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {packages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                            }}
                            whileHover={{ y: -15 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark flex items-center gap-1 shadow-md">
                                    <Star className="w-3 h-3 text-accent fill-accent" />
                                    {pkg.rating}
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white">
                                    {pkg.tagline}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading text-dark mb-2 group-hover:text-primary transition-colors">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                                    <Clock className="w-4 h-4" />
                                    <span>{pkg.days}</span>
                                </div>

                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                                    <div>
                                        <span className="text-gray-400 text-xs">Starting from</span>
                                        <p className="text-xl font-bold text-primary">{pkg.price}</p>
                                    </div>
                                    <button className="bg-gray-100 hover:bg-primary hover:text-white text-dark p-2 rounded-full transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-12">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all">
                        View All Packages
                    </button>
                </div>
            </div>
        </section >
    );
};

export default FeaturedPackages;
