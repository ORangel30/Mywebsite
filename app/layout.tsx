import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APServicios - Construcción y Remodelación | Panamá',
  description: 'Empresa familiar especializada en construcción y remodelación personalizada. 15+ años de experiencia en el área metropolitana de Panamá. Trabajamos con planos arquitectónicos y medidas precisas.',
  keywords: 'construcción, remodelación, Panamá, empresa familiar, planos arquitectónicos, renovación, cocinas, baños, oficinas',
  authors: [{ name: 'APServicios' }],
  creator: 'APServicios',
  publisher: 'APServicios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apservicios.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'APServicios - Construcción y Remodelación Profesional',
    description: 'Transformamos espacios con precisión y calidad. Empresa familiar con 15+ años de experiencia en construcción y remodelación.',
    url: 'https://apservicios.vercel.app',
    siteName: 'APServicios',
    images: [
      {
        url: '/images/hero-construction.png',
        width: 1200,
        height: 630,
        alt: 'APServicios - Equipo de construcción profesional',
      },
    ],
    locale: 'es_PA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APServicios - Construcción y Remodelación',
    description: 'Empresa familiar especializada en construcción personalizada con planos arquitectónicos.',
    images: ['/images/hero-construction.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "APServicios",
              "description": "Empresa familiar especializada en construcción y remodelación personalizada",
              "url": "https://apservicios.vercel.app",
              "telephone": "+507-XXX-XXXX",
              "email": "apservicios@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Área Metropolitana",
                "addressCountry": "PA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.9824",
                "longitude": "-79.5199"
              },
              "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
              "priceRange": "$$",
              "image": "https://apservicios.vercel.app/images/hero-construction.png",
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  )
}
