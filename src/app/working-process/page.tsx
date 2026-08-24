import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkingProcess from "@/components/WorkingProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Book a Cab in Mangalore | Roopa Travels",
  description: "Book your Mangalore cab with Roopa Travels in a few simple steps. Choose your vehicle, share your trip details and get reliable travel assistance.",
};

export default function WorkingProcessPage() {
  return (
    <main className="relative bg-[#0E14CC] min-h-screen selection:bg-[#EAFFBF]/30">
      <Navbar />
      <div className="pt-20">
        <WorkingProcess />
      </div>
      <Footer />
    </main>
  );
}
