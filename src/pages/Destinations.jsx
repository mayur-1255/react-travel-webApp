import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { MapPin, ArrowRight, Star } from "lucide-react"; // Icons
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import DestinationModal from "../components/DestinationModal";

const destinations = [
    {
        id: 1,
        name: "Jaipur",
        state: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format",
        desc: "The Pink City, famous for its royal palaces, forts, and vibrant bazaars.",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Kerala",
        state: "South India",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format",
        desc: "God's Own Country, known for its backwaters, beaches, and lush greenery.",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Goa",
        state: "West India",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format",
        desc: "India's party capital with stunning beaches, nightlife, and Portuguese architecture.",
        rating: 4.7,
    },
    {
        id: 4,
        name: "Varanasi",
        state: "Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1768844370016-044dd73c1a7a?q=80&w=1171&auto=format",
        desc: "The spiritual capital of India, one of the world's oldest living cities.",
        rating: 4.8,
    },
    {
        id: 5,
        name: "Ladakh",
        state: "North India",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format",
        desc: "A high-altitude desert with breathtaking landscapes and monasteries.",
        rating: 4.9,
    },
    {
        id: 6,
        name: "Agra",
        state: "Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format",
        desc: "Home to the Taj Mahal, a symbol of eternal love and architectural marvel.",
        rating: 4.8,
    },
    {
        id: 7,
        name: "Udaipur",
        state: "Rajasthan",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format",
        desc: "The City of Lakes, romantic and serene with its grand palaces and lakes.",
        rating: 4.8,
    },
    {
        id: 8,
        name: "Rishikesh",
        state: "Uttarakhand",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format",
        desc: "Yoga Capital of the World, situated on the banks of the holy Ganges river.",
        rating: 4.7,
    },
    {
        id: 9,
        name: "Hampi",
        state: "Karnataka",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format",
        desc: "A UNESCO World Heritage site with stunning ancient ruins and temples.",
        rating: 4.8,
    },
];

const Destinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    return (
        <div className="font-sans text-dark bg-gray-50 overflow-x-hidden">
            <Navbar />

            {/* Header Section */}
            <header className="relative py-32 bg-dark text-white text-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/40 z-0" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Explore Incredible Destinations</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Discover the diverse landscapes, rich culture, and timeless heritage of India.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Destinations Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest, index) => (
                            <motion.div
                                key={dest.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors z-10" />
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                                        <Star className="w-3 h-3 text-accent fill-accent" />
                                        {dest.rating}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                                        <span className="text-secondary text-sm font-semibold uppercase tracking-wider mb-1 block">{dest.state}</span>
                                        <h3 className="text-3xl font-bold text-white font-heading">{dest.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-500 mb-6 leading-relaxed min-h-[48px]">{dest.desc}</p>
                                    <button
                                        onClick={() => setSelectedDestination(dest)}
                                        className="w-full py-4 text-center border border-gray-200 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all font-semibold flex items-center justify-center gap-2 group-hover:gap-3"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <DestinationModal
                destination={selectedDestination}
                isOpen={!!selectedDestination}
                onClose={() => setSelectedDestination(null)}
            />
        </div>
    );
};

export default Destinations;
