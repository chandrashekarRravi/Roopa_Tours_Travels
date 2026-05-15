"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  { name: "Gokarna", image: "/images/image.png", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { name: "Hampi", image: "/images/hampi.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Coorg", image: "/images/coorg.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Madikeri", image: "/images/Madikeri.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { name: "Coastal Karnataka", image: "/images/Coastal.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-[#393e41]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold md:text-5xl text-[#f6f7eb]">
            Trip <span className="text-[#e94f37]">Gallery</span>
          </h2>
          <p className="mt-4 text-[#f6f7eb]/70 text-lg max-w-2xl mx-auto">
            Glimpses of the beautiful journeys we've facilitated. Every trip is a story waiting to be told.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-[2.5rem] overflow-hidden group ${dest.colSpan} ${dest.rowSpan} border border-[#f6f7eb]/10`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#393e41] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#f6f7eb] transform translate-y-0 transition-transform duration-500">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[#e94f37] font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span>View Trip</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#e94f37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
