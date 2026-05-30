export default function Footer() {
  return (
    <footer className="py-10 text-center" style={{ background: 'var(--navy-700)' }}>
      <div className="container-base max-w-[1200px]">
        <p className="font-body" style={{ color: 'var(--gray-400)', fontSize: '14px' }}>
          © 2026 byjose.ai — Sistema Modo Creador.
        </p>
        <p className="font-body mt-2" style={{ color: 'var(--gray-400)', fontSize: '13px' }}>
          <a href="#" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--gray-400)' }}>
            Términos y condiciones
          </a>
          {' · '}
          <a href="#" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--gray-400)' }}>
            Política de privacidad
          </a>
          {' · '}
          <a href="mailto:hola@byjose.ai" className="hover:text-white transition-colors duration-200" style={{ color: 'var(--gray-400)' }}>
            Soporte: hola@byjose.ai
          </a>
        </p>
      </div>
    </footer>
  )
}
