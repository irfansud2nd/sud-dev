"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Links = () => {
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

  const links = ["home", "about", "projects"];

  return (
    <div>
      <div className="hidden md:flex items-baseline gap-2">
        {links.map((link) => (
          <Link
            href={`/#${link}`}
            className={`capitalize border-b-4 hover:border-secondary-foreground transition-all duration-75 
            ${
              activeSection == link ? "border-primary" : "border-b-transparent"
            }`}
            key={link}
          >
            {link}
          </Link>
        ))}
        <Button>
          <Link href="/#contact" className="text-lg">
            Hire me!
          </Link>
        </Button>
      </div>
      <MobileMenu />
    </div>
  );
};
export default Links;
