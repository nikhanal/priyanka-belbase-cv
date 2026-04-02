'use client';

import { motion } from 'framer-motion';

interface TopographicBackgroundProps {
  className?: string;
  variant?: 'hero' | 'section';
  animated?: boolean;
}

export default function TopographicBackground({ 
  className = '', 
  variant = 'section',
  animated = true 
}: TopographicBackgroundProps) {
  const isHero = variant === 'hero';
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient overlay */}
      <div 
        className={`absolute inset-0 ${
          isHero 
            ? 'bg-gradient-to-br from-[var(--topo-gradient-start)] via-background to-[var(--topo-gradient-end)]' 
            : 'bg-gradient-to-b from-transparent via-background/50 to-background'
        }`}
      />
      
      {/* SVG Topographic Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for contour lines */}
          <linearGradient id="topoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--topo-line-1)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--topo-line-2)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--topo-line-3)" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Pattern for subtle texture */}
          <pattern id="topoPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="var(--topo-line-2)" opacity="0.1" />
          </pattern>
        </defs>
        
        {/* Background pattern */}
        <rect width="100%" height="100%" fill="url(#topoPattern)" />
        
        {/* Contour lines - organic curves representing elevation */}
        <g fill="none" strokeWidth="0.8">
          {/* Outer contours */}
          <motion.path
            d="M-100,200 Q150,100 300,180 T600,150 T900,200 T1100,180"
            stroke="var(--topo-line-1)"
            strokeOpacity="0.25"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <motion.path
            d="M-50,280 Q180,180 350,260 T650,230 T950,280 T1150,260"
            stroke="var(--topo-line-1)"
            strokeOpacity="0.22"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.2, ease: "easeOut" }}
          />
          
          {/* Middle contours */}
          <motion.path
            d="M-80,400 Q200,300 400,380 T700,350 T1000,400 T1150,380"
            stroke="var(--topo-line-2)"
            strokeOpacity="0.20"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, delay: 0.4, ease: "easeOut" }}
          />
          <motion.path
            d="M-30,480 Q230,380 430,460 T730,430 T1030,480 T1180,460"
            stroke="var(--topo-line-2)"
            strokeOpacity="0.18"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, delay: 0.6, ease: "easeOut" }}
          />
          
          {/* Center peak contours - tighter curves */}
          <motion.path
            d="M200,550 Q350,480 500,540 T750,510 T900,550"
            stroke="var(--topo-line-2)"
            strokeOpacity="0.22"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
          />
          <motion.path
            d="M280,600 Q400,550 520,590 T700,570 T820,600"
            stroke="var(--topo-line-3)"
            strokeOpacity="0.25"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 1, ease: "easeOut" }}
          />
          <motion.path
            d="M350,640 Q450,600 550,635 T680,620 T750,640"
            stroke="var(--topo-line-3)"
            strokeOpacity="0.28"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
          />
          
          {/* Lower contours */}
          <motion.path
            d="M-60,700 Q180,620 380,700 T680,670 T980,700 T1120,680"
            stroke="var(--topo-line-2)"
            strokeOpacity="0.18"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.8, delay: 1.4, ease: "easeOut" }}
          />
          <motion.path
            d="M-40,780 Q200,700 400,780 T700,750 T1000,780 T1140,760"
            stroke="var(--topo-line-1)"
            strokeOpacity="0.20"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.6, ease: "easeOut" }}
          />
          <motion.path
            d="M-80,860 Q220,780 420,860 T720,830 T1020,860 T1160,840"
            stroke="var(--topo-line-1)"
            strokeOpacity="0.22"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.8, ease: "easeOut" }}
          />
          
          {/* Secondary peak - right side */}
          <motion.path
            d="M700,300 Q800,250 880,290 T1000,270"
            stroke="var(--topo-line-3)"
            strokeOpacity="0.20"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M750,350 Q830,310 900,345 T980,330"
            stroke="var(--topo-line-3)"
            strokeOpacity="0.22"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 2.2, ease: "easeOut" }}
          />
          
          {/* Depression contours - left side */}
          <motion.path
            d="M50,450 Q120,500 200,460 T320,490"
            stroke="var(--topo-line-2)"
            strokeOpacity="0.15"
            strokeDasharray="8 4"
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.4, ease: "easeOut" }}
          />
        </g>
        
        {/* Coordinate markers - subtle grid references */}
        {isHero && (
          <g fill="var(--topo-line-2)" opacity="0.15" fontSize="10" fontFamily="monospace">
            <text x="50" y="50">25°47'N</text>
            <text x="900" y="50">80°13'W</text>
            <text x="50" y="950">Miami</text>
          </g>
        )}
      </svg>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
