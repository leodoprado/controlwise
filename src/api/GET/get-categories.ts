import { api } from '@/lib/axios'

interface GetCategoriesResponse {
  categories: {
    id: string
    codigo: number
    nome: string
    tipo: string
    codIcone: number
    codColor: number
    descricao: string
  }
}

export async function getCategories() {
  const response = await api.get<GetCategoriesResponse>('/categories')

  return response.data.categories
}
