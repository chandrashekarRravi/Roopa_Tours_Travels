"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  { name: "Gokarna", image: "/images/image.png", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { name: "Hampi", image: "/images/hampi.png", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { name: "Coorg", image: "/images/coorg.png", colSpan: "col-span-1", rowSpan: "row-span-1" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold md:text-5xl text-white">
            Popular <span className="text-orange-400">Destinations</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore the most sought-after locations in Karnataka, from serene beaches to lush hill stations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[800px] md:h-[600px]">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${dest.colSpan} ${dest.rowSpan}`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-playfair text-3xl font-bold text-white">{dest.name}</h3>
                <p className="text-orange-400 mt-1 font-medium transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Explore &#8594;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
