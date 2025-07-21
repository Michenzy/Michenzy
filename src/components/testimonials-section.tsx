"use client";

import * as React from 'react';
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: 'Emmanuel',
    title: 'ShipPack',
    quote: "Micheal's data-driven approach revolutionized our marketing. We saw a 200% increase in qualified leads within the first quarter. His insights are pure gold.",
    rating: 5,
  },
  {
    name: 'Abin',
    title: 'roPay',
    quote: "Working with Micheal was a game-changer. He didn't just give us data; he gave us a clear, actionable strategy that aligned perfectly with our business goals.",
    rating: 5,
  },
  {
    name: 'Ayodeji',
    title: 'SoleFitness Nigeria',
    quote: "The ROI on our ad spend has never been better. Micheal's analytical skills helped us cut waste and focus on channels that actually deliver results.",
    rating: 5,
  },
  {
    name: 'Jerry',
    title: 'Digital Ad Planet',
    quote: "Micheal has a rare talent for bridging the technical and marketing worlds. His campaign analysis is always spot-on, leading to significant performance improvements.",
    rating: 5,
  },
  {
    name: 'Neriah',
    title: 'Success Drives Global Consult',
    quote: "We've worked with many marketers, but Micheal's dedication to data and clear communication sets him apart. Our user acquisition costs have dropped by 30% since he came on board.",
    rating: 5,
  },
  {
    name: 'Elite',
    title: 'CoinNewsExtraTV',
    quote: "The strategic insights from Micheal were invaluable. He helped us navigate the complexities of digital advertising with ease, resulting in a significant boost to our user base.",
    rating: 5,
  },
  {
    name: 'Julius',
    title: 'AforjarikHRPartners',
    quote: "Micheal's ability to turn complex data into a clear marketing narrative is exceptional. Our brand's online presence has grown stronger and more coherent.",
    rating: 5,
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
        }`}
      />
    ))}
  </div>
);

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
            Testimonials
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            What My Clients Say
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real feedback from business leaders who have seen real results.
          </p>
        </div>
        <div className="relative mt-12">
           <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-background flex flex-col h-full">
                      <CardHeader>
                        <Rating rating={testimonial.rating} />
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <blockquote className="text-lg italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                      <CardFooter className="flex items-center gap-4 mt-auto pt-4">
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
