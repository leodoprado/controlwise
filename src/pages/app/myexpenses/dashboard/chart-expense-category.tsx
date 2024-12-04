'use client'

import { Cell, Pie, PieChart } from 'recharts'

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
import { useQueryKey } from '@/contexts/queryKeyContext'

import { getColorById } from '../../config/categories/mappingIconColor'

interface ExpenseCategory {
  categorie: string
  totalValue: number
  color: number
}

interface ChartExpenseCategoryProps {
  data: ExpenseCategory[]
}

const chartConfig = {
  visitors: {
    label: 'Total',
  },
} satisfies ChartConfig

const monthLabels = [
  '',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export function ChartExpenseCategory({ data }: ChartExpenseCategoryProps) {
  const { currentKeyMonth } = useQueryKey()

  const currentMonthLabel = monthLabels[parseInt(currentKeyMonth)]

  const chartData = data.map((item) => ({
    categorie: item.categorie,
    totalValue: item.totalValue,
    fill: getColorById(item.color),
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Despesas por Categoria</CardTitle>
        <CardDescription>{currentMonthLabel}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[350px] w-[100%]"
        >
          <PieChart width={300} height={300}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="totalValue"
              nameKey="categorie"
              innerRadius={80}
              outerRadius={160}
              stroke="white"
              strokeWidth={3}
              isAnimationActive={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
