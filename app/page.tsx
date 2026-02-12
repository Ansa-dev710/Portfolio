import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import FunFacts from "../component/Contact";
import Portfolio from "../component/Funfacts";
import Testimonials from "../component/Testimonial";
import Contact from "../component/Portfolio";
import Footer from "../component/Footer";

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
