import { api } from '@/lib/axios'

interface GetEvolutionMovements {
  month: string
  aggregatedValue: string
}

export async function getEvolutionMovements() {
  const response = await api.get<GetEvolutionMovements[]>(
    '/evolution-movements',
  )

  return response.data
}
