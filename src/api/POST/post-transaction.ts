import { api } from '@/lib/axios'

export interface CreateTransactionBody {
  valor: number
  descricao: string | null
  data: Date
  categoryId: string
  isRecurring: boolean
  tipo: 'RECEITA' | 'DESPESA'
  status: 'PENDENTE' | 'EXECUTADO' | 'CANCELADO'
}

export async function createTransaction({
  valor,
  descricao,
  data,
  categoryId,
  isRecurring,
  tipo,
  status,
}: CreateTransactionBody) {
  await api.post('/transaction', {
    valor,
    descricao,
    data,
    categoryId,
    isRecurring,
    tipo,
    status,
  })
}
