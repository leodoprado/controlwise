import { api } from '@/lib/axios'

interface GetProfileResponse {
  user: {
    id: string
    name: string
    email: string
    avatarUrl: string | null
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  console.log(response.data.user.name)

  return response.data.user
}
