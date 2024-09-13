import { api } from '@/lib/axios'

export interface CreateAccountBody {
  name: string
  email: string
  password: string
}

export async function createAccount({
  name,
  email,
  password,
}: CreateAccountBody) {
  await api.post('/signup', { name, email, password })
}
