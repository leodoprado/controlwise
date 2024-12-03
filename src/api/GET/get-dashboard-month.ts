import { api } from '@/lib/axios'

interface GetDataDashboardMonth {
  totalExpenses: string
  percentageExpenses: string
  totalRevenues: string
  percentageRevenues: string
  netDifference: string
  percentageDifference: string
}

export async function getDataDashboardMonth(monthIndex: string) {
  const response = await api.get<GetDataDashboardMonth>(
    `/dashboard?month=${monthIndex}`,
  )

  return response.data
}
