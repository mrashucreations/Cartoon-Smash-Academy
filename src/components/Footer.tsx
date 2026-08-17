import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Youtube, Instagram, Twitter, Facebook, Mail, ShieldCheck, FileText, HelpCircle, RefreshCw, X, MessageSquare, Phone, MapPin } from "lucide-react";
import logoSrc from "../../assets/Cartoon Smash Logo.png";

type ModalType = "contact" | "refund" | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const socialLinks = [
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://www.youtube.com/@cartoonsmash",
      color: "hover:bg-red-600/20 hover:text-red-500 hover:border-red-500/40"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/CartooonSmash",
      color: "hover:bg-pink-600/20 hover:text-pink-500 hover:border-pink-500/40"
    }
  ];

  return (
    <>
      <footer className="w-full bg-[#070914] border-t border-white/[0.08] relative overflow-hidden py-4 sm:py-8 px-4 sm:px-6 lg:px-8 z-10">
        {/* Low-opacity ambient glow for footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-purple-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 relative z-10">
          
          {/* Upper line on mobile (Copyright & Socials next to each other), Left block on desktop */}
          <div className="flex items-center justify-center md:justify-start gap-4 w-full md:w-auto">
            <span className="font-semibold text-white/90 text-xs sm:text-sm whitespace-nowrap">
              © Cartoon Smash
            </span>
            
            {/* Social Media Links beside it */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color}`}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom line on mobile (Privacy Policy, Terms, Contact Us in one line), Right block on desktop */}
          <div className="flex items-center justify-center md:justify-end gap-x-2.5 sm:gap-x-4 text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium w-full md:w-auto">
            <a
              href="https://academy.cartoonsmash.in/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-purple-500/50 underline-offset-4 whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <span className="text-white/10 font-mono">|</span>
            <a
              href="https://academy.cartoonsmash.in/termsofuse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-purple-500/50 underline-offset-4 whitespace-nowrap"
            >
              Terms & Conditions
            </a>
            <span className="text-white/10 font-mono">|</span>
            <button
              onClick={() => setActiveModal("contact")}
              className="hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-purple-500/50 underline-offset-4 whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

        </div>
      </footer>

      {/* Interactive Policy Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-[#070514]/90 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-[#151139] to-[#0D0A24] border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(147,51,234,0.25)] text-left text-white overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:rotate-90 bg-white/5 hover:bg-white/15 p-2 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <div className="border-b border-white/[0.08] pb-4 mb-6 flex items-center gap-3">
                <img src={logoSrc} alt="Logo" className="w-10 h-10 rounded-full border border-purple-500/20" />
                <div>
                  <h3 className="text-xl font-black tracking-wide font-sans">
                    {activeModal === "contact" && "Contact Us & Support"}
                    {activeModal === "refund" && "Refund Policy"}
                  </h3>
                  <span className="text-[10px] font-mono text-purple-400 font-bold tracking-widest">
                  </span>
                </div>
              </div>

              {/* Content Box (Scrollable) */}
              <div className="overflow-y-auto pr-2 space-y-4 text-sm text-gray-300 leading-relaxed font-sans max-h-[50vh]">
                {activeModal === "contact" && (
                  <div className="space-y-5">
                    <p>Do you have any queries about our syllabus, tools, or bonuses? Our team is always here to resolve your doubts and provide guidance!</p>
                    
                    <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex flex-col gap-3">
                      <span className="text-xs font-bold text-purple-400 font-mono uppercase tracking-wider">Mailing Address</span>
                      <div className="flex items-center gap-2.5 text-base text-white font-semibold">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <span>academy@cartoonsmash.in</span>
                      </div>
                      <span className="text-sm text-gray-400">Available Monday to Saturday.</span>
                    </div>
                  </div>
                )}

                {activeModal === "refund" && (
                  <>
                    <p className="font-semibold text-white text-base">1. Our 100% Satisfaction Guarantee</p>
                    <p>At Cartoon Smash, we take absolute pride in our course's high-fidelity modules, simplified lectures, and immense bonuses. To provide our students with absolute confidence, we back our system with an unmatched policy.</p>
                    
                    <p className="font-semibold text-white text-base">2. Refund Eligibility Criteria</p>
                    <p>Since we deliver immediate access to massive downloadable assets (over 50GB of backgrounds, effects, and template rigs), refunds are restricted to cases where our syllabus does not match the curriculum shown on the page.</p>
                    <p>If you encounter technical issues or account activation delays, we commit to resolving them within 24 hours of notification.</p>
                    
                    <p className="font-semibold text-white text-base">3. Refund Processing</p>
                    <p>For any genuine discrepancies or dispute requests, email us at support@cartoonsmash.in with details of your registration. Approved refunds are credited back to the original funding source within 5-7 working days.</p>
                  </>
                )}

              </div>

              {/* Close Button Bottom */}
              <div className="border-t border-white/[0.08] pt-4 mt-6 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-bold transition-colors cursor-pointer"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
