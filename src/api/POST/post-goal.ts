import { api } from '@/lib/axios'

export interface CreateGoalBody {
  titulo: string
  dataLimite: Date
  valorTotal: number
  valorInicial: number
  descricao?: string
}

export async function createGoal({
  titulo,
  dataLimite,
  valorTotal,
  valorInicial,
  descricao,
}: CreateGoalBody) {
  await api.post('/goal', {
    titulo,
    dataLimite,
    valorTotal,
    valorInicial,
    descricao,
  })
}
