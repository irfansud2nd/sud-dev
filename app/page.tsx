"use client";
import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}
