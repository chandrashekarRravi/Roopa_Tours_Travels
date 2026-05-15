import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabServices from "@/components/CabServices";
import TourPackages from "@/components/TourPackages";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-[#393e41] min-h-screen selection:bg-[#e94f37]/30">
      <Navbar />
      <Hero />
      <CabServices />
      <TourPackages />
      <Destinations />
      <Contact />
      <Footer />
      
      {/* Sticky WhatsApp CTA */}
      <a
        href="https://wa.me/916366564847"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-green-500 text-[#f6f7eb] shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
