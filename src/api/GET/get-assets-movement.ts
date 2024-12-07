import { api } from '@/lib/axios'

interface GetAssetsMovementResponse {
  assets: Array<{
    quantidade: number
    assetId: string
    nome: string
    valorMedio: number
    ticker: string
    tipo: string
  }>
}

export async function getAssetsMovement() {
  const response = await api.get<GetAssetsMovementResponse>('/asset-movements')

  return response.data.assets
}
