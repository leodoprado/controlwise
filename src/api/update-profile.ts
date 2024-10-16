import { api } from '@/lib/axios'

interface UpdateProfile {
  nome: string
  email: string
  cpf: string
  telefone: string
}

export async function updateProfile({
  nome,
  email,
  cpf,
  telefone,
}: UpdateProfile) {
  await api.put('/profile', { nome, email, cpf, telefone })
}
