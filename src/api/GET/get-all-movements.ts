import { api } from '@/lib/axios'

interface GetAllMovements {
  movementId: string
  tipoMovimento: 'COMPRA' | 'VENDA'
  quantidade: number
  valorUnitario: number
  valorTotal: number
  data: string
  nome: string
  ticker: string
  tipo: 'ACAO' | 'FII' | 'CRIPTOMOEDA' | 'STOCK' | 'BDR'
}

export async function getAllMovements() {
  const response = await api.get<GetAllMovements[]>('/all-movements')

  return response.data
}
