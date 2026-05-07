"use client";

import { motion } from "framer-motion";
import { Car, Plane, Map as MapIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CabServices() {
  const features = [
    {
      icon: <Plane className="h-6 w-6 text-orange-400" />,
      title: "Airport Transfers",
      description: "Punctual pickup and drop-off at Mangalore International Airport.",
    },
    {
      icon: <MapIcon className="h-6 w-6 text-orange-400" />,
      title: "Local Sightseeing",
      description: "Explore Mangalore and nearby areas with our experienced local drivers.",
    },
    {
      icon: <Car className="h-6 w-6 text-orange-400" />,
      title: "Outstation Trips",
      description: "Comfortable long-distance travel to Udupi, Coorg, Chikmagalur, and beyond.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-orange-400" />,
      title: "Safe & Sanitized",
      description: "Well-maintained, clean vehicles ensuring your safety and comfort.",
    },
  ];

  return (
    <section id="cabs" className="relative py-24 md:py-32 overflow-hidden bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
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
              Whether you need a quick airport transfer or a multi-day outstation vehicle, our modern fleet and professional drivers guarantee a smooth journey.
            </p>
            
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              ))}
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
