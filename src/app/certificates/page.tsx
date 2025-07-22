import Header from '@/components/header';
import CertificatesSection from '@/components/certificates-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Certifications',
  description: "A collection of Micheal Joseph's professional certifications in digital marketing, Google Ads, product management, and more.",
   alternates: {
    canonical: '/certificates',
  },
};

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <CertificatesSection />
      </main>
    </div>
  );
}
