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

interface ChartFrequencyExpenseProps {
  data: Array<{
    month: string
    totalExpenses: string
  }>
}

// Configuração do gráfico
const chartConfig = {
  desktop: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function ChartFrequencyExpense({ data }: ChartFrequencyExpenseProps) {
  // Transformação dos dados para o formato do gráfico
  const chartData = data.map((item) => ({
    month: item.month,
    despesa: parseFloat(item.totalExpenses),
  }))

  const maxValue = Math.max(...chartData.map((data) => data.despesa)) * 1.1

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequência de Despesas</CardTitle>
        <CardDescription>2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto h-[350px] w-[100%]"
          config={chartConfig} // Passando a configuração do gráfico
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
              tickFormatter={(value) => value.slice(0, 3)} // Exibe somente os 3 primeiros caracteres do mês
            />
            <YAxis domain={[0, maxValue]} hide />
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
