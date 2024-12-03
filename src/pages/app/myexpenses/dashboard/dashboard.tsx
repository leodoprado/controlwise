import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getDataDashboard } from '@/api/GET/get-dashboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useQueryKey } from '@/contexts/queryKeyContext'

import { CardCurrentBalance } from './card-current-balance'
import { CardExpenses } from './card-expenses'
import { CardRevenues } from './card-revenues'
import { ChartExpenseCategory } from './chart-expense-category'
import { ChartFrequencyExpense } from './chart-frequency-expense'
import { ChartFrequencyRevenue } from './chart-frequency-revenue'
import { ChartBalance } from './chart-income-expense'
import { ChartRevenueCategory } from './chart-revenue-category'

export function EDashboardPage() {
  const { currentKeyMonth } = useQueryKey()

  const { data, isLoading } = useQuery({
    queryKey: ['dashboard', currentKeyMonth],
    queryFn: () => getDataDashboard(currentKeyMonth),
    enabled: !!currentKeyMonth,
  })

  return (
    <>
      <Helmet title="Painel" />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <CardCurrentBalance
            totalBalance={data?.netDifference ?? '0'}
            percentageBalance={data?.percentageDifference ?? '0'}
            isLoading={isLoading}
          />
          <CardRevenues
            totalRevenues={data?.totalRevenues ?? '0'}
            percentageRevenues={data?.percentageRevenues ?? '0'}
            isLoading={isLoading}
          />
          <CardExpenses
            totalExpenses={data?.totalExpenses ?? '0'}
            percentageExpenses={data?.percentageExpenses ?? '0'}
            isLoading={isLoading}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-9">
          <Tabs className="col-span-3" defaultValue="chart1">
            <TabsList>
              <TabsTrigger value="chart1">Despesas por Categoria</TabsTrigger>
              <TabsTrigger value="chart2">Receitas por Categoria</TabsTrigger>
            </TabsList>
            <TabsContent value="chart1">
              <ChartExpenseCategory />
            </TabsContent>
            <TabsContent value="chart2">
              <ChartRevenueCategory />
            </TabsContent>
          </Tabs>

          <Tabs className="col-span-6" defaultValue="chart3">
            <TabsList>
              <TabsTrigger value="chart3">Balanço</TabsTrigger>
              <TabsTrigger value="chart4">Frequência de Despesas</TabsTrigger>
              <TabsTrigger value="chart5">Frequência de Receitas</TabsTrigger>
            </TabsList>
            <TabsContent className="h-full" value="chart3">
              <ChartBalance />
            </TabsContent>
            <TabsContent value="chart4">
              <ChartFrequencyExpense />
            </TabsContent>
            <TabsContent value="chart5">
              <ChartFrequencyRevenue />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
