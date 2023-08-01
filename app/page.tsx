import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
