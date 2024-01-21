import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SignInModal from '@/components/sign-in-modal'
import Toaster from '@/components/toaster'
import site from '@/config/site'
import cn from '@/utils/cn'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`
  },
  description: site.description,
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
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    site: '@csiber',
    siteId: '1152256803746377730',
    creator: '@csiber',
    creatorId: '1152256803746377730',
    images: [`${site.url}/images/og.png`]
  },
  keywords: site.keywords,
  creator: 'csiber',
  openGraph: {
    url: site.url,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'hu-HU',
    images: [
      {
        url: `${site.url}/images/og.png`,
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [...site.favicons]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const calcom = localFont({
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  variable: '--font-title'
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='hu-HU'
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        calcom.variable,
        'scroll-smooth'
      )}
    >
      <body>
        <SessionProvider>
          <Header />
          <main
            id='skip-nav'
            className='mx-auto mb-16 max-w-5xl px-6 py-24 sm:px-8'
          >
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
          <Toaster />
          <Footer />
          <SignInModal />
          <Image
            width={1512}
            height={550}
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
            src='/images/gradient-background-top.png'
            alt=''
            role='presentation'
            priority
          />
          <Image
            width={1512}
            height={447}
            className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
            src='/images/gradient-background-bottom.png'
            alt=''
            role='presentation'
            priority
          />
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
