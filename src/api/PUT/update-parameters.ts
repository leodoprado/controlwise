import { api } from '@/lib/axios'

interface UpdateParameters {
  anoReferencia: number
}

export async function updateParameters({ anoReferencia }: UpdateParameters) {
  await api.put('/parameters', { anoReferencia })
}
