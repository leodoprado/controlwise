import { api } from '@/lib/axios'

interface Category {
  nome: string
  codIcone: number
  codColor: number
}

interface Transaction {
  id: string
  valor: string
  descricao: string | null
  tipo: 'RECEITA' | 'DESPESA'
  data: string
  status: 'PENDENTE' | 'EXECUTADO' | 'CANCELADO'
  categoria: Category
}

interface GetTransactionsMonth {
  scheduledTransactions: Transaction[]
  transactionHistory: Transaction[]
}

export async function getTransactionMonth(monthIndex: string) {
  const response = await api.get<GetTransactionsMonth>(
    `/transactions?month=${monthIndex}`,
  )
  return response.data
}
