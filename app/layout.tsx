import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/seo-structured-data'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import './scroll-fix.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TAPPS - The Water App | Real-time Dam Levels & Water Management in South Africa',
  description: 'TAPPS is South Africa\'s leading water management app. Get real-time dam levels, weather forecasts, and metro water restrictions. Stay informed and save water proactively.',
  keywords: [
    'water management app',
    'dam levels South Africa',
    'water restrictions',
    'water conservation',
    'TAPPS app',
    'South Africa water',
    'dam monitoring',
    'water saving app',
    'Cape Town water',
    'Johannesburg water',
    'Durban water',
    'water scarcity',
    'municipal water',
    'water alerts',
    'weather forecasts',
    'proactive water management'
  ],
  authors: [{ name: 'TAPPS Team' }],
  creator: 'TAPPS',
  publisher: 'TAPPS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tapps-landing-page.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://tapps-landing-page.vercel.app',
    title: 'TAPPS - The Water App | Real-time Dam Levels & Water Management',
    description: 'South Africa\'s leading water management app. Get real-time dam levels, weather forecasts, and water restrictions to stay ahead of water challenges.',
    siteName: 'TAPPS',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png',
        width: 1200,
        height: 630,
        alt: 'TAPPS - The Water App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAPPS - The Water App',
    description: 'Real-time dam levels and water management for South Africa',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapps%20Final%20Logo-01-b3jF1KmO0SvEQO4T6h52eqyfUhrM0e.png'],
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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon.png',
  },
  verification: {
    google: 'verification-token-here',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
