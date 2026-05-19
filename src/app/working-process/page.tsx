import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkingProcess from "@/components/WorkingProcess";

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
