import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import FirebaseAnalytics from '@/components/firebase-analytics';
import { Suspense } from 'react';

const siteUrl = 'https://michealj.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Micheal Joseph | Marketing Strategist',
    template: '%s | Micheal Joseph',
  },
  description: 'Micheal Joseph is a data-driven marketing professional specializing in turning analytics into actionable growth strategies. Explore my work and results.',
  keywords: ['Micheal Joseph', 'Marketing Strategist', 'Digital Marketing', 'SEO', 'PPC', 'Data Analytics', 'ROI', 'Growth Marketing', 'Marketing Leadership'],
  openGraph: {
    title: 'Micheal Joseph | Marketing Strategist',
    description: 'Data-driven marketing professional turning analytics into growth strategies.',
    url: siteUrl,
    siteName: 'Micheal Joseph Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/me/micheal-joseph-headshot.jpg`,
        width: 450,
        height: 450,
        alt: 'Micheal Joseph Headshot'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micheal Joseph | Marketing Strategist',
    description: 'Data-driven marketing professional turning analytics into growth strategies.',
    images: [`${siteUrl}/assets/me/micheal-joseph-headshot.jpg`],
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
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Suspense fallback={null}>
            <FirebaseAnalytics />
        </Suspense>
        <div className="flex-grow">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
