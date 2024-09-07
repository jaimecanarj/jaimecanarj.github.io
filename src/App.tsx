import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
