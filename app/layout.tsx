import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sistema Modo Creador — byjose.ai',
  description:
    'El sistema completo para producir contenido UGC premium con IA, conseguir marcas y cobrar como agencia. Sin grabarte. Sin equipo. Sin excusas.',
  keywords: [
    'UGC con IA',
    'Sistema Modo Creador',
    'byjose.ai',
    'creadores de contenido',
    'clonar voz IA',
    'avatar IA',
    'UGC marcas',
  ],
  authors: [{ name: 'José Díaz', url: 'https://byjoseai.com' }],
  metadataBase: new URL('https://byjoseai.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://byjoseai.com',
    siteName: 'byjose.ai',
    title: 'Sistema Modo Creador — byjose.ai',
    description:
      'Produce contenido UGC premium con IA. Sin grabarte. Sin equipo.',
    // TODO: agregar OG image real → images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema Modo Creador — byjose.ai',
    description: 'Produce contenido UGC premium con IA. Sin grabarte.',
    // TODO: agregar twitter image → images: ['/og-image.jpg']
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍌</text></svg>",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        {/* TODO: Meta Pixel — reemplazar PIXEL_ID con el ID real */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){...}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        */}
      </head>
      <body className="bg-navy text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
