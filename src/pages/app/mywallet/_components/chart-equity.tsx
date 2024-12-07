'use client'

import { useQuery } from '@tanstack/react-query'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { getEvolutionMovements } from '@/api/GET/get-evolution-movements'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartEquity() {
  const { data, isLoading } = useQuery({
    queryKey: ['evolution'],
    queryFn: getEvolutionMovements,
  })

  // Processando os dados para o formato esperado pelo BarChart
  const chartData =
    data?.map((item) => ({
      month: item.month, // Exemplo: "January", "February"
      desktop: item.aggregatedValue, // Substitua `value` pelo campo correto do seu retorno
    })) || []

  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Evolução do Patrimônio</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
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
                tickFormatter={(value) => value.slice(0, 3)} // Exibe os 3 primeiros caracteres do mês
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
