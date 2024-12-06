import { api } from '@/lib/axios'

export interface CreateGoalBody {
  titulo: string
  dataLimite: Date
  valorTotal: number
  valorAdicionado: number
  descricao?: string
}

export async function createGoal({
  titulo,
  dataLimite,
  valorTotal,
  valorAdicionado,
  descricao,
}: CreateGoalBody) {
  await api.post('/goal', {
    titulo,
    dataLimite,
    valorTotal,
    valorAdicionado,
    descricao,
  })
}
