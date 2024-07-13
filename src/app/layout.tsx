import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'

import Footer from '@/components/footer'
import '@/styles/globals.css'
import grid from './grid.svg'

type RootLayoutProps = {
  children: React.ReactNode
}

const SITE_URL = process.env.NODE_ENV === 'production'
  ? 'https://links.abhishekpanthee.com.np'
  : 'http://localhost:3000'
const SITE_DESCRIPTION = 'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!'
const SITE_TITLE = 'Links | Abhishek - Cyber-Security Analyst'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    title: 'Abhishek',
    card: 'summary_large_image',
    site: '@abhishek',
    creator: '@abhishek',
    images: [
      {
        url: 'https://abhishekpanthee.com.np/assets/logo/logo.png',
        width: 1280,
        height: 832,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  alternates: {
    canonical: SITE_URL
  },
  keywords: [
    'abhishek panthee',
    'abhishek social media',
    'abhisheklinks',
    'abhishek panthi'
  ],
  creator: 'abhishekpanthee',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US',
    images: [
      {
        url: 'https://shotcan.com/images/2024/07/13/Screenshot-from-2024-07-13-20-55-58dfca831026641d09.png',
        width: 1280,
        height: 832,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={GeistSans.variable}>
      <body className='relative bg-[#020202] font-sans text-white'>
        <div
          className='absolute inset-0 -z-20 size-full'
          style={{
            backgroundImage: `url(${grid.src})`
          }}
        />
        <div
          className='absolute inset-0 -z-10 size-full'
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className='relative min-h-screen overflow-x-hidden'>
          <main className='relative mx-auto max-w-lg px-4'>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
