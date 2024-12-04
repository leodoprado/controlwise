import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getCategorySummary } from '@/api/GET/get-categories-summary'
import { getDataDashboardMonth } from '@/api/GET/get-dashboard-month'
import { getDataDashboardYear } from '@/api/GET/get-dashboard-year'
import { getParameters } from '@/api/GET/get-parameters'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useQueryKey } from '@/contexts/queryKeyContext'

import { CardCurrentBalance } from './card-current-balance'
import { CardExpenses } from './card-expenses'
import { CardRevenues } from './card-revenues'
import { ChartBalance } from './chart-balance'
import { ChartExpenseCategory } from './chart-expense-category'
import { ChartFrequencyExpense } from './chart-frequency-expense'
import { ChartFrequencyRevenue } from './chart-frequency-revenue'
import { ChartRevenueCategory } from './chart-revenue-category'

export function EDashboardPage() {
  const { currentKeyMonth } = useQueryKey()

  const { data: monthData, isLoading } = useQuery({
    queryKey: ['dashboardMonth', currentKeyMonth],
    queryFn: () => getDataDashboardMonth(currentKeyMonth),
    enabled: !!currentKeyMonth,
  })

  const { data: yearData } = useQuery({
    queryKey: ['dashboardYear'],
    queryFn: getDataDashboardYear,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  const { data: categorySummary } = useQuery({
    queryKey: ['categoriesSummary', currentKeyMonth],
    queryFn: () => getCategorySummary(currentKeyMonth),
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  })

  const { data: parameters } = useQuery({
    queryKey: ['parameters'],
    queryFn: getParameters,
    staleTime: Infinity,
  })

  return (
    <>
      <Helmet title="Painel" />

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <CardCurrentBalance
            totalBalance={monthData?.netDifference ?? '0'}
            percentageBalance={monthData?.percentageDifference ?? '0'}
            isLoading={isLoading}
          />
          <CardRevenues
            totalRevenues={monthData?.totalRevenues ?? '0'}
            percentageRevenues={monthData?.percentageRevenues ?? '0'}
            isLoading={isLoading}
          />
          <CardExpenses
            totalExpenses={monthData?.totalExpenses ?? '0'}
            percentageExpenses={monthData?.percentageExpenses ?? '0'}
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
              {categorySummary && (
                <ChartExpenseCategory data={categorySummary.expenses} />
              )}
            </TabsContent>
            <TabsContent value="chart2">
              {categorySummary && (
                <ChartRevenueCategory data={categorySummary.revenues} />
              )}
            </TabsContent>
          </Tabs>

          <Tabs className="col-span-6" defaultValue="chart3">
            <TabsList>
              <TabsTrigger value="chart3">Balanço</TabsTrigger>
              <TabsTrigger value="chart4">Frequência de Despesas</TabsTrigger>
              <TabsTrigger value="chart5">Frequência de Receitas</TabsTrigger>
            </TabsList>
            <TabsContent className="h-full" value="chart3">
              {yearData && (
                <ChartBalance
                  data={yearData}
                  yearReference={parameters?.anoReferencia ?? 0}
                />
              )}
            </TabsContent>
            <TabsContent value="chart4">
              {yearData && <ChartFrequencyExpense data={yearData} />}
            </TabsContent>
            <TabsContent value="chart5">
              {yearData && <ChartFrequencyRevenue data={yearData} />}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
