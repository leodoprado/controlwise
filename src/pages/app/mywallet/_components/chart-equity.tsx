'use client'

import { useQuery } from '@tanstack/react-query'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

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
    label: 'Patrimônio',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function ChartEquity() {
  const { data, isLoading } = useQuery({
    queryKey: ['evolution'],
    queryFn: getEvolutionMovements,
  })

  const chartData =
    data?.map((item) => ({
      month: item.month,
      patrimonio: parseFloat(item.aggregatedValue), // Parse para número
    })) || []

  // Calcular o valor máximo com uma margem adicional
  const maxValue =
    Math.max(...chartData.map((item) => item.patrimonio || 0)) * 1.1

  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Evolução do Patrimônio</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-start text-sm font-medium text-gray-500">
            Carregando dados...
          </p>
        ) : chartData.length === 0 ? (
          <p className="mt-4 text-center text-sm font-medium text-gray-500">
            Nenhum dado disponível.
          </p>
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
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis domain={[0, maxValue]} hide />{' '}
              {/* Adicionado o domínio do eixo Y */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="patrimonio" fill="var(--color-desktop)" />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
