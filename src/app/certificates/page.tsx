import Header from '@/components/header';
import CertificatesSection from '@/components/certificates-section';

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
