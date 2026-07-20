/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from "react";
import { FAQ_ITEMS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Static top-level helper for rendering FAQ answers with custom formatting.
// Extracted out of the component to avoid garbage collection overhead and function re-creation.
function renderAnswer(text: string) {
  const lines = text.split("\n");
  return (
    <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-sans">
      {lines.map((line, lineIdx) => {
        const isBullet = line.trim().startsWith("•") || line.trim().startsWith("+");
        let lineContent = line;
        let bulletChar = "";

        if (isBullet) {
          const match = line.match(/^(\s*[•+]\s*)(.*)/);
          if (match) {
            bulletChar = match[1];
            lineContent = match[2];
          }
        }

        const parts = lineContent.split("**");
        const renderedLine = parts.map((part, partIdx) => {
          if (partIdx % 2 === 1) {
            // Level check: if it starts with "Level " and a digit, make it emerald green
            const levelMatch = part.match(/^Level\s+\d+/i);
            if (levelMatch) {
              return (
                <strong key={partIdx} className="font-black text-emerald-400">
                  {part}
                </strong>
              );
            }
            return (
              <strong key={partIdx} className="font-extrabold text-white">
                {part}
              </strong>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-1.5 sm:gap-2.5 pl-2 sm:pl-6 py-0.5">
              <span className="text-[#A78BFA] font-black select-none shrink-0 text-xs sm:text-sm">{bulletChar.trim()}</span>
              <span className="text-gray-300 font-medium">{renderedLine}</span>
            </div>
          );
        }

        return (
          <p key={lineIdx} className={line.trim() === "" ? "h-2 sm:h-3" : "font-medium"}>
            {renderedLine}
          </p>
        );
      })}
    </div>
  );
}

// Memoized FAQItem component to prevent re-renders when other FAQs are toggled.
const FAQItem = React.memo(({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof FAQ_ITEMS[0]; 
  index: number; 
  isOpen: boolean; 
  onToggle: (index: number) => void; 
}) => {
  return (
    <motion.div
      id={`faq-item-${index}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
      className={`bg-[#111827]/60 rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? "border-[#7C3AED] glow-shadow bg-[#111827]" 
          : "border-[#1E293B] hover:border-[#7C3AED]/50"
      }`}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full text-left p-3.5 sm:p-6 flex justify-between items-center gap-3 sm:gap-4 transition-colors"
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-[#A78BFA] bg-[#A78BFA]/10 px-2 py-0.5 rounded-md w-fit">
            Q{index + 1}
          </span>
          <span className="font-extrabold text-white text-xs sm:text-base md:text-lg hover:text-[#A78BFA] transition-colors leading-snug">
            {faq.question}
          </span>
        </div>
        <span className={`p-1 sm:p-1.5 rounded-full transition-colors shrink-0 ${
          isOpen ? "bg-[#7C3AED] text-white" : "bg-[#1E293B] text-gray-400"
        }`}>
          {isOpen ? (
            <ChevronUp className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-3.5 pb-3.5 sm:px-6 sm:pb-6 pt-0 border-t border-[#1E293B] bg-[#0F172A]/40">
              {renderAnswer(faq.answer)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = "FAQItem";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="py-10 md:py-24 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] relative overflow-hidden">
      {/* Standardized low-opacity radial gradient overlay for consistent depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight mb-3">
            <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF4E93] to-[#EC4899] bg-clip-text text-transparent">Still Confused?</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400 font-sans max-w-xl mx-auto">
            Here are some answers to help you out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 max-w-7xl mx-auto items-start">
          {/* Left Column (Q1 - Q5) */}
          <div className="space-y-2 sm:space-y-4">
            {FAQ_ITEMS.slice(0, 5).map((faq, idx) => {
              const index = idx;
              return (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={toggleFAQ}
                />
              );
            })}
          </div>

          {/* Right Column (Q6 - Q10) */}
          <div className="space-y-2 sm:space-y-4">
            {FAQ_ITEMS.slice(5).map((faq, idx) => {
              const index = idx + 5;
              return (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={toggleFAQ}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
