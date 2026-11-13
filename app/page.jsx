import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Home = () => {
  return (
    <main id="main" className="relative">
      <ScrollProgress />
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
