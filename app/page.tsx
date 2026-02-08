import BlogSection from "@/component/Blog";
import ContactSection from "@/component/Contact";
import Footer from "@/component/Footer";
import Hero from "@/component/Navbar";
import PortfolioSection from "@/component/Portfolio";
import ResumeSection from "@/component/Resume";
import ServicesSection from "@/component/Services";
import BioSection from "@/component/Skills";
import TestimonialsSection from "@/component/Textimonial";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <BioSection />
      <PortfolioSection />
      <ServicesSection />
      <ResumeSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
