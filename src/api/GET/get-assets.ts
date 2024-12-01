import { api } from '@/lib/axios'

interface GetAssetsResponse {
  assets: Array<{
    id: string
    ticker: string
    nome: string
    tipo: string
  }>
}

export async function getAssets() {
  const response = await api.get<GetAssetsResponse>('/assets')

  return response.data.assets
}
