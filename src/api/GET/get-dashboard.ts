import { api } from '@/lib/axios'

interface GetDataDashboard {
  totalExpenses: string
  percentageExpenses: string
  totalRevenues: string
  percentageRevenues: string
  netDifference: string
  percentageDifference: string
}

export async function getDataDashboard(monthIndex: string) {
  const response = await api.get<GetDataDashboard>(
    `/dashboard?month=${monthIndex}`,
  )

  return response.data
}
