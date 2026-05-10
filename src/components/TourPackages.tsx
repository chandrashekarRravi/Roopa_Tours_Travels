"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    id: 1,
    title: "Madikeri Tour Package",
    duration: "Customizable",
    location: "Madikeri",
    image: "/images/karnataka_hero.png",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    title: "Chikmagalur Tour Package",
    duration: "Customizable",
    location: "Chikmagalur",
    image: "/images/hampi_temple.png",
    rating: 5.0,
    reviews: 89,
  },
  {
    id: 3,
    title: "Temple Tour Package",
    duration: "Customizable",
    location: "Various Temples",
    image: "/images/gokarna_beach.png",
    rating: 4.8,
    reviews: 215,
  },
  {
    id: 4,
    title: "Coastal Tour Package in Karnataka",
    duration: "Customizable",
    location: "Karnataka Coast",
    image: "/images/karnataka_hero.png",
    rating: 4.9,
    reviews: 132,
  },
  {
    id: 5,
    title: "Mangalore Local One Day Temple Tour",
    duration: "1 Day",
    location: "Mangalore",
    image: "/images/hampi_temple.png",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 6,
    title: "Mangalore Local Trips",
    duration: "Flexible",
    location: "Mangalore & Suroundings",
    image: "/images/gokarna_beach.png",
    rating: 4.8,
    reviews: 145,
  },
];

export default function TourPackages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-[#0f172a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl text-white">
              Curated <span className="text-orange-400">Experiences</span>
            </h2>
            <p className="mt-4 text-zinc-400 text-lg">
              Discover the hidden gems of Karnataka with our meticulously crafted tour packages. From ancient temples to pristine beaches.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
            className="shrink-0 border-b-2 border-orange-400 pb-1 text-orange-400 font-medium hover:text-orange-300 hover:border-orange-300 transition-colors"
          >
            Request Custom Tour
          </motion.a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 border border-white/20">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-medium text-white">{pkg.rating} ({pkg.reviews})</span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-orange-400" />
                    {pkg.duration}
                  </div>
                </div>
                
                <h3 className="font-playfair text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
                
                <div className="flex items-start gap-2 text-zinc-400 text-sm mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-orange-400" />
                  <span>{pkg.location}</span>
                </div>
                
                <a href="#contact" className="inline-flex w-full justify-center items-center rounded-xl bg-white/10 px-4 py-3 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white">
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
