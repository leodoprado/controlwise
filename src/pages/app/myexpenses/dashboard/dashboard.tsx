import { Helmet } from 'react-helmet-async'

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
      </div>
    </>
  )
}
