'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollTo } = useLenis()

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'StickyCTA' })
    scrollTo('#precio')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4"
          style={{
            background: 'rgba(10,22,40,0.95)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,107,53,0.3)',
          }}
        >
          {/* TODO: conectar Hotmart/Stripe — reemplazar onClick con redirect a checkout real */}
          <button
            onClick={handleCTAClick}
            className="btn-cta w-full text-center"
            style={{ fontSize: '16px' }}
          >
            Activar Modo Creador — $29
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
