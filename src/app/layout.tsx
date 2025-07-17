import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BNA',
  description: 'Ahmed BNA',

  keywords:
    'React, Next.js, React Native, Expo, UI Components, Mobile Development, iOS, Android, Component Library, Design System',
  authors: [{ name: 'Ahmed BNA' }],
  creator: 'Ahmed BNA',
  publisher: 'BNA',

  // Canonical URL
  metadataBase: new URL('https://www.ahmedbna.com'),
  alternates: {
    canonical: 'https://www.ahmedbna.com',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: 'BNA',
    description: 'Ahmed BNA',
    url: 'https://www.ahmedbna.com',
    siteName: 'BNA',
    images: [
      {
        url: '/bna-cyberpunk.png',
        width: 1200,
        height: 630,
        alt: 'BNA',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'BNA',
    description: 'Ahmed BNA',
    images: ['/bna-cyberpunk.png'],
    creator: '@ahmedbna', // Add your Twitter handle if you have one
    site: '@ahmedbna', // Add your Twitter handle if you have one
  },

  // Additional meta tags for other platforms
  other: {
    // LinkedIn specific (though it uses Open Graph)
    'linkedin:owner': 'Ahmed BNA',

    // Apple specific
    'apple-mobile-web-app-title': 'BNA',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',

    // Microsoft specific
    'msapplication-TileImage': '/bna-cyberpunk.png',
    'msapplication-TileColor': '#000000',

    // Theme colors
    'theme-color': '#000000',
    'color-scheme': 'light dark',

    // Additional social meta tags
    'og:see_also': 'https://www.ahmedbna.com',
    'article:author': 'Ahmed BNA',
    'article:publisher': 'https://www.ahmedbna.com',

    // Schema.org structured data
    'application-name': 'BNA',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },

  // Robots and indexing
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

  // Additional verification (add if you have these)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },

  // Categories for better organization
  category: 'Technology',

  // App-specific metadata
  applicationName: 'BNA',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
