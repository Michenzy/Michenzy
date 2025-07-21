"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CaseStudyChart from '@/components/case-study-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudiesData = {
  'campaign-a': {
    title: 'E-commerce Growth Campaign',
    description: 'Boosted online sales by 300% in 6 months through a multi-channel digital advertising strategy and conversion rate optimization.',
    data: [
      { name: 'Jan', CTR: 2.1, Conversions: 120 },
      { name: 'Feb', CTR: 2.5, Conversions: 180 },
      { name: 'Mar', CTR: 3.1, Conversions: 250 },
      { name: 'Apr', CTR: 3.0, Conversions: 310 },
      { name: 'May', CTR: 3.5, Conversions: 380 },
      { name: 'Jun', CTR: 4.2, Conversions: 480 },
    ],
  },
  'campaign-b': {
    title: 'SaaS Lead Generation',
    description: 'Reduced Cost Per Acquisition (CPA) by 40% while increasing qualified leads by 150% using targeted content marketing and LinkedIn ads.',
    data: [
      { name: 'Q1', CTR: 1.5, Conversions: 45 },
      { name: 'Q2', CTR: 1.8, Conversions: 65 },
      { name: 'Q3', CTR: 2.2, Conversions: 90 },
      { name: 'Q4', CTR: 2.8, Conversions: 112 },
    ],
  },
  'campaign-c': {
    title: 'Local SEO Domination',
    description: "Achieved #1 ranking for 15 high-value keywords and drove a 70% increase in local foot traffic for a multi-location retail business.",
    data: [
      { name: 'Jan', CTR: 4.5, Conversions: 50 },
      { name: 'Feb', CTR: 4.8, Conversions: 55 },
      { name: 'Mar', CTR: 5.2, Conversions: 65 },
      { name: 'Apr', CTR: 5.5, Conversions: 80 },
      { name: 'May', CTR: 6.1, Conversions: 95 },
      { name: 'Jun', CTR: 6.8, Conversions: 110 },
    ],
  },
};

type CaseStudyKey = keyof typeof caseStudiesData;

export default function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState<CaseStudyKey>('campaign-a');

  const currentStudy = caseStudiesData[activeStudy];

  return (
    <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">Case Studies</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Impact in Action</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here's a look at how I've translated data into tangible results. Select a case study to see the performance metrics.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col space-y-4">
            {Object.keys(caseStudiesData).map((key) => {
              const studyKey = key as CaseStudyKey;
              return (
                <Button
                  key={studyKey}
                  variant={activeStudy === studyKey ? "default" : "secondary"}
                  size="lg"
                  className="justify-start text-left h-auto py-3"
                  onClick={() => setActiveStudy(studyKey)}
                >
                  <div className="flex flex-col">
                     <span className="font-bold">{caseStudiesData[studyKey].title}</span>
                     <span className="text-xs font-normal opacity-80">{caseStudiesData[studyKey].description.substring(0, 50)}...</span>
                  </div>
                </Button>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline">{currentStudy.title}</CardTitle>
                <CardDescription>{currentStudy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <CaseStudyChart data={currentStudy.data} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
