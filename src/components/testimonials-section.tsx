import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, TechNova Inc.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote: "Micheal's data-driven approach revolutionized our marketing. We saw a 200% increase in qualified leads within the first quarter. His insights are pure gold.",
    rating: 5,
  },
  {
    name: 'David Chen',
    title: 'Marketing Director, BrightSpark Co.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote: "Working with Micheal was a game-changer. He didn't just give us data; he gave us a clear, actionable strategy that aligned perfectly with our business goals.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    title: 'Founder, RetailBloom',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
    quote: "The ROI on our ad spend has never been better. Micheal's analytical skills helped us cut waste and focus on channels that actually deliver results.",
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
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background flex flex-col">
              <CardHeader>
                <Rating rating={testimonial.rating} />
              </CardHeader>
              <CardContent className="flex-grow">
                <blockquote className="text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
