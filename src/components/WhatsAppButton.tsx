import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface WhatsAppButtonProps {
  isBottomBarVisible?: boolean;
}

export default function WhatsAppButton({ isBottomBarVisible = false }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show WhatsApp button after 20 seconds of visiting
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowNotification(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-dismiss the friendly message bubble after 8 seconds, while keeping the button
  useEffect(() => {
    if (showNotification) {
      const dismissTimer = setTimeout(() => {
        setShowNotification(false);
      }, 8000);
      return () => clearTimeout(dismissTimer);
    }
  }, [showNotification]);

  const whatsappUrl =
    "https://wa.me/917855008895?text=Hi%2C%20I%20have%20a%20question%20about%20the%202D%20Animation%20course.";

  return (
    <AnimatePresence>
      {isVisible && (
        <aside
          aria-label="WhatsApp Support"
          className={`fixed right-4 sm:right-6 z-50 flex items-center justify-center transition-[bottom] duration-300 ease-in-out ${
            isBottomBarVisible ? "bottom-[88px] md:bottom-6" : "bottom-5 sm:bottom-6"
          }`}
        >
          <div className="relative flex items-center justify-center">
            {/* Pop-up Attention-Grabbing Message Bubble */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20, y: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 350, damping: 22, delay: 0.25 }}
                  className="absolute bottom-full mb-3 right-0 sm:bottom-auto sm:mb-0 sm:right-full sm:mr-4 w-64 sm:w-72 bg-[#0E1322]/95 backdrop-blur-md border border-[#25D366]/40 p-3.5 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(37,211,102,0.2)] text-left z-50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                      </span>
                      <span className="text-[11px] font-bold tracking-wide uppercase text-[#25D366]">
                        Online Support
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowNotification(false);
                      }}
                      className="text-gray-400 hover:text-white p-0.5 rounded-md hover:bg-white/10 transition-colors"
                      aria-label="Close message"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-1.5 group/msg"
                  >
                    <p className="text-xs text-gray-200 font-medium leading-snug group-hover/msg:text-white transition-colors">
                      👋 Have any questions about the 2D Animation course?
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] mt-1.5 group-hover/msg:underline">
                      Chat with us now →
                    </span>
                  </a>

                  {/* Little speech bubble arrow */}
                  <div className="hidden sm:block absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#0E1322] border-t border-r border-[#25D366]/40 rotate-45" />
                  <div className="sm:hidden absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0E1322] border-b border-r border-[#25D366]/40 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main WhatsApp Button with bouncing & vibrating entry animation */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              initial={{ scale: 0, opacity: 0, rotate: -25 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, -12, 12, -8, 8, -4, 4, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                scale: { type: "spring", stiffness: 350, damping: 18, duration: 0.6 },
                opacity: { duration: 0.3 },
                rotate: { delay: 0.35, duration: 0.8, ease: "easeInOut" },
              }}
              className="relative group flex items-center justify-center cursor-pointer"
            >
              {/* Expanding attention pulse waves */}
              <span
                className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"
                style={{ animationDuration: "2s" }}
              />
              <span
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-40 blur-md pointer-events-none group-hover:opacity-80 transition-opacity"
              />

              {/* WhatsApp Button Circle */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1ebd59] to-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-all duration-300 border-2 border-white/30"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  className="w-7 h-7 fill-current drop-shadow-sm"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>

                {/* Unread "1" notification badge on top corner */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 400 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white font-extrabold text-[10px] rounded-full flex items-center justify-center shadow-md border-2 border-[#070914]"
                >
                  1
                </motion.span>
              </motion.div>

              {/* Standard hover tooltip when notification bubble is dismissed */}
              {!showNotification && (
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0B0F19] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-white/10 hidden sm:block">
                  Need help? Chat with us!
                </span>
              )}
            </motion.a>
          </div>
        </aside>
      )}
    </AnimatePresence>
  );
}
