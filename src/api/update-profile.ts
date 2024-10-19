import { api } from '@/lib/axios'

interface UpdateProfile {
  nome: string
  email: string
  telefone: string
  senha?: string
}

export async function updateProfile({
  nome,
  email,
  telefone,
  senha,
}: UpdateProfile) {
  await api.put('/profile', { nome, email, telefone, senha })
}
