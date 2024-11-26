import { api } from '@/lib/axios'

export interface DeleteCategorieParams {
  categorieId: string
}

export interface DeleteCategorieResponse {
  message: string
}

export async function deleteCategorie({
  categorieId,
}: DeleteCategorieParams): Promise<DeleteCategorieResponse> {
  const response = await api.delete<DeleteCategorieResponse>(
    `/categorie/${categorieId}`,
  )

  return response.data
}
