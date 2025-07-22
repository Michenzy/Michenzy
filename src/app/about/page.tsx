import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import PhilosophySection from '@/components/philosophy-section';
import ResultsHighlightsSection from '@/components/results-highlights-section';
import NextStepsSection from '@/components/next-steps-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Micheal Joseph | My Story & Philosophy',
  description: "Learn about Micheal Joseph's journey from accounting to marketing leadership and the data-first philosophy that drives his success.",
  keywords: ['About Micheal Joseph', 'Marketing Philosophy', 'Data-Driven Marketing', 'Marketing Leader', 'Accountant turned Marketer', 'ROI Focused Marketing'],
   alternates: {
    canonical: '/about',
  },
};

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
