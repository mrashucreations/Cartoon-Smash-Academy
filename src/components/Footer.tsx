import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Youtube, Instagram, Twitter, Facebook, Mail, ShieldCheck, FileText, HelpCircle, RefreshCw, X, MessageSquare, Phone, MapPin } from "lucide-react";
import logoSrc from "../../assets/Cartoon Smash Logo.png";

type ModalType = "privacy" | "terms" | "contact" | "refund" | null;

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

  const policyLinks = [
    { label: "Privacy Policy", type: "privacy" as ModalType, icon: <ShieldCheck className="w-4 h-4" /> },
    { label: "Terms of Use", type: "terms" as ModalType, icon: <FileText className="w-4 h-4" /> },
    { label: "Contact Us", type: "contact" as ModalType, icon: <HelpCircle className="w-4 h-4" /> },
    { label: "Refund Policy", type: "refund" as ModalType, icon: <RefreshCw className="w-4 h-4" /> }
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
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-purple-500/50 underline-offset-4 whitespace-nowrap"
            >
              Privacy Policy
            </button>
            <span className="text-white/10 font-mono">|</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-white transition-all duration-300 cursor-pointer hover:underline decoration-purple-500/50 underline-offset-4 whitespace-nowrap"
            >
              Terms & Conditions
            </button>
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
                    {activeModal === "privacy" && "Privacy Policy"}
                    {activeModal === "terms" && "Terms & Conditions"}
                    {activeModal === "contact" && "Contact Us & Support"}
                    {activeModal === "refund" && "Refund Policy"}
                  </h3>
                  <span className="text-[10px] font-mono text-purple-400 font-bold tracking-widest">
                  </span>
                </div>
              </div>

              {/* Content Box (Scrollable) */}
              <div className="overflow-y-auto pr-2 space-y-4 text-sm text-gray-300 leading-relaxed font-sans max-h-[50vh]">
                
                {activeModal === "privacy" && (
                  <>
                    <p className="text-xs text-purple-400 font-mono tracking-wider font-bold">Last Updated: July 18, 2026</p>
                    <p>Welcome to <span className="font-semibold text-white">Cartoon Smash Academy</span>.</p>
                    <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and purchase our animation course.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">1. Information We Collect</p>
                    <p>We may collect the following information:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Payment Information (processed securely by our payment partner)</li>
                      <li>Login Information</li>
                      <li>Course Progress</li>
                      <li>Device and Browser Information</li>
                      <li>IP Address</li>
                    </ul>
                    <p className="font-medium text-purple-300 bg-purple-950/20 border border-purple-500/15 p-2.5 rounded-lg text-xs">
                      We do not store your debit card, credit card, or UPI PIN details.
                    </p>
                    
                    <p className="font-semibold text-white text-base pt-2">2. How We Use Your Information</p>
                    <p>Your information is used to:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Create your account</li>
                      <li>Provide access to the course</li>
                      <li>Process payments</li>
                      <li>Send important updates</li>
                      <li>Respond to support requests</li>
                      <li>Improve our website and services</li>
                    </ul>
                    
                    <p className="font-semibold text-white text-base pt-2">3. Payment Security</p>
                    <p>Payments are processed through trusted third-party payment gateways. We never store your payment card details.</p>

                    <p className="font-semibold text-white text-base pt-2">4. Cookies</p>
                    <p>Our website may use cookies to:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Keep you logged in</li>
                      <li>Improve website performance</li>
                      <li>Analyze website traffic</li>
                    </ul>
                    <p>You can disable cookies through your browser settings.</p>

                    <p className="font-semibold text-white text-base pt-2">5. Data Protection</p>
                    <p>We take reasonable security measures to protect your personal information. However, no internet transmission is 100% secure.</p>

                    <p className="font-semibold text-white text-base pt-2">6. Third-Party Services</p>
                    <p>We may use trusted third-party services such as:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Payment Gateway</li>
                      <li>Google Analytics</li>
                      <li>Email Services</li>
                    </ul>
                    <p>These services have their own privacy policies.</p>

                    <p className="font-semibold text-white text-base pt-2">7. Children's Privacy</p>
                    <p>Our course is not intended for children under 13 years of age.</p>

                    <p className="font-semibold text-white text-base pt-2">8. Changes to This Policy</p>
                    <p>We may update this Privacy Policy from time to time. Changes will become effective once published on this page.</p>

                    <p className="font-semibold text-white text-base pt-2">9. Contact</p>
                    <p>If you have any questions regarding this Privacy Policy, you can contact us at:</p>
                    <p className="font-semibold text-purple-400">Email: academy@cartoonsmash.in</p>
                  </>
                )}

                {activeModal === "terms" && (
                  <>
                    <p className="text-xs text-purple-400 font-mono tracking-wider font-bold">Last Updated: July 18, 2026</p>
                    <p>Welcome to <span className="font-semibold text-white">Cartoon Smash Academy</span>. By accessing our website or purchasing our course, you agree to the following Terms & Conditions. Please read them carefully before making a purchase.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">1. Course Access</p>
                    <p>After successful payment, you will receive access to the purchased course.</p>
                    <p>Course access is provided only to the registered account used during purchase.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">2. Personal Use</p>
                    <p>This course is intended for your personal learning only.</p>
                    <p>You may not:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Share your login credentials with others.</li>
                      <li>Allow multiple users to access your account.</li>
                      <li>Upload course videos or files to any website or platform.</li>
                      <li>Copy, distribute, or reproduce course content.</li>
                      <li>Sell or resell the course or any part of it.</li>
                    </ul>
                    <p>Violation of these terms may result in immediate suspension or permanent termination of your account without prior notice.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">3. Asset Pack License</p>
                    <p>The asset pack included with this course is licensed for use in your own creative projects.</p>
                    <p>You are allowed to:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Use the assets in personal projects.</li>
                      <li>Use the assets in commercial projects.</li>
                      <li>Use the assets in YouTube videos, social media content, advertisements, short films, and client projects.</li>
                      <li>Modify or customize the assets according to your project requirements.</li>
                    </ul>
                    
                    <p>You are not allowed to:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Sell or resell the asset pack.</li>
                      <li>Redistribute or share the asset pack with others.</li>
                      <li>Upload the original or modified assets to any marketplace, website, or file-sharing platform.</li>
                      <li>Claim ownership or copyright of the original assets.</li>
                    </ul>
                    <p>The asset pack is provided as part of the course and may only be used by the original purchaser.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">4. Intellectual Property</p>
                    <p>All course videos, graphics, animations, PDFs, downloadable resources, source files, logos, and other course materials are the intellectual property of Cartoon Smash.</p>
                    <p>Unauthorized copying, recording, reproduction, distribution, or commercial resale of any course material is strictly prohibited.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">5. Payment</p>
                    <p>This course requires a one-time payment. Prices, offers, and discounts may change at any time without prior notice.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">6. Refund Policy</p>
                    <p>All purchases are final. Because this is a digital course with instant access to the content, <span className="font-semibold text-purple-300">no refunds, cancellations, or exchanges will be provided</span> after successful payment.</p>
                    <p>Please review the course details carefully before making your purchase.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">7. Account Suspension</p>
                    <p>We reserve the right to suspend or permanently terminate any account involved in:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Sharing login credentials.</li>
                      <li>Course piracy.</li>
                      <li>Unauthorized distribution of course materials.</li>
                      <li>Unauthorized distribution or resale of the asset pack.</li>
                      <li>Fraudulent activities.</li>
                      <li>Abuse or misuse of the platform.</li>
                    </ul>
                    <p>No refund will be issued for accounts terminated due to policy violations.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">8. Limitation of Liability</p>
                    <p>While we strive to provide the best learning experience, we do not guarantee specific learning outcomes, job placement, freelance projects, income, or business success.</p>
                    <p>We are not responsible for:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-300">
                      <li>Internet connectivity issues.</li>
                      <li>Device or software compatibility issues.</li>
                      <li>Temporary website downtime.</li>
                      <li>Data loss caused by user negligence.</li>
                    </ul>
                    
                    <p className="font-semibold text-white text-base pt-2">9. Changes to These Terms</p>
                    <p>We reserve the right to update or modify these Terms & Conditions at any time.</p>
                    <p>Any changes become effective immediately after being published on this page. Continued use of the website or course after updates constitutes acceptance of the revised Terms.</p>
                    
                    <p className="font-semibold text-white text-base pt-2">10. Contact</p>
                    <p>If you have any questions regarding these Terms & Conditions, you can contact us at:</p>
                    <p className="font-semibold text-purple-400 font-mono">Email: academy@cartoonsmash.in</p>
                  </>
                )}
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
