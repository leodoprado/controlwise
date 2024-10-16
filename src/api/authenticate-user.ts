import { api } from '@/lib/axios'

export interface AuthenticateUserRequest {
  email: string
  password: string
}

interface AuthenticateUserResponse {
  accessToken: string
}

export async function authenticateUser({
  email,
  password,
}: AuthenticateUserRequest) {
  const response = await api.post<AuthenticateUserResponse>('/signin', {
    email,
    password,
  })

  return response.data
}
