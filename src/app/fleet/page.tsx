import { Car, Users, Tag, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FleetPage() {
  const fleetDetails = [
    { name: "Swift Dzire", type: "Sedan", capacity: "4+1 Seats", price: "From ₹15/km", image: "/images/Swift Dzire.png" },
    { name: "Toyota Etios", type: "Sedan", capacity: "4+1 Seats", price: "From ₹15/km", image: "/images/Toyota Etios.png" },
    { name: "Ertiga Cab", type: "SUV", capacity: "6+1 Seats", price: "From ₹18/km", image: "/images/Ertiga Cab.png" },
    { name: "Toyota Crysta", type: "Premium SUV", capacity: "7+1 Seats", price: "From ₹20/km", image: "/images/Toyota Crysta.png" },
    { name: "Tempo Traveller", type: "Van", capacity: "12 to 17 Seats", price: "On Request", image: "/images/Tempo Traveller.png" },
    { name: "Arabian Tempo Traveller", type: "Premium Van", capacity: "15 Seats", price: "On Request", image: "/images/Arabian Tempo Traveller.png" }
  ];

  return (
    <main className="min-h-screen bg-[#0E14CC]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EAFFBF]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/#cabs" className="inline-flex items-center text-[#FFFFFF]/70 hover:text-[#FFFFFF] transition mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] max-w-2xl">
            Our Premium <span className="text-[#EAFFBF]">Fleet</span>
          </h1>
          <p className="mt-6 text-lg text-[#FFFFFF]/70 max-w-2xl leading-relaxed">
            Choose from our wide range of well-maintained, comfortable vehicles for your local and outstation journeys.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fleetDetails.map((car, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-3xl overflow-hidden group hover:border-[#EAFFBF]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden bg-[#111827]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#0E14CC]/60 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-[#FFFFFF] border border-[#FFFFFF]/10">
                    {car.type}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">{car.name}</h3>
                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex items-center text-[#FFFFFF]/70">
                      <div className="h-8 w-8 rounded-full bg-[#FFFFFF]/5 flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-[#EAFFBF]" />
                      </div>
                      {car.capacity}
                    </div>
                    {/* <div className="flex items-center text-[#FFFFFF]/70">
                      <div className="h-8 w-8 rounded-full bg-[#FFFFFF]/5 flex items-center justify-center mr-3">
                        <Tag className="h-4 w-4 text-[#EAFFBF]" />
                      </div>
                      {car.price}
                    </div> */}
                  </div>
                  <a
                    href="https://wa.me/916366564847"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center rounded-full bg-[#EAFFBF] px-6 py-3 font-medium text-[#0E14CC] shadow-lg shadow-orange-500/20 transition hover:bg-[#EAFFBF]"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
