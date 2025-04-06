"use client";

import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Project from "@/components/home/project";

export default function Home() {
  return (
    <section className="flex flex-col my-28 space-y-6 max-w-5xl mx-auto px-4">
      <Hero />
      <Project className="pt-20"/>
      <About className="py-20"/>
      <Footer />
      <div
        aria-hidden="true"
        className="fixed dark:md:block dark:opacity-100 -bottom-[-30%] sm:-bottom-[0%] 2xl:-bottom-[30%] -left-[0%] z-0 pointer-events-none"
      >
        <img
          src="/bg-shape.svg"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
          data-loaded="true"
        />
      </div>
    </section>
  );
}
