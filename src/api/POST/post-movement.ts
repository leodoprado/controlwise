import { api } from '@/lib/axios'

export interface CreateMovementBody {
  valorUnitario: number
  quantidade: number
  data: Date
  tipoMovimento: 'COMPRA' | 'VENDA'
  assetId: string
}

export async function createMovement({
  valorUnitario,
  quantidade,
  data,
  tipoMovimento,
  assetId,
}: CreateMovementBody) {
  await api.post('/movement', {
    valorUnitario,
    quantidade,
    data,
    tipoMovimento,
    assetId,
  })
}
