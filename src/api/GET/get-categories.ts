import { api } from '@/lib/axios'

interface GetCategoriesResponse {
  categories: Array<{
    id: string
    codigo: number
    nome: string
    tipo: 'DESPESA' | 'RECEITA'
    codIcone: number
    codColor: number
  }>
}

export async function getCategories() {
  const response = await api.get<GetCategoriesResponse>('/categories')

  return response.data.categories
}
