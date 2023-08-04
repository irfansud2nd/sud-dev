"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavMenu from "./NavMenu";

const Links = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = useRef<any>([]);

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection;

    sections.current.forEach((section: any) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop - sectionHeight / 5 &&
        pageYOffset < sectionOffsetTop + sectionHeight / 3
      ) {
        newActiveSection = section.id;
      }
    });
    if (newActiveSection) {
      setActiveSection(newActiveSection);
    }
  };

  return (
    <div>
      <div className="hidden md:flex items-baseline gap-2">
        <Link
          href="/#home"
          className={`${
            activeSection === "home"
              ? "border-b-black"
              : "border-b-transparent "
          } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={`${
            activeSection === "about"
              ? "border-b-black"
              : "border-b-transparent "
          } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
        >
          About
        </Link>
        <Link
          href="/#projects"
          className={`${
            activeSection === "projects"
              ? "border-b-black"
              : "border-b-transparent "
          } border-b-4  hover:border-b-gray-300 transition-all duration-75`}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="bg-gray-500 px-2 py-1 rounded-lg text-gray-50"
        >
          Hire me!
        </Link>
      </div>
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};
export default Links;
