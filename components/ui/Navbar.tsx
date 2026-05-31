'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLenis } from '@/lib/lenis-provider'

const navLinks = [
  { label: 'El sistema', href: '#producto' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Precio', href: '#precio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { transitionTo } = useLenis()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    transitionTo(href)
    setMobileOpen(false)
  }


  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(245,241,234,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(168,159,148,0.2)' : 'none',
          padding: scrolled ? '12px 0' : '20px 0',
        }}
      >
        <div className="container-base flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-heading font-bold text-navy-700"
            style={{ fontSize: '20px' }}
          >
            byjose<span style={{ color: '#006b5b' }}>.ai</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body transition-colors duration-200"
                style={{ color: 'rgba(16,24,32,0.6)', fontSize: '14px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--navy-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(16,24,32,0.6)')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#precio')}
              className="hidden md:block btn-cta"
              style={{ padding: '10px 20px', fontSize: '14px', borderRadius: '50px' }}
            >
              Entrar →
            </button>

            <button
              className="md:hidden"
              style={{ color: 'rgba(16,24,32,0.7)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-[56px] left-0 right-0 z-40 py-6 px-5"
          style={{
            background: 'rgba(245,241,234,0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(168,159,148,0.2)',
          }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-left py-2"
                style={{
                  color: 'var(--navy-700)',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(168,159,148,0.15)',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#precio')}
              className="btn-cta w-full mt-2"
              style={{ textAlign: 'center' }}
            >
              Entrar al sistema →
            </button>
          </nav>
        </motion.div>
      )}
    </>
  )
}
