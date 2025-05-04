import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CoreValues from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <HowWeWork />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
