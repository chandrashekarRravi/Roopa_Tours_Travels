"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full border border-[#EAFFBF]/50 bg-[#0E14CC]/60 backdrop-blur-sm text-[#EAFFBF] shadow-[0_0_20px_rgba(234,255,191,0.15)] hover:scale-110 hover:bg-[#0E14CC]/80 hover:border-[#EAFFBF] hover:shadow-[0_0_30px_rgba(234,255,191,0.35)] transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
