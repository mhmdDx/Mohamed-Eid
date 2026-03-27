import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Mohamed Eid | Frontend Developer & UI/UX Specialist',
  description: 'Professional Frontend Developer based in Alexandria, Egypt. Specialized in React, Next.js, and crafting premium, responsive digital experiences.',
  applicationName: 'Mohamed Eid',
  appleWebApp: {
    capable: true,
    title: 'Mohamed Eid ',
    statusBarStyle: 'default',
  },
  keywords: [
    'Mohamed Eid',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer Alexandria',
    'UI/UX Design',
    'Portfolio',
    'JavaScript Developer',
    'Modern Web Apps',
    'Responsive Design',
    'Industrial Engineering Portfolio',
  ],
  authors: [{ name: 'Mohamed Eid' }],
  creator: 'Mohamed Eid',
  publisher: 'Mohamed Eid',
  openGraph: {
    title: 'Mohamed Eid | Frontend Developer & UI/UX Specialist',
    description: 'Professional Frontend Developer based in Alexandria, Egypt. Specialized in React, Next.js, and crafting premium, responsive digital experiences.',
    url: 'https://mohamedeid.com',
    siteName: 'Mohamed Eid Portfolio',
    images: [
      {
        url: '/main.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Eid - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Eid | Frontend Developer & UI/UX Specialist',
    description: 'Professional Frontend Developer based in Alexandria, Egypt. Specialized in React, Next.js, and crafting premium, responsive digital experiences.',
    images: ['/main.jpg'],
  },
  verification: {
    google: 'kIqiIhrPdu8X19uoRzE7Dg6R0OZCzqAhF7Iso4PKuyI',
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
  alternates: {
    canonical: 'https://mohamedeid.com',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
