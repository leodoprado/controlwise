import { api } from '@/lib/axios'

export interface CreateCategorieBody {
  nome: string
  tipo: 'DESPESA' | 'RECEITA'
  codColor: number
  codIcone: number
}

export async function createCategorie({
  nome,
  tipo,
  codColor,
  codIcone,
}: CreateCategorieBody) {
  await api.post('/categories', { nome, tipo, codColor, codIcone })
}
