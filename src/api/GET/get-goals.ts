import { api } from '@/lib/axios'

interface Goals {
  valorTotal: number
  valorInicial: number | null
  valorAdicionado: number
  id: string
  titulo: string
  dataLimite: Date | null
  descricao: string | null
}

export async function getGoals() {
  const response = await api.get<Goals[]>('/goals')
  return response.data
}
