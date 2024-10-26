import { api } from '@/lib/axios'

export interface CreateAccountBody {
  nome: string
  email: string
  password: string
}

export async function createAccount({
  nome,
  email,
  password,
}: CreateAccountBody) {
  await api.post('/signup', { nome, email, password })
}
