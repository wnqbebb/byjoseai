'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer 
      className="py-10 text-center w-full border-t border-white/[0.08] select-none" 
      style={{ backgroundColor: '#101820' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container-base max-w-[1200px] w-full px-5 lg:px-8 flex flex-col items-center justify-center select-none"
      >
        
        {/* Línea 1 — Copyright */}
        <p 
          className="font-body font-normal text-[14px] leading-normal select-none"
          style={{ color: '#a89f94' }}
        >
          © 2026 byjose.ai — Sistema Modo Creador.
        </p>
        
        {/* Línea 2 — Legal & Support Links */}
        <p 
          className="font-body font-normal text-[13px] leading-relaxed mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 select-none"
          style={{ color: '#a89f94' }}
        >
          <a 
            href="#" 
            className="hover:text-white transition-colors duration-200 select-none cursor-pointer"
            style={{ color: '#a89f94' }}
          >
            Términos y condiciones
          </a>
          <span className="select-none text-[#a89f94]/50">·</span>
          <a 
            href="#" 
            className="hover:text-white transition-colors duration-200 select-none cursor-pointer"
            style={{ color: '#a89f94' }}
          >
            Política de privacidad
          </a>
          <span className="select-none text-[#a89f94]/50">·</span>
          <a 
            href="mailto:hola@byjose.ai" 
            className="hover:text-white transition-colors duration-200 select-none cursor-pointer"
            style={{ color: '#a89f94' }}
          >
            Soporte: hola@byjose.ai
          </a>
        </p>

      </motion.div>
    </footer>
  )
}
