import { Helmet } from 'react-helmet-async'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ComponentPie } from './chart-expense-category'
import { ChartFrequencyExpense } from './chart-frequency-expense'
import { ChartBalance } from './chart-income-expense'
import { ChartRevenueCategory } from './chart-revenue-category'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'

export function EDashboardPage() {
  return (
    <>
      <Helmet title="Painel" />
      <div className="flex w-full flex-col items-center gap-4">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        {/* First row of charts with Tabs */}
        <div className="grid w-full max-w-7xl grid-cols-9 gap-4">
          <div className="col-span-3">
            <Tabs defaultValue="chart1">
              <TabsList>
                <TabsTrigger value="chart1">Despesas por Categoria</TabsTrigger>
                <TabsTrigger value="chart2">Receitas por Categoria</TabsTrigger>
              </TabsList>
              <TabsContent value="chart1">
                <ComponentPie />
              </TabsContent>
              <TabsContent value="chart2">
                <ChartRevenueCategory />
              </TabsContent>
            </Tabs>
          </div>

          <div className="col-span-6">
            <Tabs defaultValue="chart3">
              <TabsList>
                <TabsTrigger value="chart3">Balanço</TabsTrigger>
                <TabsTrigger value="chart4">Frequência</TabsTrigger>
              </TabsList>
              <TabsContent value="chart3">
                <ChartBalance />
              </TabsContent>
              <TabsContent value="chart4">
                <ChartFrequencyExpense />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
