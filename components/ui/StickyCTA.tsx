'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~100vh)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-navy/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-area-inset-bottom">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-heading font-black text-white text-sm leading-tight">
                  Sistema Modo Creador
                </p>
                <p className="font-body text-white/50 text-xs">
                  <span className="text-green font-semibold">$29 USD</span>
                  {' · '}
                  <span className="text-orange">47 cupos</span> restantes
                </p>
              </div>
              {/* TODO: reemplazar href="#" con URL de Hotmart/Stripe */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById('precio')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex-shrink-0 bg-orange text-white font-heading font-black text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 hover:bg-orange/90 transition-colors"
              >
                <Zap className="w-4 h-4" />
                ENTRAR
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
