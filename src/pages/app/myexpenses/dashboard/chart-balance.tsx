import React from 'react'
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

interface ChartBalanceProps {
  data: Array<{
    month: string
    totalRevenues: string
    totalExpenses: string
  }>
  yearReference: number
}

// Definição da configuração do gráfico
const chartConfig: ChartConfig = {
  desktop: {
    label: 'Receita',
    color: 'hsl(var(--chart-2))',
  },
  mobile: {
    label: 'Despesa',
    color: 'hsl(var(--chart-1))',
  },
}

export function ChartBalance({ data, yearReference }: ChartBalanceProps) {
  const chartData = data.map((item) => ({
    month: item.month,
    receita: parseFloat(item.totalRevenues),
    despesa: parseFloat(item.totalExpenses),
  }))

  const maxValue =
    Math.max(
      ...chartData.map((data) => data.receita),
      ...chartData.map((data) => data.despesa),
    ) * 1.1

  return (
    <Card>
      <CardHeader>
        <CardTitle>Balanço (Receita - Despesa)</CardTitle>
        <CardDescription>{yearReference}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig} // Passando a prop `config` obrigatória
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
            <YAxis domain={[0, maxValue]} hide />
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
