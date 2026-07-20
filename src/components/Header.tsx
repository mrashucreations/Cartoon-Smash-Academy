import React from "react";
import { LogIn } from "lucide-react";
import logoSrc from "../../assets/Cartoon Smash Logo.png";

export default function Header() {
  const handleLoginClick = () => {
    const width = 500;
    const height = 650;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    window.open(
      "https://academy.cartoonsmash.in/t/public/login",
      "graphyLogin",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <header className="relative z-40 w-full bg-[#0c0f20]/80 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Branding */}
        <a href="#" className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative">
            <img
              src={logoSrc}
              alt="Cartoon Smash Logo"
              className="w-8 h-8 sm:w-9.5 sm:h-9.5 object-contain rounded-full border border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-ping pointer-events-none duration-1000 opacity-20"></div>
          </div>
          <div className="flex flex-col text-left justify-center">
            <span className="hidden sm:inline-block text-xs sm:text-sm font-bold tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300 font-sans leading-none mb-1">
              Cartoon Smash
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-gray-500 group-hover:text-purple-400/80 transition-colors duration-300 font-bold uppercase leading-none">
              Academy
            </span>
          </div>
        </a>

        {/* Right Side: Login Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLoginClick}
            className="relative group overflow-hidden px-5 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] flex items-center gap-2.5 cursor-pointer active:scale-95"
          >
            {/* Ambient top light beam */}
            <span className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Pulsing indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            
            <span className="tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300 font-sans">
              Student Login
            </span>
            
            <LogIn className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
