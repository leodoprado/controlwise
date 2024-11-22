'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: 'Jan', desktop: 1498.43 },
  { month: 'Fev', desktop: 2182.19 },
  { month: 'Mar', desktop: 2934.15 },
  { month: 'Abr', desktop: 3322.12 },
  { month: 'Mai', desktop: 3713.82 },
  { month: 'Jun', desktop: 4496.13 },
  { month: 'Jul', desktop: 4826.28 },
  { month: 'Ago', desktop: 5243.51 },
  { month: 'Set', desktop: 5807.34 },
  { month: 'Out', desktop: 6985.77 },
  { month: 'Nov', desktop: 7157.51 },
  { month: 'Dez', desktop: 8533.45 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartEquity() {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Evolução do Patrimônio</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[350px] w-[100%]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            width={600}
            height={350}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
