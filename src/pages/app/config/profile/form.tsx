import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getProfile } from '@/api/get-profile'
import { updateProfile } from '@/api/update-profile'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const profileSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  cpf: z.string().nullable(),
  telefone: z.string().nullable(),
})

type ProfileSchema = z.infer<typeof profileSchema>

export function CardWithForm() {
  const queryClient = useQueryClient()

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    values: {
      nome: profile?.nome ?? '',
      email: profile?.email ?? '',
      cpf: profile?.cpf ?? '',
      telefone: profile?.telefone ?? '',
    },
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { nome, email }) {
      const cached = queryClient.getQueryData(['profile'])

      if (cached) {
        queryClient.setQueryData(['profile'], {
          ...cached,
          nome,
          email,
        })
      }
    },
  })

  async function handleUpdateProfile(data: ProfileSchema) {
    try {
      await updateProfileFn({
        nome: data.nome,
        email: data.email,
        cpf: data.cpf ?? '',
        telefone: data.telefone ?? '',
      })
      toast.success('Perfil atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar dados do perfil!')
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Configure seus dados pessoais.</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="nome" className="font-semibold">
                Nome
              </Label>
              <Input id="nome" {...register('nome')} />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="email" className="font-semibold">
                Email
              </Label>
              <Input id="email" {...register('email')} />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="cpf" className="font-semibold">
                CPF
              </Label>
              <Input id="cpf" {...register('cpf')} />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="telefone" className="font-semibold">
                Telefone
              </Label>
              <Input id="telefone" {...register('telefone')} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
