import { api } from '@/lib/axios'

export interface CreatePlanningBody {
  titulo: string
  valorTarget: number
  categoryId: string
}

export async function createPlanning({
  titulo,
  valorTarget,
  categoryId,
}: CreatePlanningBody) {
  await api.post('/planning', {
    titulo,
    valorTarget,
    categoryId,
  })
}
