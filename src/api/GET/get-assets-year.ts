import { api } from '@/lib/axios'

interface Asset {
  name: string
  ticker: string
  totalQuantity: number
  totalValue: number
}

interface AssetSummary {
  assetType: string
  assets: Asset[]
}

export async function getAssetsYear(monthIndex: string) {
  const response = await api.get<AssetSummary[]>(
    `/assetsyear?year=${monthIndex}`,
  )

  return response.data
}
