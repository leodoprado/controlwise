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

  // Verifique se a API realmente retornou o token
  console.log('Resposta da API:', response.data)

  return response.data // Deve conter o accessToken
}
