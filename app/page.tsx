import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/skills";
import FunFacts from "../component/Funfacts";
import Portfolio from "../component/Portfolio";
import Testimonials from "../component/Testimonial";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FunFacts />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
