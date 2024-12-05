import { api } from '@/lib/axios'

interface Category {
  nome: string
  codIcone: number
  codColor: number
}

interface Planning {
  id: string
  titulo: string
  valorTarget: string
  tipo: 'DESPESA' | 'RECEITA'
  valorMovimentado: string
  categoria: Category
}

// Retorno será um array diretamente, conforme definido no backend
export async function getPlannings(monthIndex: string): Promise<Planning[]> {
  const response = await api.get<Planning[]>(`/plannings?month=${monthIndex}`)
  return response.data
}
