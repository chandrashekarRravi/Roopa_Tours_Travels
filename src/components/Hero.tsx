"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0E14CC]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-80"
        >
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2 rounded-full border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
        >
          <MapPin className="h-4 w-4 text-[#EAFFBF]" />
          <span>Mangalore, Karnataka</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="group font-playfair max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl cursor-default"
        >
          <span className="text-[#FFFFFF] transition-colors duration-300 group-hover:text-[#EAFFBF]">Discover the Soul of</span>{" "}
          <span className="text-[#EAFFBF] transition-colors duration-300 group-hover:text-[#FFFFFF]">Karnataka</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg text-[#FFFFFF]/80 sm:text-xl"
        >
          Premium tour packages, seamless airport transfers, and customized travel experiences curated by Roopa Tours & Travels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#packages" className="group flex items-center justify-center gap-2 rounded-full bg-[#EAFFBF] px-8 py-4 font-medium text-[#0E14CC] transition-all hover:bg-[#EAFFBF]">
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="flex items-center justify-center rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/5 px-8 py-4 font-medium backdrop-blur-sm transition-all hover:bg-[#FFFFFF]/10">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-[#FFFFFF]/70">Scroll</span>
        <div className="h-12 w-[1px] bg-[#FFFFFF]/20">
          <motion.div
            animate={{
              y: [0, 48, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1/2 w-full bg-[#EAFFBF]"
          />
        </div>
      </motion.div>
    </section>
  );
}
