'use client'

import { motion } from 'framer-motion'

interface SectionTransitionOverlayProps {
  isTransitioning: boolean
}

export default function SectionTransitionOverlay({
  isTransitioning,
}: SectionTransitionOverlayProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{
        mixBlendMode: 'normal',
        display: isTransitioning ? 'block' : 'none',
      }}
    >
      {/* Orange foreground curtain pane */}
      <motion.div
        initial={{ skewX: -15, x: '-200%' }}
        animate={{
          x: isTransitioning ? '200%' : '-200%',
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier matching premium transitions
        }}
        className="absolute inset-0 bg-[#FF6B35]"
        style={{
          width: '150%',
          transformOrigin: 'left bottom',
        }}
      />

      {/* Navy background curtain pane */}
      <motion.div
        initial={{ skewX: -15, x: '-200%' }}
        animate={{
          x: isTransitioning ? '200%' : '-200%',
        }}
        transition={{
          duration: 0.85,
          delay: 0.08, // Subtle stagger for layered depth
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-0 bg-[#0A1628]"
        style={{
          width: '150%',
          transformOrigin: 'left bottom',
          borderRight: '2px solid rgba(255, 107, 53, 0.3)',
          boxShadow: '20px 0 80px rgba(0, 0, 0, 0.6)',
        }}
      />
    </div>
  )
}
