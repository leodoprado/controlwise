import { api } from '@/lib/axios'

interface CategorySummary {
  categorie: string
  totalValue: number
  color: number
}

interface GetCategorySummaryResponse {
  expenses: CategorySummary[]
  revenues: CategorySummary[]
}

export async function getCategorySummary(month: string) {
  const response = await api.get<GetCategorySummaryResponse>(
    '/categories/summary',
    {
      params: { month },
    },
  )

  return response.data
}
