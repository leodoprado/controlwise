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

export const description = 'A simple area chart'

const chartData = [
  { month: 'Jan', despesa: 1900.12 },
  { month: 'Fev', despesa: 648.01 },
  { month: 'Mar', despesa: 874.1 },
  { month: 'Abr', despesa: 731.32 },
  { month: 'Mai', despesa: 982.23 },
  { month: 'Jun', despesa: 1459.12 },
  { month: 'Jul', despesa: 1523 },
  { month: 'Ago', despesa: 418 },
  { month: 'Set', despesa: 1630.12 },
  { month: 'Out', despesa: 1021 },
  { month: 'Nov', despesa: 874 },
  { month: 'Dez', despesa: 1784.21 },
]

const chartConfig = {
  despesa: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function ChartFrequency() {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Frequência de Gastos</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[350px] w-[100%]"
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
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="despesa"
              type="natural"
              fill="var(--color-despesa)"
              fillOpacity={0.4}
              stroke="var(--color-despesa)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
