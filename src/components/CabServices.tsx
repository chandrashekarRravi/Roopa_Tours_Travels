"use client";

import { motion } from "framer-motion";
import { Car, Plane, Map as MapIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";

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
    <section id="cabs" className="relative py-24 md:py-32 overflow-hidden bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl lg:text-6xl text-white">
              Premium Cab <span className="text-orange-400">Services</span>
            </h2>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              We offer reliable outstation cab services, local trips, and seamless airport/railway station drops.
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <MapIcon className="text-orange-400 h-5 w-5" /> Drop & Pickup
                </h3>
                <ul className="space-y-3">
                  {dropServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                  <Car className="text-orange-400 h-5 w-5" /> Our Fleet
                </h3>
                <ul className="space-y-3">
                  {cabs.map((cab, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <ShieldCheck className="h-4 w-4 text-orange-400 shrink-0" />
                      <span>{cab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600">
                Book via WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10"
          >
            <Image
              src="/images/mangalore_cab.png"
              alt="Premium cab service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-orange-400 font-medium uppercase tracking-wider">Fleet</div>
                  <div className="text-2xl font-bold text-white mt-1">Sedans & SUVs</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-400">Starting from</div>
                  <div className="text-2xl font-bold text-white">₹15/km</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
