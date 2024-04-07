import About from "@/components/about/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";

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
