import { api } from '@/lib/axios'

interface UpdateGoalValue {
  goalId: string
  valorAdicionado: number
}

export async function updateGoalValue({
  goalId,
  valorAdicionado,
}: UpdateGoalValue) {
  await api.put(`/goal/${goalId}/valorAdicionado`, { valorAdicionado })
}
