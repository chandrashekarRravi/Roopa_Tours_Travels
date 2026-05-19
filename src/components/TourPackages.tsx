"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Star, X, CheckCircle2, Car, Map, Home, Info } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Madikeri Tour Package",
    duration: "Customizable",
    location: "Madikeri",
    image: "/images/Madikeri.png",
    rating: 4.9,
    reviews: 124,
    images: ["/images/Madikeri.png", "/images/coorg.png", "/images/karnataka_hero.png"],
    description: "Experience the Scotland of India with our premium Madikeri package. From coffee plantations to misty hills.",
  },
  {
    id: 2,
    title: "Chikmagalur Tour Package",
    duration: "Customizable",
    location: "Chikmagalur",
    image: "/images/chikmagalur.png",
    rating: 5.0,
    reviews: 89,
    images: ["/images/chikmagalur.png", "/images/coorg.png", "/images/karnataka_hero.png"],
    description: "The coffee land of Karnataka awaits. Explore the Baba Budangiri hills and Mullayanagiri peak.",
  },
  {
    id: 3,
    title: "Temple Tour Package",
    duration: "Customizable",
    location: "Various Temples",
    image: "/images/Various Temples.png",
    rating: 4.8,
    reviews: 215,
    images: ["/images/Various Temples.png", "/images/hampi.png", "/images/karnataka_hero.png"],
    description: "A spiritual journey through the most sacred temples of Karnataka, perfectly planned for your peace of mind.",
  },
  {
    id: 4,
    title: "Coastal Tour Package in Karnataka",
    duration: "Customizable",
    location: "Karnataka Coast",
    image: "/images/Coastal.png",
    rating: 4.9,
    reviews: 132,
    images: ["/images/Coastal.png", "/images/image.png", "/images/karnataka_hero.png"],
    description: "Sun, sand, and serenity. Discover the beautiful coastline of Karnataka from Mangalore to Karwar.",
  },
  {
    id: 5,
    title: "Mangalore Local One Day Temple Tour",
    duration: "1 Day",
    location: "Mangalore",
    image: "/images/Mangalore.png",
    rating: 4.9,
    reviews: 210,
    images: ["/images/Mangalore.png", "/images/mangalore_cab.png", "/images/karnataka_hero.png"],
    description: "Cover all major temples in and around Mangalore city in a single day with our expert local guides.",
  },
  {
    id: 6,
    title: "Mangalore Local Trips",
    duration: "Flexible",
    location: "Mangalore & Suroundings",
    image: "/images/Mangalore & Suroundings.png",
    rating: 4.8,
    reviews: 145,
    images: ["/images/Mangalore & Suroundings.png", "/images/mangalore_cab.png", "/images/karnataka_hero.png"],
    description: "Custom local trips tailored to your interests, whether it's shopping, beaches, or local cuisine.",
  },
];

export default function TourPackages() {
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);

  return (
    <section id="packages" className="py-24 md:py-32 bg-[#0E14CC]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl text-[#FFFFFF]">
              Curated <span className="text-[#EAFFBF]">Experiences</span>
            </h2>
            <p className="mt-4 text-[#FFFFFF]/70 text-lg">
              Discover the hidden gems of Karnataka with our meticulously crafted tour packages. From ancient temples to pristine beaches.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
            className="shrink-0 border-b-2 border-[#EAFFBF] pb-1 text-[#EAFFBF] font-medium hover:text-[#EAFFBF] hover:border-[#EAFFBF] transition-colors"
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
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 overflow-hidden hover:bg-[#FFFFFF]/10 transition-colors"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0E14CC]/60 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 border border-[#FFFFFF]/20">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-medium text-[#FFFFFF]">{pkg.rating} ({pkg.reviews})</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-[#FFFFFF]/70 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#EAFFBF]" />
                    {pkg.duration}
                  </div>
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-[#FFFFFF] mb-2">{pkg.title}</h3>

                <div className="flex items-start gap-2 text-[#FFFFFF]/70 text-sm mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#EAFFBF]" />
                  <span>{pkg.location}</span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex-1 inline-flex justify-center items-center rounded-xl bg-[#EAFFBF] px-4 py-3 font-medium text-[#0E14CC] transition-all hover:bg-[#EAFFBF]/80 hover:shadow-lg active:scale-95"
                  >
                    Explore
                  </button>
                  <a href="#contact" className="flex-1 inline-flex justify-center items-center rounded-xl bg-[#FFFFFF]/10 px-4 py-3 font-medium text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF]/20">
                    Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Package Details Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#0E14CC]/90 backdrop-blur-md"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0E14CC] border border-[#FFFFFF]/10 rounded-[2rem] shadow-2xl p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/10 text-[#FFFFFF] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Side: Images Grid */}
                <div className="space-y-4">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-[#FFFFFF]/10">
                    <Image
                      src={selectedPackage.image}
                      alt={selectedPackage.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedPackage.images.map((img, i) => (
                      <div key={i} className="relative h-24 md:h-32 rounded-xl overflow-hidden border border-[#FFFFFF]/10">
                        <Image
                          src={img}
                          alt={`${selectedPackage.title} detail ${i}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-[#EAFFBF] font-medium mb-2">
                    <Star className="w-4 h-4 fill-[#EAFFBF]" />
                    <span>{selectedPackage.rating} ({selectedPackage.reviews} Reviews)</span>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
                    {selectedPackage.title}
                  </h2>
                  <p className="text-[#FFFFFF]/70 text-lg mb-8 leading-relaxed">
                    {selectedPackage.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <h4 className="text-[#FFFFFF] font-semibold text-xl flex items-center gap-2">
                      <Info className="w-5 h-5 text-[#EAFFBF]" />
                      Package Inclusions
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10">
                        <div className="p-3 rounded-xl bg-[#EAFFBF]/10 text-[#EAFFBF]">
                          <Car className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#FFFFFF]">Pickup & Drop</p>
                          <p className="text-sm text-[#FFFFFF]/60">Doorstep service from your preferred location.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10">
                        <div className="p-3 rounded-xl bg-[#EAFFBF]/10 text-[#EAFFBF]">
                          <Map className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#FFFFFF]">Itinerary Planning</p>
                          <p className="text-sm text-[#FFFFFF]/60">Expertly crafted custom plans for the best experience.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 md:col-span-2">
                        <div className="p-3 rounded-xl bg-[#EAFFBF]/10 text-[#EAFFBF]">
                          <Home className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#FFFFFF]">Stay Arrangements</p>
                          <p className="text-sm text-[#FFFFFF]/60">Available upon request. We can handle all your accommodation needs if you'd like us to manage it from our side.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/916366564847?text=Hi Roopa Tours, I'm interested in the ${selectedPackage.title}`}
                      target="_blank"
                      className="flex-1 inline-flex justify-center items-center rounded-2xl bg-[#EAFFBF] px-8 py-4 font-bold text-[#0E14CC] transition-all hover:shadow-[0_0_30px_rgba(233,79,55,0.4)] active:scale-95"
                    >
                      Plan My Trip
                    </a>
                    <a 
                      href="#contact"
                      onClick={() => setSelectedPackage(null)}
                      className="flex-1 inline-flex justify-center items-center rounded-2xl bg-[#FFFFFF]/10 px-8 py-4 font-bold text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF]/20"
                    >
                      Inquire Details
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
