import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ms. Joy Label Design - Custom Embroidered Name Tags for Kids',
  description: 'Professional quality embroidered name tags for backpacks and lunch boxes. Waterproof, durable, and beautifully personalized. Made by a Senior ECE Teacher in Richmond, BC. Free pickup available!',
  keywords: 'custom name tags, embroidered labels, backpack tags, lunch box labels, personalized tags, kids name tags, waterproof labels, Richmond BC, ECE teacher, custom embroidery',
  authors: [{ name: 'Ms. Joy' }],
  creator: 'Ms. Joy Label Design',
  publisher: 'Ms. Joy Label Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://msjoylabeldesign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ms. Joy Label Design - Custom Embroidered Name Tags',
    description: 'Professional quality embroidered name tags for backpacks and lunch boxes. Waterproof, durable, and beautifully personalized.',
    url: 'https://msjoylabeldesign.com',
    siteName: 'Ms. Joy Label Design',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom embroidered name tags by Ms. Joy',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ms. Joy Label Design - Custom Embroidered Name Tags',
    description: 'Professional quality embroidered name tags for backpacks and lunch boxes.',
    images: ['/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}