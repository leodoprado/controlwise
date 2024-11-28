import { api } from '@/lib/axios'

interface GetParametersResponse {
  anoReferencia: number
}

export async function getParameters() {
  const response = await api.get<GetParametersResponse>('/parameters')

  return response.data
}
