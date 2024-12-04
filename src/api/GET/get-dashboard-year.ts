import { api } from '@/lib/axios'

interface GetDataDashboardYear {
  month: string
  totalExpenses: string
  totalRevenues: string
  yearReference: number
}

export async function getDataDashboardYear() {
  const response = await api.get<GetDataDashboardYear[]>('/dashboard/year')

  return response.data
}
