import { Helmet } from 'react-helmet-async'

import { ChartAsset } from '../_components/chart-asset'
import { ChartEquity } from '../_components/chart-equity'

export function WDashboardPage() {
  return (
    <>
      <Helmet title="Painel" />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-9">
          <ChartEquity />
          <ChartAsset />
        </div>
      </div>
    </>
  )
}
