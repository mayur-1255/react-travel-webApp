import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TravelCategories from "../components/TravelCategories";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedPackages from "../components/FeaturedPackages";
import TopExperiences from "../components/TopExperiences";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="font-sans text-dark bg-gray-50 overflow-x-hidden">
            <Navbar />
            <Hero />
            <TravelCategories />
            <WhyChooseUs />
            <FeaturedPackages />
            <TopExperiences />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Home;
