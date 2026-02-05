import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Camera, Star } from "lucide-react";

const DestinationModal = ({ destination, isOpen, onClose }) => {
    if (!destination) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto relative scrollbar-hide">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Hero Image */}
                            <div className="relative h-64 md:h-80 w-full">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="bg-primary/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                                        {destination.state}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold font-heading">{destination.name}</h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex flex-wrap gap-6 mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Star className="w-5 h-5 text-accent fill-accent" />
                                        <span className="font-bold text-dark">{destination.rating}</span> Rating
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        Best Time: Oct - Mar
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        Local Guides Available
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Camera className="w-5 h-5 text-primary" />
                                        Sightseeing Tours
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold font-heading mb-3 text-dark">About {destination.name}</h3>
                                            <p className="text-gray-500 leading-relaxed text-lg">
                                                {destination.desc} Explore the mesmerizing streets, taste the authentic local cuisine, and immerse yourself in the rich cultural heritage. Whether you are seeking adventure, spirituality, or relaxation, {destination.name} offers an unforgettable experience for every traveler.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold font-heading mb-3 text-dark">Highlights</h3>
                                            <ul className="space-y-2">
                                                {[1, 2, 3, 4].map((item) => (
                                                    <li key={item} className="flex items-start gap-3 text-gray-600">
                                                        <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Sidebar CTA */}
                                    <div className="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100">
                                        <h3 className="text-xl font-bold font-heading mb-4 text-dark">Plan Your Trip</h3>
                                        <p className="text-sm text-gray-500 mb-6">Want to customize your trip to {destination.name}? Talk to our experts.</p>
                                        <button className="w-full bg-primary hover:bg-orange-600 text-white py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-500/30 mb-3">
                                            Request Quote
                                        </button>
                                        <button className="w-full bg-white border border-gray-200 hover:border-primary hover:text-primary text-dark py-3 rounded-full font-bold transition-all">
                                            Download Brochure
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default DestinationModal;
