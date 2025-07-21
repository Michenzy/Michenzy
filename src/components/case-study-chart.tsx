"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

type ChartData = {
  name: string;
  [key: string]: string | number;
};

interface CaseStudyChartProps {
  data: ChartData[];
}

const chartConfig = {
  Conversions: {
    label: "Conversions",
    color: "hsl(var(--chart-1))",
  },
  CTR: {
    label: "CTR (%)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function CaseStudyChart({ data }: CaseStudyChartProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border)/0.5)" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={<ChartTooltipContent />}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="Conversions" fill="var(--color-Conversions)" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="right" dataKey="CTR" fill="var(--color-CTR)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
