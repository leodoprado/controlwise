import { api } from '@/lib/axios'

interface GetAssetsResponse {
  assets: Array<{
    ticker: string
    nome: string
    tipo: string
  }>
}

export async function getAssets() {
  const response = await api.get<GetAssetsResponse>('/assets')

  return response.data.assets
}
