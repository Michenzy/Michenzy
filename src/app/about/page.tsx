import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import PhilosophySection from '@/components/philosophy-section';
import ResultsHighlightsSection from '@/components/results-highlights-section';
import NextStepsSection from '@/components/next-steps-section';


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <PhilosophySection />
        <ResultsHighlightsSection />
        <NextStepsSection />
      </main>
    </div>
  );
}
