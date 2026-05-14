"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#393e41] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl text-[#f6f7eb]">
              Plan Your <span className="text-[#e94f37]">Journey</span>
            </h2>
            <p className="mt-4 text-[#f6f7eb]/70 text-lg mb-10">
              Ready to explore Karnataka? Send us your inquiry or reach out to us directly. We will get back to you with the best packages and cab services.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#f6f7eb]/5 p-4 rounded-2xl border border-[#f6f7eb]/10 shrink-0">
                  <Phone className="w-6 h-6 text-[#e94f37]" />
                </div>
                <div>
                  <h4 className="text-[#f6f7eb] font-medium text-lg">Call Us</h4>
                  <p className="text-[#f6f7eb]/70 mt-1">+91 98765 43210</p>
                  <p className="text-[#f6f7eb]/70">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f6f7eb]/5 p-4 rounded-2xl border border-[#f6f7eb]/10 shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-[#f6f7eb] font-medium text-lg">WhatsApp</h4>
                  <p className="text-[#f6f7eb]/70 mt-1">Available 24/7 for instant replies</p>
                  <a href="https://wa.me/919876543210" className="text-green-400 text-sm font-medium hover:underline mt-2 inline-block">Chat with us</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f6f7eb]/5 p-4 rounded-2xl border border-[#f6f7eb]/10 shrink-0">
                  <MapPin className="w-6 h-6 text-[#e94f37]" />
                </div>
                <div>
                  <h4 className="text-[#f6f7eb] font-medium text-lg">Location</h4>
                  <p className="text-[#f6f7eb]/70 mt-1">Near Mangalore International Airport,<br />Mangalore, Karnataka 574142</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f6f7eb]/5 border border-[#f6f7eb]/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#f6f7eb] mb-6">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#f6f7eb]/70 mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#f6f7eb]/5 border border-[#f6f7eb]/10 rounded-xl px-4 py-3 text-[#f6f7eb] focus:outline-none focus:border-[#e94f37] focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#f6f7eb]/70 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#f6f7eb]/5 border border-[#f6f7eb]/10 rounded-xl px-4 py-3 text-[#f6f7eb] focus:outline-none focus:border-[#e94f37] focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#f6f7eb]/70 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-[#f6f7eb]/5 border border-[#f6f7eb]/10 rounded-xl px-4 py-3 text-[#f6f7eb] focus:outline-none focus:border-[#e94f37] focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="+91" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#f6f7eb]/70 mb-2">Service Required</label>
                <select className="w-full bg-[#1e293b] border border-[#f6f7eb]/10 rounded-xl px-4 py-3 text-[#f6f7eb] focus:outline-none focus:border-[#e94f37] focus:ring-1 focus:ring-orange-500 transition-colors">
                  <option value="tour">Tour Package</option>
                  <option value="airport">Airport Cab</option>
                  <option value="local">Local Sightseeing</option>
                  <option value="outstation">Outstation Cab</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#f6f7eb]/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#f6f7eb]/5 border border-[#f6f7eb]/10 rounded-xl px-4 py-3 text-[#f6f7eb] focus:outline-none focus:border-[#e94f37] focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Tell us about your travel plans..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#e94f37] hover:bg-[#e94f37] text-[#f6f7eb] font-medium py-4 rounded-xl transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
