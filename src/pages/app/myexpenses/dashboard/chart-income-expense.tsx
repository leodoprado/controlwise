'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A stacked bar chart with a legend'

const chartData = [
  { month: 'Jan', despesa: 1900.12, receita: 1973.27 - 1900.12 },
  { month: 'Fev', despesa: 648.01, receita: 1973.27 - 648.01 },
  { month: 'Mar', despesa: 874.1, receita: 1220 - 874.1 },
  { month: 'Abr', despesa: 731.32, receita: 2324 - 731.32 },
  { month: 'Mai', despesa: 982.23, receita: 2129.12 - 982.23 },
  { month: 'Jun', despesa: 1459.12, receita: 3232.2 - 1459.12 },
  { month: 'Jul', despesa: 1523, receita: 2478.32 - 1523 },
  { month: 'Ago', despesa: 418, receita: 1976.12 - 418 },
  { month: 'Set', despesa: 1630.12, receita: 2954.45 - 1630.12 },
  { month: 'Out', despesa: 1021, receita: 3120 - 1021 },
  { month: 'Nov', despesa: 874, receita: 2876 - 874 },
  { month: 'Dez', despesa: 4431, receita: 1232.12 - 3012.21 },
]

const chartConfig = {
  despesa: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))', // Vermelho
  },
  receita: {
    label: 'Receita',
    color: 'hsl(var(--chart-2))', // Outra cor para a receita
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Relação (Receita - Despesa)</CardTitle>
        <CardDescription>Setembro 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="despesa"
              stackId="a"
              fill="var(--color-despesa)" // Despesa embaixo
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="receita"
              stackId="a"
              fill="var(--color-receita)" // Receita em cima
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
