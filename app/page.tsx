import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/Funfacts";
import FunFacts from "../component/About";
import Portfolio from "../component/Testimonial";
import Contact from "../component/Portfolio";
import Footer from "../component/Contact";
import Testimonials from "../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FunFacts />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
