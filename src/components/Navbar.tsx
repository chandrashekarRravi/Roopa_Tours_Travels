"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/#packages" },
    { name: "Cab Services", href: "/#cabs" },
    { name: "Working Process", href: "/working-process" },
    { name: "Destinations", href: "/#destinations" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 ${scrolled ? "bg-[#0E14CC]/80 backdrop-blur-md border-b border-[#FFFFFF]/10" : "bg-transparent"
          }`}
      >
        <Link href="/" className="group font-playfair text-xl font-bold tracking-tight md:text-2xl">
          <span className="text-[#FFFFFF] transition-colors group-hover:text-[#EAFFBF]">Roopa</span>{" "}
          <span className="text-[#EAFFBF] transition-colors group-hover:text-[#FFFFFF]">Travels</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#FFFFFF]/80 transition-colors hover:text-[#FFFFFF]"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+916366564847"
            className="flex items-center gap-2 rounded-full bg-[#FFFFFF]/10 px-5 py-2.5 text-sm font-medium text-[#FFFFFF] backdrop-blur-md transition-colors hover:bg-[#FFFFFF]/20"
          >
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#FFFFFF]/80 md:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E14CC] pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-xl">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-[#FFFFFF]/80 hover:text-[#FFFFFF]"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+916366564847"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#EAFFBF] py-4 font-medium text-[#0E14CC]"
            >
              <Phone className="h-5 w-5" />
              <span>+91 63665 64847</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
