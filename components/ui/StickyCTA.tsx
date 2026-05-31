'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollTo } = useLenis()

  // Track window scroll coordinates to toggle visibility past 800px on mobile
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Dispara Pixel Lead
    trackPixelEvent('Lead', { cta_location: 'StickyCTA' })
    // TODO: conectar Hotmart/Stripe — reemplazar con enlace de checkout directo si aplica
    scrollTo('#precio')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 select-none"
          style={{
            background: 'rgba(245, 241, 234, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(168, 159, 148, 0.22)',
            boxShadow: '0 -8px 24px rgba(16, 24, 32, 0.06)',
          }}
        >
          {/* Mobile direct CTA button */}
          <button
            onClick={handleCTAClick}
            className="w-full text-center font-body font-bold uppercase py-4 rounded-[16px] bg-[#006b5b] text-white active:bg-[#004d3f] active:scale-[0.98] text-[16px] tracking-wide transition-all duration-150 ease-out border border-transparent select-none cursor-pointer"
          >
            Activar Modo Creador — $29
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
