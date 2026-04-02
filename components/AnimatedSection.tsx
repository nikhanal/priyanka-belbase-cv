'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: directionOffset[direction].y,
        x: directionOffset[direction].x
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children one by one
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger item - use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated progress bar that fills on scroll
interface AnimatedProgressProps {
  value: number;
  className?: string;
  barClassName?: string;
}

export function AnimatedProgress({ 
  value, 
  className = '',
  barClassName = ''
}: AnimatedProgressProps) {
  return (
    <div className={`h-2 bg-muted rounded-full overflow-hidden ${className}`}>
      <motion.div
        className={`h-full bg-accent rounded-full ${barClassName}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

// Typewriter effect for text
interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export function Typewriter({ text, className = '', delay = 0 }: TypewriterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 1 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.03,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Counter animation for numbers
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  className = '',
  duration = 2
}: AnimatedCounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <CountUp value={value} duration={duration} />
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// Helper component for counting up
function CountUp({ value, duration }: { value: number; duration: number }) {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={(entry) => {
          if (entry?.target) {
            let start = 0;
            const end = value;
            const incrementTime = (duration * 1000) / end;
            const timer = setInterval(() => {
              start += 1;
              if (entry.target) {
                (entry.target as HTMLElement).textContent = String(start);
              }
              if (start >= end) clearInterval(timer);
            }, incrementTime);
          }
        }}
      >
        0
      </motion.span>
    </motion.span>
  );
}
