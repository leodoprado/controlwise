import { api } from '@/lib/axios'

export interface CreatePlanningBody {
  titulo: string
  valorTarget: number
  tipo: 'DESPESA' | 'RECEITA'
  categoryId: string
}

export async function createPlanning({
  titulo,
  valorTarget,
  tipo,
  categoryId,
}: CreatePlanningBody) {
  await api.post('/planning', {
    titulo,
    valorTarget,
    tipo,
    categoryId,
  })
}
