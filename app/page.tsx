"use client";
import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useRef<any>([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection;

    sections.current.forEach((section: any) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight / 3
      ) {
        newActiveSection = section.id;
      }
    });
    if (newActiveSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}
