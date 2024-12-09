import { api } from '@/lib/axios'

interface GetAssetSummary {
  assetType: string
  totalEquity: number
}

export async function getAssetsSummary() {
  const response = await api.get<GetAssetSummary[]>('/assets/summary')

  return response.data
}
