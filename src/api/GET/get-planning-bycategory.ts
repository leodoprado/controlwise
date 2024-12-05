import { api } from '@/lib/axios'

interface GetPlanningByCategory {
  id: string
  titulo: string
  valorTarget: number
}

export async function getPlanningByCategory(
  monthIndex: string,
  categoryId: string,
  type: 'RECEITA' | 'DESPESA',
) {
  const response = await api.get<GetPlanningByCategory[]>(
    `/plannings?month=${monthIndex}&categoryId=${categoryId}&type=${type}`,
  )

  return response.data
}
