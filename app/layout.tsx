import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import MetaPixel from '@/components/analytics/meta-pixel'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sistema Modo Creador — Construye contenido premium con IA | byjose.ai',
  description:
    'El sistema que convierte tu contenido en premium con IA y a ti, en el creador que las marcas quieren pagar. Acceso $29 USD.',
  keywords: [
    'UGC con IA',
    'Sistema Modo Creador',
    'byjose.ai',
    'creadores de contenido',
    'contenido premium IA',
    'colaboraciones marcas',
  ],
  authors: [{ name: 'José Díaz', url: 'https://byjoseai.com' }],
  metadataBase: new URL('https://byjoseai.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://byjoseai.com',
    siteName: 'byjose.ai',
    title: 'Sistema Modo Creador — Construye contenido premium con IA',
    description:
      'El sistema que convierte tu contenido en premium con IA y a ti, en el creador que las marcas quieren pagar. Acceso $29 USD.',
    // TODO: agregar OG image → images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema Modo Creador — byjose.ai',
    description: 'Contenido premium con IA. Primera colaboración en 30 días.',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔥</text></svg>",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="noise-overlay antialiased">
        {children}
        <Analytics />
        <MetaPixel />
      </body>
    </html>
  )
}
