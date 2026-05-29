'use client'

import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          {/* TODO: PENDIENTE — reemplazar texto con logo SVG/PNG oficial de byjose.ai */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-2xl text-white">
              byjose<span className="text-yellow">.ai</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-white/40 text-sm font-body">
            <a
              href="/paso-paso-clon"
              className="hover:text-white/70 transition-colors"
            >
              Guía Gratis
            </a>
            {/* TODO: agregar link a política de privacidad */}
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacidad
            </a>
            {/* TODO: agregar link a términos */}
            <a href="#" className="hover:text-white/70 transition-colors">
              Términos
            </a>
          </nav>

          {/* Social */}
          <a
            href="https://www.instagram.com/byjose.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm font-body"
          >
            <Instagram className="w-4 h-4" />
            @byjose.ai
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
          <p className="font-body text-white/25 text-xs">
            © 2026 byjose.ai — Todos los derechos reservados.
          </p>
          <p className="font-body text-white/20 text-xs mt-1">
            Los resultados individuales pueden variar. El sistema requiere
            aplicación consistente.
          </p>
        </div>
      </div>
    </footer>
  )
}
