import { api } from '@/lib/axios'

interface GetPlanningByCategory {
  id: string
  titulo: string
  valorTarget: number
  tipo: string
}

export async function getPlanningByCategory(
  monthIndex: string,
  categoryId: string,
) {
  const response = await api.get<GetPlanningByCategory[]>(
    `/plannings?month=${monthIndex}&categoryId=${categoryId}`,
  )

  return response.data
}
