"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Calendar, Clock, Map as MapIcon, ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const packages = [
  "Madikeri Tour Package",
  "Chikmagalur Tour Package",
  "Temple Tour Package",
  "Coastal Tour Package",
  "Mangalore One Day Temple Tour",
  "Custom Local Trip"
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    package: "",
    dateFrom: "",
    dateTo: "",
    pickupTime: "",
    pickupLocation: "",
    dropLocation: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "service") setService(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus("success");
        setStep(1); // Go back to start
        setFormData({
          firstName: "", lastName: "", phone: "", service: "",
          package: "", dateFrom: "", dateTo: "", pickupTime: "",
          pickupLocation: "", dropLocation: "", message: ""
        });
        setService("");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = formData.firstName && formData.phone && service;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0E14CC] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold md:text-5xl text-[#FFFFFF]">
              Plan Your <span className="text-[#EAFFBF]">Journey</span>
            </h2>
            <p className="mt-4 text-[#FFFFFF]/70 text-lg mb-10">
              Ready to explore Karnataka? Send us your inquiry or reach out to us directly. We will get back to you with the best packages and cab services.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FFFFFF]/5 p-4 rounded-2xl border border-[#FFFFFF]/10 shrink-0">
                  <Phone className="w-6 h-6 text-[#EAFFBF]" />
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-medium text-lg">Call Us</h4>
                  <p className="text-[#FFFFFF]/70 mt-1">+91 63665 64847</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FFFFFF]/5 p-4 rounded-2xl border border-[#FFFFFF]/10 shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-medium text-lg">WhatsApp</h4>
                  <p className="text-[#FFFFFF]/70 mt-1">Available 24/7 for instant replies</p>
                  <a href="https://wa.me/916366564847" className="text-green-400 text-sm font-medium hover:underline mt-2 inline-block">Chat with us</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FFFFFF]/5 p-4 rounded-2xl border border-[#FFFFFF]/10 shrink-0">
                  <MapPin className="w-6 h-6 text-[#EAFFBF]" />
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-medium text-lg">Location</h4>
                  <p className="text-[#FFFFFF]/70 mt-1">Near Mangalore International Airport,<br />Mangalore, Karnataka 574142</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-3xl p-8 backdrop-blur-sm relative min-h-[500px] flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-[#FFFFFF]">Send an Inquiry</h3>
              <div className="flex gap-2">
                <div className={`h-1.5 w-8 rounded-full transition-colors ${step === 1 ? 'bg-[#EAFFBF]' : 'bg-[#FFFFFF]/20'}`} />
                <div className={`h-1.5 w-8 rounded-full transition-colors ${step === 2 ? 'bg-[#EAFFBF]' : 'bg-[#FFFFFF]/20'}`} />
              </div>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300">
                Thank you! Your inquiry has been sent successfully. We will get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300">
                Failed to send inquiry. Please try again or contact us via phone/WhatsApp.
              </div>
            )}

            <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors" placeholder="+91 00000 00000" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">Service Required</label>
                      <select name="service" value={service} onChange={handleInputChange} className="w-full bg-[#0E14CC] border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors">
                        <option value="">Select a service...</option>
                        <option value="tour">Tour Package</option>
                        <option value="airport">Airport Cab</option>
                        <option value="local">Local Sightseeing</option>
                        <option value="outstation">Outstation Cab</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={() => setStep(2)}
                      className={`w-full mt-8 flex items-center justify-center gap-2 rounded-xl py-4 font-bold text-[#0E14CC] transition-all shadow-lg ${isStep1Valid ? 'bg-[#EAFFBF] shadow-orange-500/20 active:scale-95' : 'bg-[#FFFFFF]/10 cursor-not-allowed'}`}
                    >
                      Next Step <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-[#FFFFFF]/60 hover:text-[#EAFFBF] flex items-center gap-1 mb-4"
                    >
                      <ChevronLeft className="w-4 h-4" /> Edit Contact Details
                    </button>

                    {service === "tour" ? (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">Select Package</label>
                          <select name="package" value={formData.package} onChange={handleInputChange} className="w-full bg-[#0E14CC] border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors">
                            <option value="">Choose a package...</option>
                            {packages.map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> From</label>
                            <input type="date" name="dateFrom" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> To</label>
                            <input type="date" name="dateTo" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                        </div>
                        {/* <div>
                          <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Expected Pickup Time</label>
                          <input type="time" name="pickupTime" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                        </div> */}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><MapIcon className="w-4 h-4" /> Pickup Location</label>
                            <input type="text" name="pickupLocation" onChange={handleInputChange} placeholder="Enter pickup address" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><MapIcon className="w-4 h-4" /> Drop Location</label>
                            <input type="text" name="dropLocation" onChange={handleInputChange} placeholder="Enter drop address" className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Journey Date</label>
                            <input type="date" name="dateFrom" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Pickup Time</label>
                            <input type="time" name="pickupTime" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF]" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-6">
                      <label className="block text-sm font-medium text-[#FFFFFF]/70 mb-2">Additional Message (Optional)</label>
                      <textarea rows={2} name="message" onChange={handleInputChange} className="w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#EAFFBF] transition-colors" placeholder="Any specific requirements?"></textarea>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full mt-6 font-bold py-4 rounded-xl transition-all shadow-lg ${isSubmitting ? 'bg-[#FFFFFF]/10 text-[#FFFFFF]/50 cursor-not-allowed' : 'bg-[#EAFFBF] hover:bg-[#EAFFBF]/90 text-[#0E14CC] shadow-orange-500/20 active:scale-[0.98]'}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Get Quote'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
