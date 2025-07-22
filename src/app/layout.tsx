import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';

const siteUrl = 'https://michealj.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Micheal Joseph | Data-Driven Marketer & Analyst',
    template: '%s | Micheal Joseph',
  },
  description: 'Micheal Joseph is a data-driven marketing professional specializing in turning analytics into actionable growth strategies. Explore my work and results.',
  openGraph: {
    title: 'Micheal Joseph | Data-Driven Marketer & Analyst',
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
    title: 'Micheal Joseph | Data-Driven Marketer & Analyst',
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
        <div className="flex-grow">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
