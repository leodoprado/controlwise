'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

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

// Dados do gráfico
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
  { month: 'Dezembro', despesa: 4300 },
]

// Calcula o valor máximo de despesa e adiciona 10% de folga
const maxValue = Math.max(...chartData.map((data) => data.despesa)) * 1.1

const chartConfig = {
  desktop: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function ChartFrequencyExpense() {
  return (
    <Card>
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
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            width={600}
            height={350}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis domain={[0, maxValue]} hide />{' '}
            {/* Adiciona uma folga ao limite superior */}
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
              dot={{
                fill: 'var(--color-desktop)',
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
