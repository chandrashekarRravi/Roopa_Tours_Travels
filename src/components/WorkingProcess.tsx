"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Step 1: Choose Your Destination",
    description: "Every itinerary is crafted with care — blending comfort, culture, and memorable experiences tailored to your preferences.",
    image: "/images/gokarna_beach.png"
  },
  {
    id: "02",
    title: "Step 2: Select Your Vehicle",
    description: "From luxury sedans to spacious tempo travellers, pick the perfect ride for your group size and comfort requirements.",
    image: "/images/mangalore_cab.png"
  },
  {
    id: "03",
    title: "Step 3: Confirm Booking",
    description: "Review transparent pricing, finalize your itinerary, and secure your booking with our easy and seamless process.",
    image: "/images/hampi_temple.png"
  },
  {
    id: "04",
    title: "Step 4: Enjoy Your Journey",
    description: "Sit back and relax. Our professional drivers and well-maintained fleet ensure a safe and delightful travel experience.",
    image: "/images/karnataka_hero.png"
  },
];

export default function WorkingProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotate the white circle
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#393e41] min-h-screen overflow-hidden">
      
      {/* Optional: faint grid or noise background overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-32">
        <h2 className="text-center font-playfair text-5xl md:text-7xl font-bold text-[#f6f7eb] mb-32 drop-shadow-2xl">
          How Roopa Works
        </h2>

        <div className="flex flex-col space-y-32 md:space-y-48">
          {steps.map((step, idx) => {
            const isTextOnLeft = idx % 2 === 0;

            return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center min-h-[300px] gap-12 md:gap-0"
            >
              
              {/* Mobile Circle (Shows above content on small screens) */}
              <div className="md:hidden flex justify-center w-full relative z-30 mb-4 order-first">
                 <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                  <motion.div 
                    style={{ rotate }}
                    className="absolute inset-0 rounded-full border-2 border-[#f6f7eb]/40 border-t-white border-l-transparent"
                  />
                  <div className="w-[60px] h-[60px] rounded-full bg-[#e94f37] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_30px_rgba(233,79,55,0.4)]">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Center Circle (Desktop) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
                <div className="relative w-[260px] h-[260px] flex items-center justify-center group hover:scale-110 transition-transform duration-500">
                  {/* Rotating White Border */}
                  <motion.div 
                    style={{ rotate }}
                    className="absolute inset-0 rounded-full border-2 border-[#f6f7eb]/40 border-t-white border-l-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  />
                  {/* Inner green circle */}
                  <div className="w-[90px] h-[90px] rounded-full bg-[#e94f37] flex items-center justify-center text-white font-bold text-3xl shadow-[0_0_40px_rgba(233,79,55,0.4)]">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Left Column */}
              <div className={`w-full md:w-1/2 px-6 z-10 flex flex-col items-center ${isTextOnLeft ? 'md:items-end text-center md:text-right md:pr-20 lg:pr-32' : 'justify-center md:pr-20 lg:pr-32'}`}>
                {isTextOnLeft ? (
                  // Text on Left
                  <>
                    <div 
                      className="bg-[#e94f37] text-white font-bold text-lg md:text-2xl py-4 md:py-5 w-max max-w-full mb-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative rounded-l-xl"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)",
                        paddingLeft: "32px",
                        paddingRight: "54px"
                      }}
                    >
                      {step.title}
                    </div>
                    <div className="pr-0 md:pr-2">
                      <p className="text-[#f6f7eb]/90 text-base md:text-lg leading-relaxed max-w-md drop-shadow-md">
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Image on Left
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group border border-[#f6f7eb]/10">
                    <Image src={step.image} alt={step.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#393e41]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className={`w-full md:w-1/2 px-6 z-10 flex flex-col items-center ${!isTextOnLeft ? 'md:items-start text-center md:text-left md:pl-20 lg:pl-32' : 'justify-center md:pl-20 lg:pl-32'}`}>
                {!isTextOnLeft ? (
                  // Text on Right
                  <>
                    <div 
                      className="bg-[#e94f37] text-white font-bold text-lg md:text-2xl py-4 md:py-5 w-max max-w-full mb-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative rounded-r-xl"
                      style={{
                        clipPath: "polygon(30px 0, 100% 0, 100% 100%, 30px 100%, 0 50%)",
                        paddingLeft: "54px",
                        paddingRight: "32px"
                      }}
                    >
                      {step.title}
                    </div>
                    <div className="pl-0 md:pl-2">
                      <p className="text-[#f6f7eb]/90 text-base md:text-lg leading-relaxed max-w-md drop-shadow-md">
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  // Image on Right
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group border border-[#f6f7eb]/10">
                    <Image src={step.image} alt={step.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#393e41]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                )}
              </div>

            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
