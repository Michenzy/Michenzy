import Header from '@/components/header';
import AboutSection from '@/components/about-section';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <AboutSection />
      </main>
    </div>
  );
}
