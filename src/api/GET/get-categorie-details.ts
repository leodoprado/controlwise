import { api } from '@/lib/axios'

export interface GetCategorieDetailsParams {
  categorieId: string
}

export interface GetCategorieDetailsResponse {
  id: string
  nome: string
  tipo: 'DESPESA' | 'RECEITA'
  codIcone: number
  codColor: number
}

export async function getCategorieDetails({
  categorieId,
}: GetCategorieDetailsParams) {
  const response = await api.get<GetCategorieDetailsResponse>(
    `/categorie/${categorieId}`,
  )

  return response.data
}
