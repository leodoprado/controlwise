'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Janeiro', despesa: 2800 },
  { month: 'Fevereiro', despesa: 2900 },
  { month: 'Março', despesa: 3100 },
  { month: 'Abril', despesa: 3300 },
  { month: 'Maio', despesa: 3200 },
  { month: 'Junho', despesa: 3500 },
  { month: 'Julho', despesa: 3600 },
  { month: 'Agosto', despesa: 2850 },
  { month: 'Setembro', despesa: 3700 },
  { month: 'Outubro', despesa: 3800 },
  { month: 'Novembro', despesa: 2900 },
  { month: 'Dezembro', despesa: 4000 },
]

const chartConfig = {
  desktop: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function ChartFrequency() {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Frequência de Despesas</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto h-[350px] w-[100%]"
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="despesa"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
