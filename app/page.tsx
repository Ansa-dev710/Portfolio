import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/skills";
import Services from "../component/services";
import FunFacts from "../component/Funfacts";
import Portfolio from "../component/project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <FunFacts />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
