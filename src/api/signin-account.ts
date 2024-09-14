import { api } from '@/lib/axios'

export interface SignInAccountBody {
  email: string
  password: string
}

export async function signInAccount({ email, password }: SignInAccountBody) {
  await api.post('/signin', { email, password })
}
