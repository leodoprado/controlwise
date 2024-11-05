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
  { month: 'Janeiro', receita: 3500 },
  { month: 'Fevereiro', receita: 3700 },
  { month: 'Março', receita: 3600 },
  { month: 'Abril', receita: 3400 },
  { month: 'Maio', receita: 3800 },
  { month: 'Junho', receita: 4000 },
  { month: 'Julho', receita: 4100 },
  { month: 'Agosto', receita: 3900 },
  { month: 'Setembro', receita: 4200 },
  { month: 'Outubro', receita: 4300 },
  { month: 'Novembro', receita: 4400 },
  { month: 'Dezembro', receita: 4600 },
]

// Calcula o valor máximo de receita e adiciona 10% de folga
const maxValue = Math.max(...chartData.map((data) => data.receita)) * 1.1

const chartConfig = {
  desktop: {
    label: 'Receita',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartFrequencyRevenue() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequência de Receitas</CardTitle>
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
              dataKey="receita"
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
