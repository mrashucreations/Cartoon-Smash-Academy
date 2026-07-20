import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import video files directly from assets
import kidsCartoonVideo from "../../assets/Website Gif Kids Cartoon.mp4";
import movieSpoofVideo from "../../assets/Website Gif Movie Spoof.mp4";
import notYourTypeVideo from "../../assets/Website Gif Not Your Type Cartoon.mp4";
import horrorStoriesVideo from "../../assets/Website Gif Horror Stories.mp4";
import storyAnimationVideo from "../../assets/Website Gif Story Animation.mp4";

interface VideoCarouselProps {
  isInteractive?: boolean;
  onCardClick: (card: { title: string; youtubeUrl: string }) => void;
}

const CAROUSEL_ITEMS = [
  {
    title: "Movie Spoof",
    videoUrl: movieSpoofVideo,
    fallbackUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/LLBHPv4Wj1w"
  },
  {
    title: "Not Your Type Cartoon",
    videoUrl: notYourTypeVideo,
    fallbackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/LLBHPv4Wj1w"
  },
  {
    title: "Horror Stories",
    videoUrl: horrorStoriesVideo,
    fallbackUrl: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=600&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/LLBHPv4Wj1w"
  },
  {
    title: "Kids Cartoon",
    videoUrl: kidsCartoonVideo,
    fallbackUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/LLBHPv4Wj1w"
  },
  {
    title: "Story Animation",
    videoUrl: storyAnimationVideo,
    fallbackUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/LLBHPv4Wj1w"
  }
];

// Pure static helper to get card styles based on screen width (isMobile) and offset from center (diff).
// Extracted outside the component to prevent recreating the style map function on every render.
const getStyles = (diff: number, isMobile: boolean) => {
  if (isMobile) {
    switch (diff) {
      case 0:
        return {
          transform: "translate(-50%, -50%) scale(1.18)",
          zIndex: 30,
          opacity: 1,
          filter: "blur(0px)",
          pointerEvents: "auto" as const,
        };
      case 1:
        return {
          transform: "translate(calc(-50% + 54%), -50%) scale(0.70)",
          zIndex: 20,
          opacity: 0.4,
          filter: "blur(1px)",
          pointerEvents: "auto" as const,
        };
      case -1:
        return {
          transform: "translate(calc(-50% - 54%), -50%) scale(0.70)",
          zIndex: 20,
          opacity: 0.4,
          filter: "blur(1px)",
          pointerEvents: "auto" as const,
        };
      case 2:
      case -2:
      default:
        return {
          transform: "translate(-50%, -50%) scale(0.35)",
          zIndex: 0,
          opacity: 0,
          filter: "blur(4px)",
          pointerEvents: "none" as const,
        };
    }
  }

  // Math checks for wrapping offset around center ([-2, -1, 0, 1, 2])
  switch (diff) {
    case 0:
      return {
        transform: "translate(-50%, -50%) scale(1.45)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
        pointerEvents: "auto" as const,
      };
    case 1:
      return {
        transform: "translate(calc(-50% + 94%), -50%) scale(0.78)",
        zIndex: 20,
        opacity: 0.5,
        filter: "blur(1.5px)",
        pointerEvents: "auto" as const,
      };
    case -1:
      return {
        transform: "translate(calc(-50% - 94%), -50%) scale(0.78)",
        zIndex: 20,
        opacity: 0.5,
        filter: "blur(1.5px)",
        pointerEvents: "auto" as const,
      };
    case 2:
      return {
        transform: "translate(calc(-50% + 172%), -50%) scale(0.55)",
        zIndex: 10,
        opacity: 0.15,
        filter: "blur(3px)",
        pointerEvents: "none" as const,
      };
    case -2:
      return {
        transform: "translate(calc(-50% - 172%), -50%) scale(0.55)",
        zIndex: 10,
        opacity: 0.15,
        filter: "blur(3px)",
        pointerEvents: "none" as const,
      };
    default:
      return {
        transform: "translate(-50%, -50%) scale(0.4)",
        zIndex: 0,
        opacity: 0,
        filter: "blur(6px)",
        pointerEvents: "none" as const,
      };
  }
};

export default function VideoCarousel({ isInteractive = false, onCardClick }: VideoCarouselProps) {
  const [centerIndex, setCenterIndex] = useState(2); // Start with Horror Stories centered
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide effect every 5.5 seconds unless paused (on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  return (
    <div 
      className="w-full flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Interactive Carousel Frame */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[330px] lg:h-[370px] xl:h-[410px] flex items-center justify-center overflow-visible my-1">
        {/* Carousel Tracks */}
        <div className="relative w-full h-full max-w-7xl mx-auto overflow-visible flex items-center justify-center">
          {CAROUSEL_ITEMS.map((card, idx) => {
            let diff = idx - centerIndex;
            if (diff < -2) diff += CAROUSEL_ITEMS.length;
            if (diff > 2) diff -= CAROUSEL_ITEMS.length;

            const isCentered = diff === 0;

            return (
              <motion.div
                key={idx}
                animate={getStyles(diff, isMobile)}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 18,
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                }}
                onClick={() => {
                  if (!isCentered) {
                    setCenterIndex(idx);
                  }
                }}
                className="w-[70%] sm:w-[54%] md:w-[44%] lg:w-[36%] xl:w-[31%] cursor-pointer"
              >
                {/* Visual Card body with modern lighting and borders */}
                <div className={`relative w-full bg-[#0B0F1A] border ${
                  isCentered 
                    ? "border-[#A78BFA] shadow-[0_0_35px_rgba(139,92,246,0.25)]" 
                    : "border-white/[0.08] hover:border-white/20"
                } rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group`}>
                  
                  {/* Video/Preview Display Container with strict 16:9 aspect ratio */}
                  <div className="relative w-full aspect-video bg-[#050814] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#12182F] to-[#080B16] z-0" />
                    
                    {isInteractive ? (
                      card.videoUrl ? (
                        <video
                          src={card.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controlsList="nodownload noremoteplayback"
                          disablePictureInPicture
                          disableRemotePlayback
                          className="absolute inset-0 w-full h-full object-cover z-10 select-none pointer-events-none"
                        />
                      ) : (
                        <img
                          src={card.fallbackUrl}
                          alt={card.title}
                          draggable={false}
                          className="absolute inset-0 w-full h-full object-cover z-10 select-none pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                      )
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#12182F] to-[#080B16] flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin opacity-50" />
                      </div>
                    )}
                  </div>

                  {/* Title & Loop/Demo status footer */}
                  <div className={`p-2 sm:p-3 border-t ${
                    isCentered ? "border-purple-500/20 bg-[#0E0B1F]" : "border-white/[0.04] bg-[#090C1A]"
                  } flex items-center justify-between transition-colors duration-300`}>
                    <div className="flex items-center gap-1 sm:gap-2 truncate">
                      {isCentered && (
                        <div className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                      )}
                      <span className="text-[10px] sm:text-xs font-bold text-gray-200 group-hover:text-white transition-colors duration-200 truncate">
                        {card.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[8px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-purple-400 shrink-0">
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">DEMO CLIP</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Arrows (placed outer edges) */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-1 sm:left-4 z-40 p-2 sm:p-3 rounded-full bg-[#0E1324]/75 hover:bg-[#161D36] border border-white/10 hover:border-purple-500/30 text-white/70 hover:text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-1 sm:right-4 z-40 p-2 sm:p-3 rounded-full bg-[#0E1324]/75 hover:bg-[#161D36] border border-white/10 hover:border-purple-500/30 text-white/70 hover:text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide Pagination Bullets */}
      <div className="flex items-center gap-2 mt-4 mb-0">
        {CAROUSEL_ITEMS.map((_, idx) => {
          const isActive = idx === centerIndex;
          return (
            <button
              key={idx}
              onClick={() => setCenterIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                isActive 
                  ? "w-7 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
                  : "w-2 bg-white/20 hover:bg-white/45"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
