"use client";

import { motion } from "framer-motion";
import { Car, Map as MapIcon, ShieldCheck, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CabServices() {
  const dropServices = [
    "Mangalore to Udupi, Manipal Drop & Pickup",
    "Kollur Mookambika Pick up & Drop",
    "Mangalore to Sringeri Drop & Pickup",
    "Mangalore to Gokarna Drop & Pickup",
    "Mangalore International Airport Drop & Pickup",
    "Mangalore Railway Station Drop & Pickup",
    "Udupi Drop & Pickup"
  ];

  const cabs = [
    "Swift Dzire",
    "Toyota Etios",
    "Ertiga Cab",
    "Toyota Crysta",
    "Tempo Traveller",
    "Arabian Tempo Traveller"
  ];

  return (
    <section id="cabs" className="relative py-24 md:py-32 overflow-hidden bg-[#0E14CC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl lg:text-6xl text-[#FFFFFF]">
              Premium Cab <span className="text-[#EAFFBF]">Services</span>
            </h2>
            <p className="mt-6 text-lg text-[#FFFFFF]/70 leading-relaxed">
              We offer reliable outstation cab services, local trips, and seamless airport/railway station drops.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-[#FFFFFF] flex items-center gap-2 mb-4">
                  <MapIcon className="text-[#EAFFBF] h-5 w-5" /> Drop & Pickup
                </h3>
                <ul className="space-y-3">
                  {dropServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#FFFFFF]/70 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#EAFFBF] mt-1.5 shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#FFFFFF] flex items-center gap-2 mb-4">
                  <Car className="text-[#EAFFBF] h-5 w-5" /> Our Fleet
                </h3>
                <ul className="space-y-3">
                  {cabs.map((cab, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#FFFFFF]/70 text-sm">
                      <ShieldCheck className="h-4 w-4 text-[#EAFFBF] shrink-0" />
                      <span>{cab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://wa.me/916366564847" target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-8 py-3.5 font-medium text-[#FFFFFF] shadow-lg shadow-green-500/30 transition hover:bg-green-600">
                Talk to Travel Expert
              </a>
              <Link
                href="/fleet"
                className="rounded-full bg-[#FFFFFF]/10 px-8 py-3.5 font-medium text-[#FFFFFF] shadow-lg border border-[#FFFFFF]/20 transition hover:bg-[#FFFFFF]/20 flex items-center gap-2 group"
              >
                Explore Fleet <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <Link href="/fleet" className="block relative h-[400px] lg:h-[600px] w-full group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-full rounded-3xl overflow-hidden border border-[#FFFFFF]/10 cursor-pointer"
            >
              <Image
                src="/images/cab.png"
                alt="Premium cab service"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

              {/* Overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#EAFFBF]/90 text-[#0E14CC] px-6 py-3 rounded-full font-medium shadow-xl backdrop-blur-sm flex items-center gap-2">
                  <Car className="h-5 w-5" /> View Fleet Details
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 p-6 rounded-2xl transition-transform duration-300 group-hover:translate-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#EAFFBF] font-medium uppercase tracking-wider">Fleet</div>
                    <div className="text-2xl font-bold text-[#FFFFFF] mt-1">Sedans & SUVs</div>
                  </div>{/* <div className="text-right">
                    <div className="text-sm text-[#FFFFFF]/70">Starting from</div>
                    <div className="text-2xl font-bold text-[#FFFFFF]">₹15/km</div>
                  </div> */}

                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
