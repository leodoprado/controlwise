import { api } from '@/lib/axios'

interface GetProfileResponse {
  user: {
    name: string
    email: string
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
