import { api } from '@/lib/axios'

export interface CreateTransactionBody {
  valor: number
  descricao: string | null
  data: Date
  categoryId: string
  planningId?: string | null
  isRecurring: boolean
  tipo: 'RECEITA' | 'DESPESA'
  status: 'PENDENTE' | 'EXECUTADO' | 'CANCELADO'
}

export async function createTransaction({
  valor,
  descricao,
  data,
  categoryId,
  planningId,
  isRecurring,
  tipo,
  status,
}: CreateTransactionBody) {
  await api.post('/transaction', {
    valor,
    descricao,
    data,
    categoryId,
    planningId,
    isRecurring,
    tipo,
    status,
  })
}
