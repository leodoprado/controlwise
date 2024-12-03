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

interface ChartFrequencyRevenueProps {
  data: Array<{
    month: string
    totalRevenues: string
  }>
}

const chartConfig = {
  desktop: {
    label: 'Receita',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartFrequencyRevenue({ data }: ChartFrequencyRevenueProps) {
  const chartData = data.map((item) => ({
    month: item.month,
    receita: parseFloat(item.totalRevenues),
  }))

  const maxValue = Math.max(...chartData.map((data) => data.receita)) * 1.1

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
