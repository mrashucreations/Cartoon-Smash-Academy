/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { 
  Award, 
  Wand2, 
  ArrowRight, 
  ArrowUpRight,
  Rocket, 
  Play, 
  Pen, 
  FolderOpen, 
  Cpu, 
  Languages, 
  MessageSquare, 
  RotateCw, 
  ShieldCheck, 
  Clock,
  Sparkles,
  X,
  CheckCircle,
  Check,
  CreditCard,
  User,
  Mail,
  Youtube,
  Palette,
  Compass,
  Trophy,
  Eye,
  Users,
  Briefcase,
  Smartphone,
  Video,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Eraser,
  HelpCircle,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CurriculumSection from "./components/CurriculumSection";
import FAQSection from "./components/FAQSection";
import VideoCarousel from "./components/VideoCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logoSrc from "../assets/Cartoon Smash Logo.png";
import landingPageBgSrc from "../assets/Landing_Page_Background_Image_Square.jpg";
import mentorPicSrc from "../assets/Ashutosh Mishra Pic.jpg";
import kidsCartoonVideo from "../assets/Website Gif Kids Cartoon.mp4";
import movieSpoofVideo from "../assets/Website Gif Movie Spoof.mp4";
import notYourTypeVideo from "../assets/Website Gif Not Your Type Cartoon.mp4";
import horrorStoriesVideo from "../assets/Website Gif Horror Stories.mp4";
import storyAnimationVideo from "../assets/Website Gif Story Animation.mp4";
import {
  AnimateIcon,
  PremiereIcon,
  AuditionIcon,
  MediaEncoderIcon,
  ChatGPTIcon,
  FlowIcon,
  GeminiIcon,
  AIIcon
} from "./components/ToolIcons";

export function CartoonSmashLogo({ className = "w-10 h-10" }: { className?: string }) {
  const [imgSrc, setImgSrc] = useState<string | null>(logoSrc);
  const [hasError, setHasError] = useState(false);

  const handleFallback = () => {
    if (imgSrc === logoSrc) {
      setImgSrc("https://cartoonsmash.in/logo.png");
    } else if (imgSrc === "https://cartoonsmash.in/logo.png") {
      setImgSrc("https://cartoonsmash.in/favicon.ico");
    } else if (imgSrc === "https://cartoonsmash.in/favicon.ico") {
      setImgSrc("https://cartoonsmash.in/favicon.png");
    } else {
      setHasError(true);
    }
  };

  if (!hasError && imgSrc) {
    return (
      <img
        src={imgSrc}
        alt="Cartoon Smash"
        draggable={false}
        className={`${className} object-contain rounded-full drop-shadow-[0_0_6px_rgba(168,85,247,0.17)] shadow-[0_0_8px_rgba(168,85,247,0.1)] border border-purple-500/5 select-none pointer-events-none`}
        onError={handleFallback}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={`${className} drop-shadow-[0_0_6px_var(--brand-glow)]`} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Glowing Purple Circle Background */}
      <circle cx="50" cy="50" r="46" fill="#0F0C24" stroke="var(--brand-logo-stroke, #9333EA)" strokeWidth="3" />
      
      {/* Lightning bolts (Yellow sparks) */}
      <path d="M 16 55 L 23 51 L 19 59 Z" fill="#FBBF24" />
      <path d="M 84 45 L 77 49 L 81 41 Z" fill="#FBBF24" />
      
      {/* Text Group with drop shadows for 3D effect */}
      <g className="drop-shadow-[1px_2px_0px_rgba(0,0,0,0.9)]">
        {/* "CARTOON" Text */}
        <text x="50" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" fill="#FF7A00" textAnchor="middle" letterSpacing="1">CART   N</text>
        
        {/* Googly Eyes in the middle of Cartoon */}
        <circle cx="44" cy="39" r="6" fill="#FFFFFF" />
        <circle cx="45.5" cy="38" r="2.5" fill="#2563EB" />
        <circle cx="45.5" cy="38" r="1.2" fill="#000000" />
        
        <circle cx="54" cy="39" r="6" fill="#FFFFFF" />
        <circle cx="52.5" cy="38" r="2.5" fill="#2563EB" />
        <circle cx="52.5" cy="38" r="1.2" fill="#000000" />
 
        {/* "SMASH" Text */}
        <text x="50" y="68" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" fill="#22C55E" textAnchor="middle" letterSpacing="0.5" transform="rotate(-3 50 68)">SMASH</text>
      </g>
    </svg>
  );
}
 
export function CartoonSmashCTA({ 
  children, 
  href = "#", 
  onClick,
  target,
  rel,
  className = "" 
}: { 
  children: React.ReactNode; 
  href?: string; 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`relative group inline-flex items-center justify-center font-extrabold text-white bg-brand-gradient hover:bg-brand-gradient-hover rounded-xl overflow-hidden premium-btn-outer active:scale-95 transition-all duration-300 ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Moving Shining Light Sweep inside - perfectly looping sweep that enters and exits continuously without pause */}
      <span className="premium-shine-loop"></span>
      
      {/* Button Content */}
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  );
}

function TimerSegment({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Glowing glass card with subtle border and text accent */}
      <div className="relative flex items-center justify-center w-14 h-16 md:w-16 md:h-20 bg-gradient-to-b from-[#111827] to-[#0B0F19] border border-[#1E293B] rounded-2xl shadow-xl overflow-hidden group hover:border-[#7C3AED]/40 transition-colors duration-300">
        {/* Subtle top edge glow with theme gradients */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#FF6B35]"></div>
        
        {/* Subtle horizontal divide grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>

        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="text-2xl md:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-300 relative z-10 select-none tracking-tight"
        >
          {value}
        </motion.span>
      </div>
      <span className="text-[9px] md:text-[10px] font-black text-gray-400 mt-2.5 uppercase tracking-widest leading-none">
        {label}
      </span>
    </div>
  );
}

function PremiumGlowTimer({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) {
  const padZero = (num: number) => String(num).padStart(2, "0");
  
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 py-3 px-5 md:py-4 md:px-6 bg-[#090D16]/90 border border-[#1E293B]/70 rounded-2xl shadow-2xl backdrop-blur-md">
      {days > 0 && (
        <>
          <TimerSegment value={padZero(days)} label="Days" />
          <span className="text-gray-600 font-mono font-bold text-lg md:text-xl -mt-5 animate-pulse">:</span>
        </>
      )}
      <TimerSegment value={padZero(hours)} label="Hours" />
      <span className="text-gray-600 font-mono font-bold text-lg md:text-xl -mt-5 animate-pulse">:</span>
      <TimerSegment value={padZero(minutes)} label="Min" />
      <span className="text-gray-600 font-mono font-bold text-lg md:text-xl -mt-5 animate-pulse">:</span>
      <TimerSegment value={padZero(seconds)} label="Sec" />
    </div>
  );
}

const PALETTES = [
  {
    id: "amethyst",
    name: "Cosmic Amethyst",
    emoji: "🔮",
    from: "#8b0df2",
    via: "#701ced",
    to: "#3b32e6",
    hoverFrom: "#7c0be0",
    hoverVia: "#6314e3",
    hoverTo: "#3129cc",
    accentText: "#a78bfa",
    glowColor: "rgba(139, 13, 242, 0.15)",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    badgeBorder: "rgba(124, 58, 237, 0.25)",
    logoStroke: "#9333EA"
  },
  {
    id: "inferno",
    name: "Sunset Inferno",
    emoji: "🔥",
    from: "#FF3E3E",
    via: "#FF7A00",
    to: "#FFB800",
    hoverFrom: "#E52E2E",
    hoverVia: "#E06B00",
    hoverTo: "#E0A200",
    accentText: "#FFC07F",
    glowColor: "rgba(255, 122, 0, 0.15)",
    badgeBg: "rgba(255, 122, 0, 0.12)",
    badgeBorder: "rgba(255, 122, 0, 0.25)",
    logoStroke: "#FF7A00"
  },
  {
    id: "aurora",
    name: "Aurora Cyber",
    emoji: "⚡",
    from: "#00F2FE",
    via: "#00C6FF",
    to: "#0072FF",
    hoverFrom: "#00D8E4",
    hoverVia: "#00B2E5",
    hoverTo: "#0062DB",
    accentText: "#80F5FF",
    glowColor: "rgba(0, 242, 254, 0.15)",
    badgeBg: "rgba(0, 242, 254, 0.1)",
    badgeBorder: "rgba(0, 242, 254, 0.25)",
    logoStroke: "#00C6FF"
  },
  {
    id: "emerald",
    name: "Electric Emerald",
    emoji: "❇️",
    from: "#10B981",
    via: "#059669",
    to: "#047857",
    hoverFrom: "#059669",
    hoverVia: "#047857",
    hoverTo: "#065F46",
    accentText: "#6EE7B7",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badgeBg: "rgba(16, 185, 129, 0.1)",
    badgeBorder: "rgba(16, 185, 129, 0.25)",
    logoStroke: "#10B981"
  }
];

const CHECKOUT_FEATURES = [
  {
    title: "One-Time Easy Payment",
    icon: CreditCard,
    color: "from-purple-500/10 to-purple-500/5 text-purple-400 border-purple-500/20"
  },
  {
    title: "50+ Hours Content",
    icon: Play,
    color: "from-amber-500/10 to-amber-500/5 text-amber-400 border-amber-500/20"
  },
  {
    title: "Hindi Recorded Course",
    icon: Languages,
    color: "from-blue-500/10 to-blue-500/5 text-blue-400 border-blue-500/20"
  },
  {
    title: "Dedicated Doubt Support",
    icon: MessageSquare,
    color: "from-emerald-500/10 to-emerald-500/5 text-emerald-400 border-emerald-500/20"
  },
  {
    title: "AI-Powered Workflow",
    icon: Cpu,
    color: "from-indigo-500/15 to-indigo-500/5 text-indigo-400 border-indigo-500/30 font-bold"
  },
  {
    title: "Build a YouTube Career",
    icon: Trophy,
    color: "from-red-500/10 to-red-500/5 text-red-400 border-red-500/20"
  },
  {
    title: "Beginner to Advanced",
    icon: Compass,
    color: "from-pink-500/10 to-pink-500/5 text-pink-400 border-pink-500/20"
  },
  {
    title: "No Drawing Required",
    icon: Palette,
    color: "from-pink-500/10 to-pink-500/5 text-pink-400 border-pink-500/20"
  },
  {
    title: "50GB+ Premium Assets",
    icon: FolderOpen,
    color: "from-cyan-500/10 to-cyan-500/5 text-cyan-400 border-cyan-500/20"
  },
  {
    title: "Lifetime Course Access",
    icon: RotateCw,
    color: "from-orange-500/10 to-orange-500/5 text-orange-400 border-orange-500/20"
  }
];

export default function App() {
  const [isInteractive, setIsInteractive] = useState(false);
  const [activePaletteId, setActivePaletteId] = useState("amethyst");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 5, minutes: 0, seconds: 0 });
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/LLBHPv4Wj1w");
  const [showStickyBottom, setShowStickyBottom] = useState(false);
  const [showMobilePricing, setShowMobilePricing] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const [isSideBySide, setIsSideBySide] = useState(typeof window !== "undefined" ? window.innerWidth >= 1280 : false);

  // Trigger interactivity and preloading after window load
  useEffect(() => {
    const handleSettle = () => {
      // Delay slightly to prioritize critical page resources rendering
      setTimeout(() => {
        setIsInteractive(true);

        // Preload mentor portrait programmatically in background
        const imgMentor = new Image();
        imgMentor.src = mentorPicSrc;

        // Preload video carousel fallbacks
        const fallbacks = [
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&auto=format&fit=crop"
        ];
        fallbacks.forEach(src => {
          const img = new Image();
          img.src = src;
        });

        // Preload video assets by creating video element shells to download/cache them
        const videos = [
          kidsCartoonVideo,
          movieSpoofVideo,
          notYourTypeVideo,
          horrorStoriesVideo,
          storyAnimationVideo
        ];
        videos.forEach(src => {
          const video = document.createElement("video");
          video.src = src;
          video.preload = "auto";
        });
      }, 400);
    };

    if (document.readyState === "complete") {
      handleSettle();
    } else {
      window.addEventListener("load", handleSettle);
      return () => window.removeEventListener("load", handleSettle);
    }
  }, []);
  const [isPricingVisible, setIsPricingVisible] = useState(false);

  // Simulated Checkout States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card">("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string } | null>(null);

  // Close active video modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Global lightweight site-wide media protection & keyboard shortcut blocker
  useEffect(() => {
    // 1. Disable context menu across the entire website
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent dragging of any images, videos, or source tags
    const handleDragStart = (e: DragEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "img" || tag === "video" || tag === "picture" || tag === "source") {
        e.preventDefault();
      }
    };

    // 3. Block common hotkeys for saving or inspecting page source
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof window !== "undefined" && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      const keyLower = e.key ? e.key.toLowerCase() : "";

      // F12 key
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+S / Cmd+S (Save Page As)
      if (cmdOrCtrl && keyLower === "s") {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+U / Cmd+U (View Page Source)
      if (cmdOrCtrl && keyLower === "u") {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+Shift+I / Cmd+Option+I (Toggle Developer Tools / Inspect Element)
      if (cmdOrCtrl && e.shiftKey && keyLower === "i") {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+Shift+J / Cmd+Option+J (Developer Tools Console)
      if (cmdOrCtrl && e.shiftKey && keyLower === "j") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown, true); // Use capture phase to intercept shortcuts first

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  const activePalette = useMemo(() => {
    return PALETTES.find((p) => p.id === activePaletteId) || PALETTES[0];
  }, [activePaletteId]);

  const themeStyles = useMemo(() => {
    return {
      "--brand-from": activePalette.from,
      "--brand-via": activePalette.via,
      "--brand-to": activePalette.to,
      "--brand-hover-from": activePalette.hoverFrom,
      "--brand-hover-via": activePalette.hoverVia,
      "--brand-hover-to": activePalette.hoverTo,
      "--brand-accent": activePalette.accentText,
      "--brand-glow": activePalette.glowColor,
      "--brand-badge-bg": activePalette.badgeBg,
      "--brand-badge-border": activePalette.badgeBorder,
      "--brand-logo-stroke": activePalette.logoStroke,
    } as React.CSSProperties;
  }, [activePalette]);

  const openCheckout = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsCheckoutOpen(true);
  }, []);

  const handleWatchTrailer = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setVideoUrl("https://www.youtube.com/embed/LLBHPv4Wj1w?autoplay=1");
    const container = document.getElementById("preview-video-container");
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleCheckoutSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutEmail || !checkoutPhone) {
      alert("Please fill in all details to proceed.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  }, [checkoutName, checkoutEmail, checkoutPhone]);

  const resetCheckout = useCallback(() => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
    setCheckoutName("");
    setCheckoutEmail("");
    setCheckoutPhone("");
  }, []);

  // Resize listener to check if we are on mobile screen size (< 768px) with debouncing (150ms) to reduce CPU load
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
        setIsSideBySide(window.innerWidth >= 1280);
      }, 150);
    };
    setIsMobile(window.innerWidth < 768);
    setIsSideBySide(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Intersection Observer to detect when CTA/pricing section is in view to hide/slide down sticky bottom bar
  useEffect(() => {
    if (!isMobile) {
      setIsPricingVisible(false);
      return;
    }

    const pricingSection = document.getElementById("cta");
    if (!pricingSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPricingVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25, // trigger when around 25% of the pricing section is visible in the viewport
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(pricingSection);
    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  // Persistent live urgency countdown timer set to 5 Hours
  useEffect(() => {
    let targetTime = localStorage.getItem("cs_countdown_target_5h");
    let targetTimestamp: number;
    
    if (!targetTime) {
      targetTimestamp = Date.now() + (5 * 60 * 60 * 1000);
      localStorage.setItem("cs_countdown_target_5h", String(targetTimestamp));
    } else {
      targetTimestamp = parseInt(targetTime, 10);
      const now = Date.now();
      if (targetTimestamp < now || (targetTimestamp - now > 5 * 60 * 60 * 1000)) {
        targetTimestamp = now + (5 * 60 * 60 * 1000);
        localStorage.setItem("cs_countdown_target_5h", String(targetTimestamp));
      }
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTimestamp - now;

      if (difference <= 0) {
        // Reset to exactly 5 hours to keep pressure live
        const nextTarget = Date.now() + (5 * 60 * 60 * 1000);
        targetTimestamp = nextTarget;
        localStorage.setItem("cs_countdown_target_5h", String(nextTarget));
        setTimeLeft({ days: 0, hours: 5, minutes: 0, seconds: 0 });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const circularHeroImage = (isMobileVersion: boolean) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      className={isMobileVersion 
        ? "xl:hidden flex items-center justify-center relative w-full select-none py-4 z-0 mt-4 mb-6" 
        : "hidden xl:flex xl:col-span-5 items-center justify-center relative w-full select-none py-2 sm:py-4 xl:pl-6 z-0"
      }
    >
      <div 
        className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-none sm:w-[360px] sm:h-[360px] md:w-[410px] md:h-[410px] lg:w-[480px] lg:h-[480px] aspect-square flex items-center justify-center"
        style={{
          width: !isMobileVersion && isSideBySide ? "35rem" : undefined,
          height: !isMobileVersion && isSideBySide ? "35rem" : undefined,
          paddingLeft: !isMobileVersion && isSideBySide ? "0px" : undefined,
          marginLeft: !isMobileVersion && isSideBySide ? "-6.875rem" : undefined,
          marginRight: !isMobileVersion && isSideBySide ? "0.3125rem" : undefined,
          marginTop: !isMobileVersion && isSideBySide ? "-0.9375rem" : undefined,
        }}
      >
        
        {/* Soft radial gradient background behind the circle, blending into the page's dark background */}
        <div className="absolute inset-[-20px] sm:inset-[-40px] lg:inset-[-60px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,rgba(236,72,153,0.04)_50%,transparent_100%)] blur-[35px] lg:blur-[45px] pointer-events-none z-0" />
        
        {/* Outer glowing decorative ring/border following the circle with a visible halo gap scaled proportionally */}
        <div className="absolute inset-[-14px] sm:inset-[-21px] lg:inset-[-30px] xl:inset-[-34px] rounded-full border border-white/20 sm:border-white/30 shadow-[0_0_24px_rgba(147,51,234,0.2),_inset_0_0_12px_rgba(236,72,153,0.1)] pointer-events-none z-10">
          
          {/* Continuous orbiting wrapper for the two decorative dots */}
          <div className="absolute inset-0 rounded-full animate-orbit pointer-events-none">
            {/* Small floating decorative dots sitting ON the ring line itself at 67.5 degree offsets */}
            {/* Left dot: gradient pink-to-purple */}
            <div className="absolute top-[30.87%] left-[3.81%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_18px_rgba(236,72,153,0.95)] z-20" />
            
            {/* Right dot: solid purple */}
            <div className="absolute top-[69.13%] left-[96.19%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.9)] z-20" />
          </div>
          
        </div>

        {/* Crop and display the image inside a PERFECT CIRCLE shape (border-radius: 50%) */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-10 relative">
          <img 
            src={landingPageBgSrc} 
            alt="Cartoon Smash Academy Hero" 
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Social Proof Badge/Card overlapping BOTTOM-LEFT edge */}
        <div 
          className="absolute bottom-[4%] left-1/2 -translate-x-1/2 sm:bottom-[6%] xl:bottom-[10%] xl:left-[-50px] xl:translate-x-0 bg-[#070514]/90 backdrop-blur-md border border-white/10 rounded-[18px] py-2 px-3 sm:py-2.5 sm:px-4 shadow-[0_12px_32px_rgba(0,0,0,0.6),_0_0_15px_rgba(147,51,234,0.15)] flex items-center gap-3 shrink-0 z-30 select-none whitespace-nowrap"
          style={{
            height: !isMobileVersion && isSideBySide ? "3.75rem" : undefined,
            width: !isMobileVersion && isSideBySide ? "20rem" : undefined,
            marginLeft: !isMobileVersion && isSideBySide ? "10.75rem" : undefined,
            marginBottom: !isMobileVersion && isSideBySide ? "-5rem" : undefined,
          }}
        >
          {/* Overlapping Avatars in brand-cohesive palette (shades of purple, pink, orange) */}
          <div className="flex -space-x-2.5 overflow-hidden">
            {[
              { bg: "bg-gradient-to-br from-[#9333EA] to-[#6D28D9]", text: "AM" },
              { bg: "bg-gradient-to-br from-[#EC4899] to-[#BE185D]", text: "KD" },
              { bg: "bg-gradient-to-br from-[#FF7A00] to-[#C2410C]", text: "RS" },
              { bg: "bg-gradient-to-br from-[#C084FC] to-[#8B5CF6]", text: "PT" },
              { bg: "bg-gradient-to-br from-[#F472B6] to-[#DB2777]", text: "SY" }
            ].map((avatar, idx) => (
              <div 
                key={idx} 
                className={`w-7 h-7 rounded-full ${avatar.bg} border-2 border-[#0B081B] flex items-center justify-center text-[9px] font-bold text-white shadow-md shrink-0`}
              >
                {avatar.text}
              </div>
            ))}
          </div>
          {/* Trust Text Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold text-gray-200 tracking-wide leading-none">
              500+ Students Enrolled
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 mt-1 flex items-center gap-1 tracking-wider leading-none">
              <span>★★★★★</span>
              <span className="text-gray-400 font-medium">4.8/5 rating</span>
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );

  return (
    <>
      <div 
        className="theme-container bg-[#0c0f20] text-gray-100 font-sans antialiased selection:bg-[var(--brand-accent)]/30 selection:text-[var(--brand-accent)] min-h-screen flex flex-col"
        style={themeStyles}
      >
        <Header />

        {/* 3. Hero Section */}
        <header 
          className="pt-6 pb-6 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 lg:pt-20 lg:pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-[#1E293B] relative overflow-hidden"
        >
        {/* Seamless dark elegant overlay to maintain extreme text readability and high-contrast styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0f20]/95 via-[#0c0f20]/70 to-[#0c0f20]/20 lg:from-[#0c0f20]/95 lg:via-[#0c0f20]/50 lg:to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f20] via-transparent to-transparent pointer-events-none z-0"></div>

        {/* Ambient Glowing Wash Details - dynamically changes color scheme with the active theme */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[var(--brand-from)]/15 rounded-full blur-[40px] pointer-events-none z-0 mix-blend-screen animate-pulse duration-[20s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--brand-to)]/12 rounded-full blur-[40px] pointer-events-none z-0 mix-blend-screen animate-pulse duration-[25s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/5 rounded-full blur-[40px] pointer-events-none z-0 mix-blend-screen" />

        <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10 xl:gap-12 relative z-10">
          
          {/* Main Content Split Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-10 xl:gap-10 items-center w-full">
            
            {/* Left Column: Text & CTAs (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="xl:col-span-7 flex flex-col items-start text-left xl:pr-10 xl:h-[38.75rem] xl:mt-[-1.4375rem] xl:ml-0 xl:justify-between relative z-20 gap-4 sm:gap-6 xl:gap-0"
            >
              {/* Image 2 Heading Typography, Breaks & Gradients matching Reference Image */}
              <h1 className="text-[28px] xs:text-[34px] sm:text-5xl lg:text-[60px] xl:text-[60px] font-black leading-[1.2] lg:leading-[1.25] xl:leading-[1.2] tracking-tight mb-4 sm:mb-6 xl:mb-0 text-white font-sans">
                <span className="block whitespace-nowrap">AI-Powered</span>
                <span className="block mt-1 sm:mt-0">
                  Complete <span className="relative inline-block pb-1 sm:pb-2 cursor-default group/anim transition-transform duration-300 hover:scale-[1.01]">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #F97316 0%, #EC4899 50%, #8B5CF6 100%)", textShadow: "0 0 40px rgba(236, 72, 153, 0.3)" }}>
                      2D Animation
                    </span>
                    <svg className="absolute -bottom-1 left-0 w-full h-[6px] sm:h-[8px] pointer-events-none overflow-visible" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="grad-anim" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F97316" />
                          <stop offset="50%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 1,4 C 30,7.5 70,6.5 99,3 C 70,5 30,5.5 1,4 Z" 
                        fill="url(#grad-anim)" 
                        className="opacity-95 shadow-[0_1px_6px_rgba(236,72,153,0.3)] transition-all duration-300 group-hover/anim:opacity-100"
                      />
                    </svg>
                  </span>
                </span>
                <span className="block mt-1 sm:mt-0">
                  & <span className="relative inline-block pb-1 sm:pb-2 cursor-default group/vid transition-transform duration-300 hover:scale-[1.01]">
                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #F97316 0%, #EC4899 50%, #8B5CF6 100%)", textShadow: "0 0 40px rgba(236, 72, 153, 0.3)" }}>
                      Video Editing
                    </span>
                    <svg className="absolute -bottom-1 left-0 w-full h-[6px] sm:h-[8px] pointer-events-none overflow-visible" viewBox="0 0 100 8" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="grad-vid" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F97316" />
                          <stop offset="50%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 1,4 C 30,7.5 70,6.5 99,3 C 70,5 30,5.5 1,4 Z" 
                        fill="url(#grad-vid)" 
                        className="opacity-95 shadow-[0_1px_6px_rgba(236,72,153,0.3)] transition-all duration-300 group-hover/vid:opacity-100"
                      />
                    </svg>
                  </span> Course
                </span>
              </h1>

              {circularHeroImage(true)}

              {/* Subheading text matching image 1 */}
              <p className="relative text-white/60 text-sm md:text-base lg:text-[18px] font-medium leading-relaxed max-w-xl mb-4 sm:mb-6 xl:mb-0 pl-4">
                <svg 
                  className="absolute left-0 top-0.5 bottom-0.5 w-[3px] h-[calc(100%-4px)] select-none pointer-events-none" 
                  viewBox="0 0 3 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroAccentBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <clipPath id="heroAccentClip">
                      <rect x="0" y="0" width="3" height="100" rx="1.5" ry="1.5" />
                    </clipPath>
                  </defs>
                  <rect 
                    x="0.4" 
                    y="0" 
                    width="1.1" 
                    height="100" 
                    fill="url(#heroAccentBarGrad)" 
                    clipPath="url(#heroAccentClip)" 
                  />
                </svg>
                Drawing ki fikar chhodo, bas High-Quality Professional 2D Animation banana sikho.
              </p>

              {/* Course Highlights Section */}
              <div className="w-full mb-4 sm:mb-6 xl:mb-0 select-none">
                <div className="text-[10px] md:text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#EC4899]"></span>
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">COURSE HIGHLIGHTS</span>
                </div>
                <div 
                  className="w-full"
                  style={{
                    width: isSideBySide ? "39.375rem" : undefined,
                  }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2.5 lg:gap-y-4">
                    {[
                      { name: "Beginner to Pro", icon: <GraduationCap className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "Zero Drawing", icon: <Eraser className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "AI + Animate", icon: <Sparkles className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "50GB+ Assets", icon: <FolderOpen className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "Hindi Lectures", icon: <Languages className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "Doubt Support", icon: <HelpCircle className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "Live Projects", icon: <Rocket className="w-4 h-4 text-[#A78BFA]" /> },
                      { name: "YouTube Career", icon: <Youtube className="w-4 h-4 text-[#A78BFA]" /> }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 group"
                      >
                        <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/15 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                          {item.icon}
                        </div>
                        <span className="text-[11.5px] sm:text-xs font-semibold text-gray-300 tracking-wide group-hover:text-white transition-colors whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Fidelity "Tools Used" section with Auto-scrolling Marquee */}
              <div className="w-full max-w-2xl mb-4 sm:mb-6 xl:mb-0 select-none">
                <div className="text-[10px] md:text-[11px] font-black uppercase tracking-wider text-purple-400/80 flex items-center gap-1.5 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TOOLS USED</span>
                </div>
                 <div 
                  className="w-full bg-white/[0.03] backdrop-blur-md border border-white/5 rounded-[20px] py-1.5 px-3 sm:py-2 sm:px-4 lg:py-2.5 lg:px-4.5 shadow-[0_4px_24px_rgba(0,0,0,0.15)] relative overflow-hidden pause-hover"
                  style={{
                    width: isSideBySide ? "39.375rem" : undefined,
                  }}
                >
                  {/* Define SVG gradient definition for the logos */}
                  <svg width="0" height="0" className="absolute pointer-events-none">
                    <defs>
                      <linearGradient id="bluePurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="50%" stopColor="#A78BFA" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                      <linearGradient id="geminiSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="overflow-hidden w-full marquee-mask">
                    <div className="animate-marquee flex gap-3 sm:gap-[18px] py-0.5">
                      {[
                        {
                          name: "Animate",
                          borderColor: "border-[#8B5CF6]/50",
                          glowColor: "rgba(139,92,246,0.25)",
                          bg: "rgba(139,92,246,0.14)",
                          icon: <AnimateIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Premiere Pro",
                          borderColor: "border-[#0096FF]/50",
                          glowColor: "rgba(0,150,255,0.25)",
                          bg: "rgba(0,150,255,0.14)",
                          icon: <PremiereIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Audition",
                          borderColor: "border-[#7C3AED]/50",
                          glowColor: "rgba(124,58,237,0.25)",
                          bg: "rgba(124,58,237,0.14)",
                          icon: <AuditionIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Media Encoder",
                          borderColor: "border-[#3B82F6]/50",
                          glowColor: "rgba(59,130,246,0.25)",
                          bg: "rgba(59,130,246,0.14)",
                          icon: <MediaEncoderIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "ChatGPT",
                          borderColor: "border-[#60A5FA]/50",
                          glowColor: "rgba(96,165,250,0.25)",
                          bg: "rgba(96,165,250,0.14)",
                          icon: <ChatGPTIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Gemini",
                          borderColor: "border-[#7C3AED]/50",
                          glowColor: "rgba(124,58,237,0.25)",
                          bg: "rgba(124,58,237,0.14)",
                          icon: <GeminiIcon className="w-[13px] h-[13px] sm:w-3.5 sm:h-3.5" />
                        },
                        {
                          name: "Flow",
                          borderColor: "border-[#EA580C]/50",
                          glowColor: "rgba(234,88,12,0.25)",
                          bg: "rgba(234,88,12,0.14)",
                          icon: <FlowIcon className="w-[13px] h-[13px] sm:w-3.5 sm:h-3.5" />
                        },
                        {
                          name: "AI Tools",
                          borderColor: "border-[#A78BFA]/50",
                          glowColor: "rgba(167,139,250,0.25)",
                          bg: "rgba(167,139,250,0.14)",
                          icon: <AIIcon className="w-3 h-3 sm:w-3 sm:h-3 text-[#A78BFA]" />
                        }
                      ].concat([
                        {
                          name: "Animate",
                          borderColor: "border-[#8B5CF6]/50",
                          glowColor: "rgba(139,92,246,0.25)",
                          bg: "rgba(139,92,246,0.14)",
                          icon: <AnimateIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Premiere Pro",
                          borderColor: "border-[#0096FF]/50",
                          glowColor: "rgba(0,150,255,0.25)",
                          bg: "rgba(0,150,255,0.14)",
                          icon: <PremiereIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Audition",
                          borderColor: "border-[#7C3AED]/50",
                          glowColor: "rgba(124,58,237,0.25)",
                          bg: "rgba(124,58,237,0.14)",
                          icon: <AuditionIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Media Encoder",
                          borderColor: "border-[#3B82F6]/50",
                          glowColor: "rgba(59,130,246,0.25)",
                          bg: "rgba(59,130,246,0.14)",
                          icon: <MediaEncoderIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "ChatGPT",
                          borderColor: "border-[#60A5FA]/50",
                          glowColor: "rgba(96,165,250,0.25)",
                          bg: "rgba(96,165,250,0.14)",
                          icon: <ChatGPTIcon className="w-[15px] h-[15px] sm:w-4 sm:h-4" />
                        },
                        {
                          name: "Gemini",
                          borderColor: "border-[#7C3AED]/50",
                          glowColor: "rgba(124,58,237,0.25)",
                          bg: "rgba(124,58,237,0.14)",
                          icon: <GeminiIcon className="w-[13px] h-[13px] sm:w-3.5 sm:h-3.5" />
                        },
                        {
                          name: "Flow",
                          borderColor: "border-[#EA580C]/50",
                          glowColor: "rgba(234,88,12,0.25)",
                          bg: "rgba(234,88,12,0.14)",
                          icon: <FlowIcon className="w-[13px] h-[13px] sm:w-3.5 sm:h-3.5" />
                        },
                        {
                          name: "AI Tools",
                          borderColor: "border-[#A78BFA]/50",
                          glowColor: "rgba(167,139,250,0.25)",
                          bg: "rgba(167,139,250,0.14)",
                          icon: <AIIcon className="w-3 h-3 sm:w-3 sm:h-3 text-[#A78BFA]" />
                        }
                      ]).map((tool, idx) => (
                        <div key={idx} className="w-[54px] sm:w-[60px] flex flex-col items-center gap-1 group cursor-pointer shrink-0 opacity-100 transition-opacity duration-300">
                          <div 
                            className={`w-[24px] h-[24px] sm:w-[24px] sm:h-[24px] rounded-[6px] flex items-center justify-center border ${tool.borderColor} relative overflow-hidden transition-all duration-300 group-hover:scale-105`}
                            style={{
                              background: tool.bg,
                              boxShadow: `0 0 4px ${tool.glowColor}`
                            }}
                          >
                            {tool.icon}
                          </div>
                          <span className="text-[8px] sm:text-[8.5px] font-semibold text-gray-200/75 text-center whitespace-nowrap group-hover:text-white transition-colors duration-200">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Area */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto xl:mb-0 mb-3 select-none">
                <CartoonSmashCTA 
                  href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 text-base md:text-lg w-full sm:w-auto xl:w-[19.1875rem] shrink-0 shadow-2xl shadow-purple-500/20 font-black uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3"
                >
                  Join the Course
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-3.5 h-3.5 text-[#7C3AED]" strokeWidth={3} />
                  </div>
                </CartoonSmashCTA>
                
                <button
                  type="button"
                  onClick={handleWatchTrailer}
                  className="px-8 py-4 text-sm md:text-base w-full sm:w-auto xl:w-[19.1875rem] xl:h-[3.75rem] shrink-0 rounded-2xl border border-[#1E293B] hover:border-purple-500/50 bg-[#0B0F19]/80 text-[#eeeeee] hover:text-white font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-purple-500/5 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Play className="w-4 h-4 fill-current text-[#FF6B35]" /> Watch Trailer
                </button>
              </div>

            </motion.div>

            {/* Right Column: Rebalanced with a stunning extra-large circular hero image composition */}
            {circularHeroImage(false)}

          </div>

        </div>
      </header>

      {/* 3.5. Course Preview Video Section */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-10 px-3 sm:px-6 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] border-b border-[#1E293B] relative overflow-hidden">
        {/* Standardized low-opacity radial gradient overlay for consistent depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Ambient glow backgrounds for the video section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-from)]/5 rounded-full blur-[40px] pointer-events-none animate-pulse duration-[24s]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Watch Course <span className="bg-gradient-to-r from-[#FF7A00] to-[#EC4899] bg-clip-text text-transparent">Preview</span>
            </h2>
          </div>
 
          {/* High-Fidelity Course Preview Video Player Card */}
          <motion.div 
            id="preview-video-container"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="w-full max-w-7xl bg-[#0E1322]/80 backdrop-blur-xl p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.6)] relative overflow-hidden scroll-mt-24"
          >
            {/* Subtle top edge glow */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--brand-accent)]/45 to-transparent"></div>
            
            {/* Functional YouTube Iframe */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
              {isInteractive ? (
                <iframe
                  src={videoUrl}
                  title="Cartoon Smash Course Trailer"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 bg-[#070B16] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                    <span className="text-xs text-gray-400 font-mono">Loading trailer preview...</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Clean, micro-designed metadata block matching the landing style */}
            <div className="mt-3.5 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-center justify-between text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div>
                  <span className="block text-[11px] font-black text-white uppercase tracking-wider">Watch Course Preview</span>
                  <span className="block text-[9px] text-gray-400 font-medium">Take a quick look at the curriculum</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[var(--brand-accent)]">
                <Clock className="w-3.5 h-3.5 text-[var(--brand-accent)]" />
                <span>02:16 MIN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* 3.7. About Cartoon Smash & Your Mentor Section */}
      <section id="mentor" className="pt-6 pb-8 md:pt-10 md:pb-24 px-3 sm:px-6 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] border-b border-[#1A233D] relative overflow-hidden">
        {/* Standardized low-opacity radial gradient overlay for consistent depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Ambient glow backgrounds - high-end reference with enhanced depth */}
        <div className="absolute top-[-10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/15 to-transparent rounded-full blur-[40px] pointer-events-none animate-pulse duration-[20s]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-[40px] pointer-events-none animate-pulse duration-[24s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-orange-400/10 rounded-full blur-[40px] pointer-events-none animate-pulse duration-[28s]"></div>

        {/* Dynamic Space Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Block (Centered) */}
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-[22px] xs:text-3xl sm:text-6xl font-black text-white tracking-tight mt-2 mb-3 leading-none whitespace-nowrap">
              Meet Your <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF4E93] to-[#EC4899] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,122,0,0.2)]">Instructor</span>
            </h2>
            <p className="text-gray-400 text-[11px] xs:text-sm sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed whitespace-nowrap">
              Learn Animation from an Industry Professional
            </p>


          </div>

          {/* PC and Tablet Version (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Side: Large Professional Portrait, Single Elegant Info Card & CTA */}
            <div className="lg:col-span-5 flex flex-col items-center justify-between bg-gradient-to-b from-[#0C122C]/90 to-[#050816]/95 border border-white/[0.08] p-5 xs:p-8 sm:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl relative shadow-[0_30px_80px_rgba(0,0,0,0.85)] group overflow-hidden">
              {/* Glass Reflection effect on hover */}
              <div className="absolute -inset-y-12 -left-40 w-32 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-12 transition-transform duration-1000 ease-out group-hover:translate-x-[600px] pointer-events-none" />

              {/* Decorative Subtle Grid Corner highlights */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/40 rounded-tl-2xl sm:rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/40 rounded-br-2xl sm:rounded-br-3xl pointer-events-none" />
              
              <div className="w-full flex flex-col items-center">
                {/* Studio Portrait Card with high-end border frame and twinkling stars */}
                <div className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[290px] aspect-square rounded-xl sm:rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500/50 via-pink-500/30 to-orange-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group/img">
                  
                  {/* Subtle ambient light pulse behind portrait */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-orange-500/20 rounded-full blur-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Twinkling Star 1 - Top Right */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 text-amber-400 animate-bounce pointer-events-none z-20 flex items-center justify-center bg-[#0C122C] rounded-full border border-white/10 shadow-lg">
                    <Sparkles className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  </div>

                  {/* Twinkling Star 2 - Bottom Left */}
                  <div className="absolute -bottom-3 -left-3 w-7 h-7 text-purple-400 animate-pulse pointer-events-none z-20 flex items-center justify-center bg-[#0C122C] rounded-full border border-white/10 shadow-lg delay-300">
                    <Sparkles className="w-3.5 h-3.5 text-[#C084FC] drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                  </div>

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-[#0A0F26]">
                    {isInteractive ? (
                      <img 
                        src={mentorPicSrc} 
                        alt="Ashutosh Mishra" 
                        draggable={false}
                        className="w-full h-full object-cover filter brightness-[1.04] contrast-[1.02] transition-transform duration-700 ease-out group-hover/img:scale-108 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0E1322] animate-pulse flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                      </div>
                    )}
                    
                    {/* Minimalist Bottom Vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent pointer-events-none z-10" />
                  </div>
                </div>

                {/* Single Elegant Information Card */}
                <div className="w-full mt-6 text-center">
                  <h4 className="text-2xl font-black text-white tracking-tight mb-2">
                    Ashutosh Mishra
                  </h4>
                  
                  <div className="inline-flex flex-col items-start gap-2.5 mt-4 text-[13px] font-semibold tracking-wide">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                      <span className="text-[#94a3b8]">Founder</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                      <span className="text-[#cbd5e1]">Lotus Animation</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ paddingLeft: "5px" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#db2777]" />
                      <span className="text-[#94a3b8]">Creator</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#475569]" />
                      <span className="text-[#cbd5e1]">Cartoon Smash</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button placed below the info card */}
              <div className="w-full mt-8 relative z-20">
                <CartoonSmashCTA 
                  href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 text-base w-full font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_45px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-[1.03]"
                >
                  Meet Your Mentor
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </CartoonSmashCTA>
              </div>
            </div>

            {/* Right Side: Bio, Premium Stats Grid, Trust Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left lg:pt-0">
              {/* Premium Bio Box with modern quotes decoration */}
              <div className="bg-white/[0.02] border border-white/[0.04] p-5 xs:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden mb-6 flex-1 flex flex-col justify-center">
                <div className="absolute top-4 right-8 text-[120px] font-serif text-white/[0.02] select-none leading-none pointer-events-none">
                  “
                </div>
                
                {/* Bio Paragraphs */}
                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed relative z-10 font-medium">
                  <p className="text-xl md:text-2xl text-white font-extrabold tracking-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Ashutosh</span>.
                  </p>
                  <p>
                    Founder of <strong className="text-white font-bold underline decoration-purple-500/40 decoration-2 underline-offset-4">Lotus Animation</strong> and Creator of <strong className="text-[#D8B4FE] font-bold underline decoration-pink-500/40 decoration-2 underline-offset-4">Cartoon Smash</strong>.
                  </p>
                  <p>
                    With <strong className="text-amber-300 font-extrabold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">8+ years</strong> of industry experience, I've worked with <strong className="text-white font-semibold">100+ clients</strong> and <strong className="text-white font-semibold">30+ YouTube channels</strong>.
                  </p>
                  <p>
                    <strong className="text-[#D8B4FE] font-bold">Cartoon Smash</strong> has grown to <strong className="text-[#FF8C1A] font-extrabold bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">250K+ subscribers</strong> and <strong className="text-white font-semibold">100M+ views</strong> in just <strong className="text-white font-semibold">2 years</strong>.
                  </p>
                  <p className="text-gray-400 border-l-2 border-purple-500/40 pl-4 mt-6 italic">
                    In this course, you'll learn the same production workflow I use to create professional 2D animations from start to finish.
                  </p>
                </div>
              </div>

              {/* Premium Statistics Grid with beautiful cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  {
                    val: "250K+",
                    lbl: "YouTube Subscribers",
                    icon: Youtube,
                    iconBg: "bg-red-500/15 border-red-500/40 text-red-400 group-hover:bg-red-500/25 group-hover:text-red-300",
                    cardBg: "from-red-950/40 via-[#1C1226] to-[#0D0B18]",
                    borderStyle: "border-red-500/30 hover:border-red-500/60",
                    shadowStyle: "hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]",
                    textColor: "text-red-300 group-hover:text-white",
                    customStyle: { color: '#ffe5e6' }
                  },
                  {
                    val: "100M+",
                    lbl: "Views in 2 Years",
                    icon: Eye,
                    iconBg: "bg-purple-500/15 border-purple-500/40 text-purple-400 group-hover:bg-purple-500/25 group-hover:text-purple-300",
                    cardBg: "from-purple-950/40 via-[#12132F] to-[#0A0C1A]",
                    borderStyle: "border-purple-500/30 hover:border-purple-500/60",
                    shadowStyle: "hover:shadow-[0_0_25px_rgba(167,139,250,0.25)]",
                    textColor: "text-purple-300 group-hover:text-white"
                  },
                  {
                    val: "8+",
                    lbl: "Years of Experience",
                    icon: Briefcase,
                    iconBg: "bg-amber-500/15 border-amber-500/40 text-amber-400 group-hover:bg-amber-500/25 group-hover:text-amber-300",
                    cardBg: "from-amber-950/40 via-[#1F1916] to-[#0C0B0A]",
                    borderStyle: "border-amber-500/30 hover:border-amber-500/60",
                    shadowStyle: "hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
                    textColor: "text-amber-300 group-hover:text-white"
                  },
                  {
                    val: "100+",
                    lbl: "Clients Worked With",
                    icon: Users,
                    iconBg: "bg-blue-500/15 border-blue-500/40 text-blue-400 group-hover:bg-blue-500/25 group-hover:text-blue-300",
                    cardBg: "from-blue-950/40 via-[#0B1A38] to-[#050C1F]",
                    borderStyle: "border-blue-500/30 hover:border-blue-500/60",
                    shadowStyle: "hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]",
                    textColor: "text-blue-300 group-hover:text-white"
                  }
                ].map((stat, idx) => (
                  <div 
                     key={idx}
                     className={`flex items-center gap-4 py-3.5 px-4.5 rounded-2xl bg-gradient-to-br ${stat.cardBg} border ${stat.borderStyle} ${stat.shadowStyle} shadow-xl backdrop-blur-md group transition-all duration-300 hover:translate-y-[-4px] cursor-default relative overflow-hidden`}
                  >
                    {/* Subtle internal glowing beam */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${stat.iconBg} transition-all duration-300`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span 
                        className={`block text-2xl font-black tracking-tight leading-none ${stat.textColor} transition-colors duration-300 font-sans`}
                        style={stat.customStyle}
                      >
                        {stat.val}
                      </span>
                      <span className="block text-xs font-semibold text-gray-400 mt-1 leading-tight font-sans">
                        {stat.lbl}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Mobile Optimized Version (Hidden on PC/Tablet) */}
          <div className="block md:hidden bg-gradient-to-b from-[#0C122C]/90 to-[#050816]/95 border border-white/[0.08] p-5 rounded-2xl sm:rounded-3xl backdrop-blur-xl relative shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col gap-4">
            {/* Ambient light effects specifically for mobile */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Block (Centered) */}
            <div className="flex flex-col items-center text-center relative z-10 py-2">
              {/* Studio Portrait Avatar with custom glowing border */}
              <div className="relative w-[210px] h-[210px] shrink-0 rounded-xl sm:rounded-2xl p-[2.5px] bg-gradient-to-tr from-purple-500/60 via-pink-500/40 to-orange-500/60 shadow-[0_15px_35px_rgba(139,92,246,0.25)] mb-5">
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-[#0A0F26]">
                  {isInteractive ? (
                    <img 
                      src={mentorPicSrc} 
                      alt="Ashutosh Mishra" 
                      draggable={false}
                      className="w-full h-full object-cover filter brightness-[1.04] select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0E1322] animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                    </div>
                  )}
                </div>
                {/* Micro Sparkle badge */}
                <div className="absolute -top-1.5 -right-1.5 w-6.5 h-6.5 bg-[#0C122C] border border-white/12 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                </div>
              </div>

              {/* Identity Name */}
              <h4 className="text-2xl font-black text-white tracking-tight leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ashutosh Mishra
              </h4>

              {/* High-end Unified Minimalist Tagline Bar */}
              <div className="mt-3.5 flex items-stretch justify-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-2xl px-4 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">Founder</span>
                    <span className="text-purple-300 text-[11px] font-black tracking-wide">Lotus Animation</span>
                  </div>
                </div>
                <span className="w-[1px] bg-white/10 shrink-0 self-stretch my-0.5" />
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#db2777] shrink-0" />
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">Creator</span>
                    <span className="text-pink-300 text-[11px] font-black tracking-wide">Cartoon Smash</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Box */}
            <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl relative overflow-hidden text-left relative z-10">
              <div className="absolute top-2 right-4 text-4xl font-serif text-white/[0.02] select-none leading-none pointer-events-none">
                “
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                With <strong className="text-amber-300 font-bold bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/20">8+ years</strong> of experience, I've worked with <strong className="text-white font-semibold">100+ clients</strong> & <strong className="text-white font-semibold">30+ YouTube channels</strong>. My channel <strong className="text-[#D8B4FE] font-bold">Cartoon Smash</strong> has grown to <strong className="text-[#FF8C1A] font-extrabold bg-orange-500/10 px-1 py-0.5 rounded border border-orange-500/20">250K+ subscribers</strong> & <strong className="text-white font-semibold">100M+ views</strong> in just 2 years.
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/[0.06] text-xs text-[#b9bbc2] italic leading-relaxed">
                Learn the same exact production workflow I use to create professional 2D animations.
              </div>
            </div>

            {/* Premium Stats Grid (2x2 layout, very compact and beautiful) */}
            <div className="grid grid-cols-2 gap-2 relative z-10">
              {[
                {
                  val: "250K+",
                  lbl: "Subscribers",
                  icon: Youtube,
                  iconBg: "bg-red-500/10 border-red-500/25 text-red-400",
                  cardBg: "from-red-950/20 via-[#1C1226]/50 to-[#0D0B18]/50",
                  borderStyle: "border-red-500/20",
                  textColor: "text-red-300"
                },
                {
                  val: "100M+",
                  lbl: "Views",
                  icon: Eye,
                  iconBg: "bg-purple-500/10 border-purple-500/25 text-purple-400",
                  cardBg: "from-purple-950/20 via-[#12132F]/50 to-[#0A0C1A]/50",
                  borderStyle: "border-purple-500/20",
                  textColor: "text-purple-300"
                },
                {
                  val: "8+ Yrs",
                  lbl: "Experience",
                  icon: Briefcase,
                  iconBg: "bg-amber-500/10 border-amber-500/25 text-amber-400",
                  cardBg: "from-amber-950/20 via-[#1F1916]/50 to-[#0C0B0A]/50",
                  borderStyle: "border-amber-500/20",
                  textColor: "text-amber-300"
                },
                {
                  val: "100+",
                  lbl: "Clients",
                  icon: Users,
                  iconBg: "bg-blue-500/10 border-blue-500/25 text-blue-400",
                  cardBg: "from-blue-950/20 via-[#0B1A38]/50 to-[#050C1F]/50",
                  borderStyle: "border-blue-500/20",
                  textColor: "text-blue-300"
                }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br ${stat.cardBg} border ${stat.borderStyle} shadow-md`}
                >
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 border ${stat.iconBg}`}>
                    <stat.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className={`block text-xs font-black tracking-tight leading-none ${stat.textColor} font-sans`}>
                      {stat.val}
                    </span>
                    <span className="block text-[8px] font-semibold text-gray-400 mt-1 leading-none font-sans truncate">
                      {stat.lbl}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="w-full mt-1 relative z-20">
              <CartoonSmashCTA 
                href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs w-full font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                Meet Your Mentor
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={3} />
              </CartoonSmashCTA>
            </div>
          </div>
        </div>
      </section>

      {/* 3.9. What Can You Create Section - Rebuilt for high-quality, highly optimized responsive showcase */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] border-b border-[#1E293B] relative overflow-hidden">
        {/* Standardized low-opacity radial gradient overlay for consistent depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[var(--brand-from)]/15 rounded-full blur-[40px] pointer-events-none z-0 animate-pulse duration-[22s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--brand-to)]/12 rounded-full blur-[40px] pointer-events-none z-0 animate-pulse duration-[26s]" />
        
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          {/* Section badge */}
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#A78BFA] font-mono bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              WHAT YOU'LL CREATE
            </span>
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-center max-w-4xl mx-auto leading-tight mb-2">
            After Finishing <span className="bg-gradient-to-r from-[#FF7A00] via-[#FF4E93] to-[#EC4899] bg-clip-text text-transparent">This Course</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-xs sm:text-base md:text-lg max-w-2xl mx-auto text-center mb-4 leading-relaxed">
            Iss course ko Join karne ke baad tum bhi aise Professional 2D Animated Videos bana paoge.
          </p>

          {/* Infinite Loop Video Carousel Slider directly below the subtitle */}
          <div className="w-full relative z-10 px-2 sm:px-4 mb-4">
            <VideoCarousel isInteractive={isInteractive} onCardClick={(card) => setActiveVideo({ title: card.title, url: card.youtubeUrl })} />
          </div>

          {/* CTA Button placed below the video carousel */}
          <div className="flex flex-col items-center text-center relative z-10 w-full max-w-xs sm:max-w-sm px-4 mt-6">
            <CartoonSmashCTA 
              href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 text-base sm:text-lg font-black tracking-normal flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#FF6B35] border-t border-white/20 transition-all duration-300 hover:brightness-110 cursor-pointer group shadow-[0_15px_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              Start Creating Like This
              <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
            </CartoonSmashCTA>
          </div>
        </div>
      </section>

      {/* 4. Course Curriculum Section */}
      <CurriculumSection />

      {/* 5. FAQ Accordion Section */}
      <FAQSection />

      {/* 6. Final CTA Section */}
      <section id="cta" className="py-16 md:py-24 px-3 sm:px-6 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] border-t border-[#1E293B] relative overflow-hidden" style={{ minHeight: "802.14px" }}>
        {/* Standardized low-opacity radial gradient overlay for consistent depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
        
        {/* Decorative background visual elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[40px] pointer-events-none animate-pulse duration-[24s]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none animate-pulse duration-[28s]"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="max-w-7xl mx-auto relative z-10 text-center"
        >


          <h2 className="text-[27px] md:text-5xl font-extrabold font-display text-white tracking-tight leading-none mb-3">
            Start Your <span className="text-gradient">Animation Journey</span>
          </h2>
          <p className="text-xs md:text-base text-gray-400 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the complete AI-Powered 2D Animation & Editing Course and start creating high-quality professional animations today.
          </p>

          {/* Desktop/Tablet - Eye-catching Premium Redesigned Wide Checkout Box */}
          <div className="hidden md:block relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#141833] via-[#090C1B] to-[#04050D] border border-white/[0.1] shadow-[0_30px_80px_rgba(0,0,0,0.95)] p-8 sm:p-10 transition-all duration-300 hover:border-purple-500/35 backdrop-blur-md">
            {/* Ambient glows for depth and visual richness */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/18 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '15s' }}></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35]/14 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '18s' }}></div>

            <div className="relative z-10 flex flex-col gap-8 text-left">
              {/* 1. Top Header Row: Badges & Countdown Timer */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38BDF8] bg-[#0284C7]/15 border border-[#38BDF8]/25 px-4 py-2 rounded-lg font-mono">
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                  SPECIAL LIFETIME DEAL
                </span>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-wider text-amber-400 font-extrabold bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(255,107,53,0.15)] animate-pulse">
                  <Clock className="w-4 h-4 text-[#FF6B35] animate-pulse shrink-0" />
                  <span>{String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
              </div>

              {/* 2. Grid content split (Left: Features List, Right: Pricing Ticket) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Features List (col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#A78BFA] font-mono opacity-90 block mb-1">
                      ALL FEATURES INCLUDED
                    </span>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                      A to Z step-by-step videos, real practical files, personal doubt support, and unlimited lifetime updates. No pre-requisite knowledge needed.
                    </p>
                  </div>

                  {/* Clean 2-column features grid with only simple tickmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-1">
                    {CHECKOUT_FEATURES.map((feat, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 py-1 px-1.5 transition-all duration-300 group/item"
                      >
                        <div className="p-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0 group-hover/item:bg-emerald-500/25 transition-all duration-300">
                          <Check className="w-4 h-4" strokeWidth={3.5} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover/item:text-white transition-colors duration-200 truncate tracking-wide">
                          {feat.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic visual guarantee/trust bar below features */}
                  <div className="border-t border-white/[0.05] pt-4 mt-auto">
                    <p className="text-[11px] font-medium text-gray-500 font-mono uppercase tracking-wider">
                      ✓ No monthly subscriptions • ✓ No hidden charges • ✓ Lifetime access & support
                    </p>
                  </div>
                </div>

                {/* Right Side: Integrated Pricing & Checkout Card (col-span-5) */}
                <div className="lg:col-span-5 w-full flex flex-col justify-stretch">
                  <div className="bg-gradient-to-b from-[#181C3D] to-[#0A0D1F] border border-white/[0.12] rounded-2xl p-6 flex flex-col gap-5 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden h-full justify-between">
                    {/* Glowing highlights for premium ticket depth */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/12 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF6B35]/10 rounded-full blur-2xl pointer-events-none"></div>

                    <div className="flex flex-col gap-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold tracking-widest text-[#A78BFA] uppercase font-mono">
                          LIFETIME PASS VALUE
                        </span>
                        <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md font-mono tracking-wider shadow-[0_0_12px_rgba(251,191,36,0.35)]">
                          62% OFF TODAY
                        </span>
                      </div>

                      {/* Prominently Highlighted Price & Offer Container */}
                      <div className="bg-[#1D244D]/50 border border-[#7C3AED]/30 rounded-xl p-4.5 flex flex-col gap-3.5 shadow-lg relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#FF6B35]/10 rounded-full blur-md"></div>
                        
                        <div className="flex items-center justify-between gap-3">
                          {/* Original Price */}
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider font-mono">Original Price</span>
                            <div className="relative inline-flex items-center">
                              <span className="text-[23px] font-normal text-[#6a7282] tracking-tight font-sans line-through decoration-1">
                                ₹7,999
                              </span>
                            </div>
                          </div>

                          {/* Beautiful direct pointer */}
                          <div className="text-[#A78BFA]/50 text-xl font-bold font-sans animate-pulse">→</div>

                          {/* Deal Price with massive beautiful highlight */}
                          <div className="flex flex-col items-end text-right">
                            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest font-mono">Special Deal Price</span>
                            <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter bg-gradient-to-r from-white via-white to-[#FF6B35] bg-clip-text text-transparent font-sans leading-none drop-shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
                              ₹2,999
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent relative z-10"></div>

                    {/* Trust Factor Guarantee */}
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-300 font-medium font-sans relative z-10">
                      <span className="inline-block text-emerald-400 font-bold">✓</span>
                      <span>Instant access with 100% lifetime guarantee</span>
                    </div>

                    {/* Dynamic CTA Button & Padlock Security */}
                    <div className="flex flex-col gap-3 relative z-10">
                      <CartoonSmashCTA 
                        href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-15 text-lg shadow-[0_12px_24px_rgba(124,58,237,0.25)] active:scale-[0.98] font-black tracking-normal flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#FF6B35] border-t border-white/20 transition-all duration-300 hover:brightness-110 cursor-pointer group"
                      >
                        Join Now
                        <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1.5 transition-transform duration-300" strokeWidth={2.5} />
                      </CartoonSmashCTA>
                      
                      <div className="flex items-center justify-center gap-2 text-[9px] font-mono tracking-wider text-gray-500/80 uppercase font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-500/70 shrink-0" strokeWidth={2.5} /> 
                        <span>SECURE 256-BIT SSL CHECKOUT</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


          {/* Mobile View - Unified Screen-friendly Compact Layout Card */}
          <div className="block md:hidden relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#141833] via-[#090C1B] to-[#04050D] border border-white/[0.1] shadow-[0_24px_60px_rgba(0,0,0,0.95)] p-5.5 transition-all duration-300 hover:border-purple-500/35 backdrop-blur-sm">
            {/* Ambient glows for depth and visual richness */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#7C3AED]/18 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '15s' }}></div>
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#FF6B35]/14 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '18s' }}></div>

            <div className="relative z-10 flex flex-col gap-4.5 text-left">
              {/* 1. Header Badges & Compact Countdown Timer */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-[#38BDF8] bg-[#0284C7]/15 border border-[#38BDF8]/25 px-2.5 py-1 rounded-lg font-mono">
                  <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]" />
                  SPECIAL DEAL
                </span>
                <div className="flex items-center gap-1.5 text-[10.5px] font-mono tracking-wider text-amber-400 font-extrabold bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(255,107,53,0.15)] animate-pulse">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B35] animate-pulse shrink-0" />
                  <span>{String(timeLeft.hours).padStart(2, "0")}h : {String(timeLeft.minutes).padStart(2, "0")}m : {String(timeLeft.seconds).padStart(2, "0")}s</span>
                </div>
              </div>

              {/* 2. Premium Pricing Block */}
              <div className="bg-gradient-to-br from-[#151936] to-[#0A0D1F] border border-white/[0.08] rounded-2xl p-4.5 flex flex-col gap-3.5 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                {/* Visual glow element inside the pricing box */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-[#A78BFA] uppercase font-mono">
                      LIFETIME PASS VALUE
                    </span>
                    <span className="bg-amber-400 text-slate-950 text-[9.5px] font-black px-2.5 py-1 rounded-md font-mono tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                      62% OFF TODAY
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-1">
                    {/* Focus on 7999, styled beautifully and cut */}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider font-mono">Original Price</span>
                      <div className="relative inline-flex items-center">
                        <span className="text-[22px] font-normal text-[#848994] tracking-tight font-sans line-through decoration-1">
                          ₹7,999
                        </span>
                      </div>
                    </div>

                    {/* Simple beautiful arrow connector */}
                    <div className="text-[#A78BFA]/50 text-xl font-black font-sans animate-pulse">→</div>

                    {/* Clean, HUGE, and prominent ₹2,999 deal price */}
                    <div className="flex flex-col items-end text-right">
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest font-mono">Deal Price</span>
                      <span className="text-[2.85rem] font-black text-white tracking-tighter bg-gradient-to-r from-white via-white to-[#FF6B35] bg-clip-text text-transparent font-sans leading-none drop-shadow-[0_2px_10px_rgba(124,58,237,0.25)]">
                        ₹2,999
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

                {/* Easy and simple trust factor guarantee */}
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-gray-300/80 font-medium font-sans">
                  <span className="inline-block text-emerald-400 font-bold">✓</span>
                  <span>Instant access with 100% lifetime guarantee</span>
                </div>
              </div>

              {/* 3. Dynamic CTA Button & Padlock Security (Directly below Pricing) */}
              <div className="flex flex-col gap-2 pt-0.5">
                <CartoonSmashCTA 
                  href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 text-lg shadow-[0_12px_24px_rgba(124,58,237,0.22)] active:scale-[0.98] font-black tracking-normal flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#FF6B35] border-t border-white/20 transition-all duration-300 hover:brightness-110"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5 text-white shrink-0" strokeWidth={2.5} />
                </CartoonSmashCTA>
                
                <div className="flex items-center justify-center gap-1.5 text-[8.5px] font-mono tracking-wider text-gray-500/80 uppercase font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70 shrink-0" strokeWidth={2.5} /> 
                  <span>SECURE 256-BIT SSL CHECKOUT</span>
                </div>
              </div>

              {/* Subtle visual separator line */}
              <div className="h-[1px] bg-white/[0.04] my-0.5"></div>

              {/* 4. Feature Matrix (Highly compact 2-column list with beautiful checkmark ticks) */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A78BFA] font-mono opacity-90">
                  ALL FEATURES INCLUDED
                </span>
                
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-2 mt-0.5">
                  {CHECKOUT_FEATURES.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 min-w-0"
                    >
                      <div className="p-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3.5} />
                      </div>
                      <span className="text-[10.5px] font-medium text-gray-300 truncate leading-none tracking-wide">
                        {feat.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      <Footer />

    </div>

    {/* Sticky Bottom Enrollment Bar for Mobile Only */}
    {isMobile && (
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F19]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_25px_rgba(0,0,0,0.5)] py-3 px-4 select-none md:hidden flex items-center transition-all duration-300 ease-in-out ${
          !isPricingVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ ...themeStyles, height: "72.8px" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 w-full">
          {/* Left Side: Logo and Redesigned Countdown Timer */}
          <div className="flex items-center gap-2.5">
            <CartoonSmashLogo className="w-10 h-10 shrink-0" />
            <div className="text-left flex flex-col gap-0.5">
              <span className="text-[9px] font-normal text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase tracking-wider w-max">Offer Ends In</span>
              <div className="flex items-center gap-1.5 text-[11px] font-mono font-black bg-white/5 border border-white/10 rounded-md px-2 py-0.5 shadow-inner">
                <Clock className="w-3.5 h-3.5 text-[#FF6B35] animate-pulse shrink-0" />
                <span className="text-[#FF6B35]">{String(timeLeft.hours).padStart(2, "0")}h</span>
                <span className="text-white/40">:</span>
                <span className="text-white">{String(timeLeft.minutes).padStart(2, "0")}m</span>
                <span className="text-white/40">:</span>
                <span className="text-white">{String(timeLeft.seconds).padStart(2, "0")}s</span>
              </div>
            </div>
          </div>

          {/* Right Side: Join Now Button (Slightly Larger) */}
          <CartoonSmashCTA 
            href="https://academy.cartoonsmash.in/t/p/checkout/V4/course/6a3cf7247941125d740bf9dd/p1?callback_url=/courses/6a3cf7247941125d740bf9dd" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-black shadow-lg shrink-0 scale-102 hover:scale-105 active:scale-98 transition-all duration-200"
          >
            Join Now <ArrowRight className="w-4 h-4 ml-1" />
          </CartoonSmashCTA>
        </div>
      </div>
    )}

      {/* Premium Interactive Cartoon Smash Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetCheckout}
              className="fixed inset-0 bg-[#070514]/90 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-[#151139] to-[#0D0A24] border-2 border-[#9333EA]/40 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(147,51,234,0.3)] text-center text-white overflow-hidden z-10"
            >
              {/* Corner Yellow Lighting Sparks */}
              <div className="absolute top-4 left-4 text-yellow-400 opacity-60 animate-bounce">⚡</div>
              <div className="absolute bottom-4 right-4 text-yellow-400 opacity-60 animate-bounce delay-100">⚡</div>

              {/* Close Button */}
              <button
                onClick={resetCheckout}
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:rotate-90 bg-white/5 hover:bg-white/15 p-2 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <form onSubmit={handleCheckoutSubmit} className="flex flex-col text-left">
                  {/* Modal Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/60 justify-center">
                    <CartoonSmashLogo className="w-12 h-12" />
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-black font-display tracking-wide text-white">
                        Cartoon <span className="text-[#FF7A00]">Smash</span>
                      </h3>
                      <p className="text-xs text-purple-300 font-medium">Unlock Premium 2D Animation Course</p>
                    </div>
                  </div>

                  {/* Summary Pricing Row */}
                  <div className="bg-[#0F0C2A] rounded-2xl p-4 mb-6 border border-[#25215A] flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400">Total Investment</span>
                      <span className="block text-sm font-semibold text-gray-300">Complete 10-Level Curriculum</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 line-through">₹7,999</span>
                      <span className="block text-2xl font-black text-[#22C55E]">₹2,999</span>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-orange-400" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={checkoutName}
                        onChange={(e) => setCheckoutName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#0B081E] border border-[#25215A] focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#FF7A00]" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={checkoutEmail}
                        onChange={(e) => setCheckoutEmail(e.target.value)}
                        placeholder="e.g. rahul@example.com"
                        className="w-full bg-[#0B081E] border border-[#25215A] focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#FF7A00] font-extrabold text-xs">📞</span> Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={checkoutPhone}
                        onChange={(e) => setCheckoutPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#0B081E] border border-[#25215A] focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none"
                      />
                    </div>

                    {/* Payment Method Picker */}
                    <div>
                      <span className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Select Simulated Payment Method</span>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("upi")}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-bold text-sm transition-all duration-300 ${
                            paymentMethod === "upi"
                              ? "bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]"
                              : "bg-[#0B081E] border-[#25215A] text-gray-400 hover:text-white hover:border-gray-600"
                          }`}
                        >
                          <span className="text-lg">📱</span> UPI (Instant)
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-bold text-sm transition-all duration-300 ${
                            paymentMethod === "card"
                              ? "bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]"
                              : "bg-[#0B081E] border-[#25215A] text-gray-400 hover:text-white hover:border-gray-600"
                          }`}
                        >
                          <CreditCard className="w-4 h-4" /> Card
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pay Action Button */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-full py-4 text-base font-black text-white hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                      style={{ background: "linear-gradient(135deg, #FF7A00 0%, #EC4899 50%, #9333EA 100%)" }}
                    >
                      {isSubmitting ? (
                        <>
                          <RotateCw className="w-5 h-5 animate-spin" /> Simulating Secure Payment...
                        </>
                      ) : (
                        <>
                          🚀 Pay ₹2,999 & Smash Your Skills!
                        </>
                      )}
                      {/* Premium Shimmer Sweep */}
                      <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-25 translate-x-[-150%] group-hover:animate-[shine-sweep_1.5s_infinite] pointer-events-none"></span>
                    </button>
                    <span className="text-[10px] text-gray-400 text-center mt-3 block">
                      🔒 Secured with 256-Bit SSL Encryption. Full Life-Time Access.
                    </span>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center py-6 text-center">
                  {/* Dynamic Googly Eye Checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="w-24 h-24 bg-[#22C55E] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] border-4 border-white mb-6 relative"
                  >
                    {/* Embedded Googly Eyes inside Success checkmark! */}
                    <div className="absolute -top-3 flex gap-1">
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        </div>
                      </div>
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        </div>
                      </div>
                    </div>
                    <span className="text-white text-4xl font-black mt-2">✓</span>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-white uppercase">
                    WELCOME TO THE CREW, <span className="text-[#22C55E]">{checkoutName}!</span>
                  </h3>
                  <p className="mt-4 text-sm text-gray-300 max-w-sm leading-relaxed">
                    Success! Your payment was simulated successfully. Your enrollment in <strong className="text-white">Cartoon Smash Premium Course</strong> is active!
                  </p>
                  <p className="mt-2 text-xs text-purple-300">
                    Access details and asset library download link have been dispatched to: <strong>{checkoutEmail}</strong>
                  </p>

                  <div className="mt-8 w-full">
                    <button
                      type="button"
                      onClick={resetCheckout}
                      className="w-full py-3 px-6 rounded-full font-extrabold text-sm text-white bg-[#22C55E] hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                    >
                      Awesome! Let's Get Smashing!
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* YouTube Video Demo Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-3xl bg-[#0B0F1A] border border-white/[0.1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar with title + X close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0E1322]">
                <h3 className="text-sm sm:text-base font-black text-white tracking-tight uppercase font-mono">
                  {activeVideo.title} — Demo Output
                </h3>
                <button 
                  onClick={() => setActiveVideo(null)} 
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* YouTube iframe (aspect-video) */}
              <div className="aspect-video w-full bg-black relative">
                <iframe
                  src={`${activeVideo.url}?autoplay=1`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Bottom bar */}
              <div className="px-6 py-3.5 bg-[#090C16] border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">
                  Cartoon Smash — Learn to animate like a pro
                </span>
                <span className="text-[10px] font-mono text-purple-400/80 font-semibold">
                  Ashutosh Mishra
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
