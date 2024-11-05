'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

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
  { month: 'Janeiro', receita: 3500, despesa: 2800 },
  { month: 'Fevereiro', receita: 3700, despesa: 2900 },
  { month: 'Março', receita: 3600, despesa: 3100 },
  { month: 'Abril', receita: 3400, despesa: 3300 },
  { month: 'Maio', receita: 3800, despesa: 3200 },
  { month: 'Junho', receita: 4000, despesa: 3500 },
  { month: 'Julho', receita: 4100, despesa: 3600 },
  { month: 'Agosto', receita: 3900, despesa: 2850 },
  { month: 'Setembro', receita: 4200, despesa: 3700 },
  { month: 'Outubro', receita: 4300, despesa: 3800 },
  { month: 'Novembro', receita: 4400, despesa: 2900 },
  { month: 'Dezembro', receita: 4600, despesa: 4500 },
]

const maxValue = Math.max(...chartData.map((data) => data.despesa)) * 1.1

const chartConfig = {
  desktop: {
    label: 'Receita',
    color: 'hsl(var(--chart-2))',
  },
  mobile: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function ChartBalance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balanço (Receita - Despesa)</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[350px] w-[100%]"
        >
          <BarChart data={chartData} width={600} height={350}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis domain={[0, maxValue]} hide />{' '}
            {/* Define o limite superior do eixo Y */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="receita" fill="var(--color-desktop)" radius={0} />
            <Bar dataKey="despesa" fill="var(--color-mobile)" radius={0} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
