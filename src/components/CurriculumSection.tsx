/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from "react";
import { CURRICULUM_LEVELS } from "../data";
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Sparkles, 
  Film, 
  Play, 
  Library, 
  Tv, 
  Zap,
  Compass,
  Layers,
  Activity,
  Cpu,
  Flame,
  Bot,
  Volume2,
  Gift
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Static top-level helper for rendering level-specific SVGs with keyframe loop animations.
// Extracted out of the component to avoid function re-creation and GC memory pressure.
const renderAnimatedIcon = (level: string, isExpanded: boolean) => {
  // Custom responsive CSS/SVG animations representing lightweight Lottie animations
  // with violet (#7C3AED / #A78BFA) and amber/orange (#FF6B35 / #F59E0B) theme accents.
  switch (level) {
    case "Level 1": // Basic Guides & Roadmap (Animated Compass & Self-Drawing Trail Path)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 shadow-md shadow-orange-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer compass circle */}
            <circle cx="12" cy="12" r="9" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Compass Needle rotating like a real magnetic needle */}
            <motion.g
              animate={{
                rotate: [0, 3, -3, 2, -1, 0.5, 0]
              }}
              whileHover={{
                rotate: [0, 85, -60, 40, -25, 12, -4, 0],
                transition: { duration: 1.8, ease: "easeOut" }
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3,
                duration: 4,
                ease: "easeInOut"
              }}
              style={{ originX: "12px", originY: "12px" }}
            >
              <path d="M12 5L14.5 12L12 11L9.5 12L12 5Z" fill="#FF6B35" />
              <path d="M12 19L9.5 12L12 13L14.5 12L12 19Z" fill="#A78BFA" opacity="0.8" />
            </motion.g>
            {/* Central pivot point */}
            <circle cx="12" cy="12" r="1.5" fill="#FFF" />
          </svg>
        </div>
      );

    case "Level 2": // Animate Fundamentals (Pen Tool drawing a beautiful bezier path)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/25 shadow-md shadow-purple-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bezier wave drawing path */}
            <motion.path
              d="M3 15C8 5, 14 19, 21 9"
              stroke="#A78BFA"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.4, 0.8, 1], ease: "easeInOut" }}
            />
            {/* Animated Pen Tool nib moving along path */}
            <motion.g
              animate={{ 
                x: [0, 8, 14, 18, 0],
                y: [6, -4, 4, -6, 6]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <path d="M3 13.5L5.5 16L3.5 19L1 19L1 16.5L3 13.5Z" fill="#FF6B35" stroke="#FFF" strokeWidth="0.5" />
              <circle cx="3" cy="13.5" r="1" fill="#FFF" />
            </motion.g>
          </svg>
        </div>
      );

    case "Level 3": // Advanced Tools & Techniques (Timeline indicator scrubbing through track ticks)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 shadow-md shadow-orange-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Timeline Track Tickmarks */}
            <line x1="4" y1="16" x2="4" y2="20" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="16" x2="8" y2="18" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12" y2="20" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="16" x2="16" y2="18" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
            <line x1="20" y1="16" x2="20" y2="20" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Video track bar */}
            <rect x="3" y="6" width="18" height="6" rx="1.5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            
            {/* Dynamic playback keyframe markers */}
            <circle cx="6" cy="9" r="1.5" fill="#FF6B35" />
            <circle cx="15" cy="9" r="1.5" fill="#A78BFA" />

            {/* Timeline Playhead / Red Cursor scrubbing */}
            <motion.g
              animate={{ x: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <line x1="4" y1="3" x2="4" y2="21" stroke="#FF6B35" strokeWidth="1.5" />
              <polygon points="2,3 6,3 4,6" fill="#FF6B35" />
            </motion.g>
          </svg>
        </div>
      );

    case "Level 4": // Character Rigging with (AI) (Joint bone hierarchy flexing)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/25 shadow-md shadow-purple-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* IK controller grid / target lines */}
            <line x1="12" y1="2" x2="12" y2="22" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
            
            {/* IK Target Controller (Cursor that moves) */}
            <motion.g
              animate={{
                x: [0, 2, -3, 0],
                y: [0, -4, 2, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              style={{ originX: "12px", originY: "12px" }}
            >
              {/* Dotted target circle */}
              <circle cx="17" cy="8" r="3" stroke="#FF6B35" strokeWidth="1" strokeDasharray="2 1.5" />
              {/* Target crosshair */}
              <line x1="17" y1="4" x2="17" y2="12" stroke="#FF6B35" strokeWidth="0.75" opacity="0.7" />
              <line x1="13" y1="8" x2="21" y2="8" stroke="#FF6B35" strokeWidth="0.75" opacity="0.7" />
            </motion.g>

            {/* Rigged limb mesh skin (Semi-transparent outer shape) */}
            <motion.g
              animate={{ rotate: [0, 15, -25, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ originX: "6px", originY: "18px" }}
            >
              {/* Upper arm skin */}
              <path d="M4 18 C 4 11, 8 9, 13 11 C 13 13, 8 18, 4 18 Z" fill="#7C3AED" fillOpacity="0.1" stroke="#7C3AED" strokeWidth="0.75" strokeDasharray="2 2" />
              
              {/* Forearm skin rotating at elbow joint (13, 11) */}
              <motion.g
                animate={{ rotate: [0, -40, 30, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{ originX: "13px", originY: "11px" }}
              >
                <path d="M13 11 C 13 10, 16 6, 19 8 C 19 11, 15 13, 13 11 Z" fill="#7C3AED" fillOpacity="0.15" stroke="#7C3AED" strokeWidth="0.75" strokeDasharray="2 2" />
              </motion.g>
            </motion.g>

            {/* Rigging Bone Hierarchy */}
            <circle cx="6" cy="18" r="2" fill="#7C3AED" />
            
            {/* Upper arm bone (Shoulder to Elbow) */}
            <motion.g
              animate={{ rotate: [0, 15, -25, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ originX: "6px", originY: "18px" }}
            >
              {/* Bone line */}
              <line x1="6" y1="18" x2="13" y2="11" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
              {/* Bone direction indicator */}
              <polygon points="6,18 11,13 10,15" fill="#C084FC" opacity="0.6" />
              
              {/* Elbow Joint */}
              <circle cx="13" cy="11" r="1.5" fill="#10B981" stroke="#FFF" strokeWidth="0.75" />

              {/* Forearm bone (Elbow to Wrist) */}
              <motion.g
                animate={{ rotate: [0, -40, 30, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{ originX: "13px", originY: "11px" }}
              >
                <line x1="13" y1="11" x2="19" y2="8" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
                {/* Wrist/Hand end joint */}
                <circle cx="19" cy="8" r="2" fill="#FF6B35" stroke="#FFF" strokeWidth="0.75" />
                <circle cx="19" cy="8" r="0.75" fill="#FFF" />
              </motion.g>
            </motion.g>
          </svg>
          <div className="absolute inset-0 bg-purple-500/5 animate-pulse rounded-xl"></div>
        </div>
      );

    case "Level 5": // Advanced Character Animation (A stick character jumping & waving)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 shadow-md shadow-orange-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Floor line */}
            <line x1="2" y1="22" x2="22" y2="22" stroke="#334155" strokeWidth="1.5" />
            
            {/* Whole character jumping up and down */}
            <motion.g
              animate={{ y: [1, -5, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              {/* Head */}
              <circle cx="12" cy="7" r="2.5" fill="#FF6B35" stroke="#FFF" strokeWidth="0.5" />
              {/* Spine/Body */}
              <line x1="12" y1="9.5" x2="12" y2="15.5" stroke="#FFF" strokeWidth="1.5" />
              
              {/* Left Leg */}
              <line x1="12" y1="15.5" x2="9" y2="20" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
              {/* Right Leg (bending with jump) */}
              <motion.line 
                x1="12" y1="15.5" 
                animate={{ x2: [15, 14, 15], y2: [20, 18, 20] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" 
              />

              {/* Left Arm (Resting) */}
              <line x1="12" y1="11" x2="8" y2="14" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Right Arm (Waving back and forth) */}
              <motion.g
                animate={{ rotate: [0, -40, 10, -40, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "11px" }}
              >
                <line x1="12" y1="11" x2="16" y2="8" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
                {/* Small heart/star greeting particle */}
                <circle cx="17.5" cy="6.5" r="1" fill="#FF6B35" />
              </motion.g>
            </motion.g>
          </svg>
        </div>
      );

    case "Level 6": // Background & Props Animation (Parallax layered mountains shifting & campfire flame)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/25 shadow-md shadow-purple-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Back mountain shifting slowly */}
            <motion.polygon
              points="1,19 8,8 14,19"
              fill="#4C1D95"
              opacity="0.5"
              animate={{ x: [-1.5, 1.5, -1.5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />

            {/* Front mountain shifting slightly faster */}
            <motion.polygon
              points="8,19 15,10 22,19"
              fill="#7C3AED"
              opacity="0.8"
              animate={{ x: [1.5, -1.5, 1.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Ground base */}
            <rect x="0" y="18" width="24" height="6" fill="#111827" />

            {/* Animating campfire flame (squashing, stretching, flickering) */}
            <motion.g
              transform="translate(11, 14)"
              animate={{ 
                scaleY: [1, 1.3, 0.85, 1.2, 1],
                scaleX: [1, 0.85, 1.15, 0.9, 1] 
              }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              style={{ originX: "4px", originY: "5px" }}
            >
              {/* Fire flame */}
              <path d="M4 0C6 2.5, 6 4, 4 5C2 4, 2 2.5, 4 0Z" fill="#FF6B35" />
              <path d="M4 1.5C5 3, 5 4, 4 4.5C3 4, 3 3, 4 1.5Z" fill="#F59E0B" />
            </motion.g>

            {/* Campfire logs */}
            <line x1="9" y1="19" x2="15" y2="19" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "Level 7": // Create a Complete 2D Animated Video (Dynamic Movie clapperboard snapping)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 shadow-md shadow-orange-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Clapperboard Body */}
            <rect x="3" y="10" width="18" height="11" rx="1.5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            {/* Clapper board lines decoration */}
            <line x1="6" y1="13" x2="18" y2="13" stroke="#475569" strokeWidth="1.5" />
            <circle cx="12" cy="17" r="1.5" fill="#FF6B35" />
            <polygon points="11,16 14,17 11,18" fill="#FF6B35" />

            {/* Clapper stick hinge */}
            <circle cx="4.5" cy="9.5" r="1" fill="#475569" />

            {/* Animated Snapping Clapper Arm */}
            <motion.g
              animate={{ rotate: [0, -25, 0, -2, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.6, ease: "easeOut" }}
              style={{ originX: "4.5px", originY: "9.5px" }}
            >
              {/* Main stick */}
              <rect x="3" y="7.5" width="18" height="2.5" rx="0.5" fill="#FF6B35" />
              {/* White diagonal stripes */}
              <line x1="7" y1="7.5" x2="9" y2="10" stroke="#FFF" strokeWidth="1" />
              <line x1="12" y1="7.5" x2="14" y2="10" stroke="#FFF" strokeWidth="1" />
              <line x1="17" y1="7.5" x2="19" y2="10" stroke="#FFF" strokeWidth="1" />
            </motion.g>
          </svg>
        </div>
      );

    case "Level 8": // Create Professional Animation with (AI) (AI robot head with swaying antenna and expanding signal waves)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/25 shadow-md shadow-purple-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ears */}
            <rect x="4" y="13" width="2" height="4" rx="1" fill="#7C3AED" />
            <rect x="18" y="13" width="2" height="4" rx="1" fill="#7C3AED" />

            {/* Neck */}
            <rect x="11" y="19" width="2" height="2" fill="#4C1D95" opacity="0.8" />

            {/* AI Robot Head Base (Steady / Kept the same) */}
            <rect x="6" y="11" width="12" height="8" rx="2" stroke="#7C3AED" strokeWidth="1.5" fill="#111827" />

            {/* Blinking Eyes */}
            <motion.circle
              cx="9.5"
              cy="15"
              r="1.25"
              fill="#A78BFA"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 2.5 }}
              style={{ originX: "9.5px", originY: "15px" }}
            />
            <motion.circle
              cx="14.5"
              cy="15"
              r="1.25"
              fill="#A78BFA"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 2.5 }}
              style={{ originX: "14.5px", originY: "15px" }}
            />

            {/* Mouth line */}
            <path d="M10 17.5 H14" stroke="#7C3AED" strokeWidth="1" strokeLinecap="round" />

            {/* Swaying Antenna & Expanding Signal Waves */}
            <motion.g
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{ originX: "12px", originY: "11px" }}
            >
              {/* Antenna Shaft */}
              <line x1="12" y1="11" x2="12" y2="6.5" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />

              {/* Glowing Tip */}
              <circle cx="12" cy="5.5" r="1.5" fill="#FF6B35" />

              {/* Signal Waves coming out of the antenna */}
              <motion.path
                d="M10 3.5 C 10.8 2.5, 13.2 2.5, 14 3.5"
                stroke="#FF6B35"
                strokeWidth="1"
                strokeLinecap="round"
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.4, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                style={{ originX: "12px", originY: "5.5px" }}
              />
              <motion.path
                d="M8 1.5 C 9.5 0, 14.5 0, 16 1.5"
                stroke="#A78BFA"
                strokeWidth="1"
                strokeLinecap="round"
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.4, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.6 }}
                style={{ originX: "12px", originY: "5.5px" }}
              />
            </motion.g>
          </svg>
        </div>
      );

    case "Level 9": // Audio & Video Editing Masterclass (Bouncing audio levels + visual frequency bars)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 shadow-md shadow-orange-500/5 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sound waves container */}
            <g transform="translate(2, 4)">
              {/* Bar 1 */}
              <motion.rect
                x="1"
                y="2"
                width="2.2"
                height="12"
                rx="1"
                fill="#FF6B35"
                animate={{ height: [4, 13, 6, 11, 4] }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
              />
              {/* Bar 2 */}
              <motion.rect
                x="5"
                y="2"
                width="2.2"
                height="12"
                rx="1"
                fill="#A78BFA"
                animate={{ height: [8, 4, 15, 6, 8] }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
              />
              {/* Bar 3 (Center High Bar) */}
              <motion.rect
                x="9"
                y="2"
                width="2.2"
                height="12"
                rx="1"
                fill="#FF6B35"
                animate={{ height: [14, 6, 12, 16, 14] }}
                transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
              />
              {/* Bar 4 */}
              <motion.rect
                x="13"
                y="2"
                width="2.2"
                height="12"
                rx="1"
                fill="#A78BFA"
                animate={{ height: [6, 12, 4, 10, 6] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              />
              {/* Bar 5 */}
              <motion.rect
                x="17"
                y="2"
                width="2.2"
                height="12"
                rx="1"
                fill="#FF6B35"
                animate={{ height: [10, 5, 11, 4, 10] }}
                transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
              />
            </g>
          </svg>
        </div>
      );

    case "Level 10": // 50GB+ Premium Assets Library (Futuristic glowing gift vault box opening)
      return (
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED]/20 to-[#FF6B35]/20 border border-[#7C3AED]/35 shadow-lg shadow-purple-500/10 overflow-hidden shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ambient sparkles behind box */}
            <motion.g
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path d="M12 2L13 5H10L12 2Z" fill="#FFF" />
              <path d="M5 12L8 13V10L5 12Z" fill="#FF6B35" />
              <path d="M19 12L16 11V14L19 12Z" fill="#A78BFA" />
            </motion.g>

            {/* Animated Box Lid opening/floating */}
            <motion.g
              animate={{ 
                y: [0, -3.5, 0],
                rotate: [0, -4, 4, 0]
              }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              {/* Lid top plate */}
              <rect x="4" y="6" width="16" height="3" rx="0.5" fill="#7C3AED" stroke="#FFF" strokeWidth="0.5" />
              {/* Lid Ribbon Knot */}
              <path d="M12 6C11 4, 10 3, 12 3C14 3, 13 4, 12 6Z" fill="#FF6B35" stroke="#FFF" strokeWidth="0.5" />
            </motion.g>

            {/* Box Base (pulsing with assets container vibe) */}
            <rect x="5" y="10" width="14" height="9" rx="1" fill="#1E293B" stroke="#A78BFA" strokeWidth="1.5" />
            {/* Ribbon going around base */}
            <rect x="11" y="10" width="2" height="9" fill="#FF6B35" />
            
            {/* Keyhole/Lock decoration */}
            <circle cx="12" cy="14.5" r="1.5" fill="#FFF" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-amber-500/10 animate-pulse"></div>
        </div>
      );

    default:
      return null;
  }
};

// Memoized CurriculumLevelItem component to isolate each curriculum block and avoid re-renders.
const CurriculumLevelItem = React.memo(({
  levelData,
  isExpanded,
  onToggle
}: {
  levelData: typeof CURRICULUM_LEVELS[0];
  isExpanded: boolean;
  onToggle: (level: string) => void;
}) => {
  return (
    <div
      id={`curriculum-level-${levelData.level}`}
      className="group transition-colors duration-200"
    >
      {/* Collapsed Header item */}
      <button
        onClick={() => onToggle(levelData.level)}
        className="w-full p-3 sm:p-5 md:p-6 flex items-center justify-between text-left gap-2 sm:gap-4 hover:bg-[#7C3AED]/5 transition-colors duration-200"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Badge indicator */}
          <div className={`text-[8px] sm:text-[10px] md:text-xs uppercase font-extrabold tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg shrink-0 border transition-all duration-300 ${
            isExpanded 
              ? "bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/40 shadow-[0_0_10px_rgba(124,58,237,0.15)]" 
              : "bg-[#1E293B]/50 text-gray-400 border-[#1E293B] group-hover:bg-[#1E293B] group-hover:text-gray-200"
          }`}>
            {levelData.level}
          </div>

          {/* Dynamic Animated Icon based on Level (Scaled down on mobile) */}
          <div className="scale-[0.8] sm:scale-100 origin-center shrink-0 -mx-1.5 sm:mx-0">
            {renderAnimatedIcon(levelData.level, isExpanded)}
          </div>

          <span className={`text-xs sm:text-sm md:text-base font-bold tracking-wide transition-all duration-200 ${
            isExpanded ? "text-[#A78BFA]" : "text-gray-200 group-hover:text-white"
          }`}>
            {levelData.title.replace(/^(Level \d+|Before Starting the Course|Bonus):\s*/, "")}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {levelData.duration && (
            <span className="hidden sm:inline-block text-[9px] px-2 py-0.5 bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/20 rounded-md font-extrabold font-mono uppercase">
              {levelData.duration}
            </span>
          )}
          <div className={`p-1 rounded-md transition-colors ${
            isExpanded ? "text-[#A78BFA]" : "text-gray-500 group-hover:text-white"
          }`}>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded Body item */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-[#0A0E1A]/60"
          >
            <div className="px-3 pb-3.5 pt-1.5 sm:px-6 sm:pb-6 sm:pt-2 border-t border-[#1E293B]/40">
              {/* Inner Section Header block as shown in mockup */}
              {levelData.description ? (
                <div className="mb-3 sm:mb-5 mt-1 sm:mt-2">
                  <span className="text-[9px] sm:text-[10px] font-black text-purple-400 tracking-widest uppercase font-mono">
                    {levelData.level === "Level 10" ? "EXCLUSIVE BONUS" : `MODULE ${levelData.level.replace(/\D/g, "")}`}
                  </span>
                  <h4 className="text-base sm:text-xl font-extrabold text-white mt-0.5 sm:mt-1">
                    {levelData.subtitle || levelData.title}
                  </h4>
                  <p className="mt-1.5 text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed font-sans max-w-3xl">
                    {levelData.description}
                  </p>
                </div>
              ) : null}

              <div className="mt-2.5 sm:mt-4 border border-[#1E293B]/60 bg-[#111827]/30 rounded-xl sm:rounded-2xl overflow-hidden p-1 sm:p-1.5">
                <div className="divide-y divide-[#1E293B]/30">
                  {levelData.lessons.map((lesson, lessonIdx) => (
                    <div 
                      key={lessonIdx} 
                      className="flex items-center justify-between py-2 sm:py-3.5 px-2.5 sm:px-4 hover:bg-[#1E293B]/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 sm:gap-3.5">
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg flex items-center justify-center shrink-0 shadow-sm border transition-colors ${
                          lesson.isHeader 
                            ? "bg-amber-500/10 text-amber-400 border-amber-500/20" 
                            : lesson.isCheck 
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                            : "bg-[#7C3AED]/10 text-[#A78BFA] border-[#7C3AED]/20"
                        }`}>
                          {lesson.isCheck ? (
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          ) : lesson.isHeader ? (
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                          ) : (
                            <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                          )}
                        </div>
                        <span className={`text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide ${
                          lesson.isHeader 
                            ? "text-amber-300 font-extrabold uppercase tracking-widest" 
                            : "text-gray-200"
                        }`}>
                          {lesson.title}
                        </span>
                      </div>

                      {lesson.isCheck ? (
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#7C3AED]/10 text-[#A78BFA] p-1.5 sm:px-3 sm:py-1 rounded-full border border-[#7C3AED]/25 shadow-md shadow-purple-500/5 relative overflow-hidden shrink-0 group">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-amber-500/10 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10 text-[#A78BFA]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path 
                              d="M4 18H20" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              strokeLinecap="round"
                              animate={{ stroke: ["#A78BFA", "#FF6B35", "#A78BFA"] }}
                              transition={{ repeat: Infinity, duration: 3 }}
                            />
                            <motion.g
                              animate={{ 
                                y: [-3, 2, -3]
                              }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                              <path d="M12 3V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                              <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.g>
                          </svg>
                          <span className="hidden sm:inline-block text-[10px] font-black font-mono tracking-widest relative z-10 text-gray-200">
                            DOWNLOAD
                          </span>
                        </div>
                      ) : (
                        <span className={`text-[9px] sm:text-[10px] md:text-xs font-bold font-mono tracking-wider ${
                          lesson.isHeader 
                            ? "text-amber-400/80 bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10" 
                            : "text-gray-500"
                        }`}>
                          {lesson.duration || "VIDEO"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

CurriculumLevelItem.displayName = "CurriculumLevelItem";

export default function CurriculumSection() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const toggleLevel = useCallback((level: string) => {
    setExpandedLevel((prev) => (prev === level ? null : level));
  }, []);

  return (
    <section id="curriculum" className="py-10 md:py-24 bg-[#0c0f20] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111933] via-[#0c0f20] to-[#050711] border-t border-b border-[#1E293B] relative overflow-hidden">
      {/* Standardized low-opacity radial gradient overlay for consistent depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/[0.04] via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '22s' }}></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none animate-pulse" style={{ animationDuration: '26s' }}></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        {/* Elegant accordion frame as shown in screenshots */}
        <div className="w-full bg-[#0E1322]/80 border border-[#1E293B] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Main header block inside the card */}
          <div className="p-3.5 sm:p-5 md:p-6 bg-[#161F30]/40 border-b border-[#1E293B] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-[#A78BFA] uppercase tracking-widest font-mono">
                Syllabus
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-0.5 sm:mt-1 tracking-tight">
                Full Course Overview
              </h3>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold text-gray-400 font-mono">
              <span className="flex items-center gap-1 sm:gap-1.5 bg-[#1F2937]/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#374151]/30">
                <Tv className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-purple-400" /> 10 Modules
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5 bg-[#1F2937]/50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#374151]/30">
                <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" /> 50+ Chapters & Items
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#1E293B]/60">
            {CURRICULUM_LEVELS.map((levelData, idx) => {
              return (
                <CurriculumLevelItem
                  key={levelData.level}
                  levelData={levelData}
                  isExpanded={expandedLevel === levelData.level}
                  onToggle={toggleLevel}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
