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
import { insertMaskInPhone } from '@/functions/phone-mask'

const profileSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  telefone: z.string(),
  senha: z.string().optional(),
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
    setValue,
    reset,
    formState: { isSubmitting },
    watch,
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nome: profile?.nome ?? '',
      email: profile?.email ?? '',
      telefone: profile?.telefone ?? '',
      senha: '',
    },
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedPhone = insertMaskInPhone(e.target.value)
    setValue('telefone', maskedPhone, { shouldValidate: true })
  }

  function updatedProfileCache({ nome, email, telefone }: ProfileSchema) {
    const cached = queryClient.getQueryData<ProfileSchema>(['profile'])

    if (cached) {
      queryClient.setQueryData(['profile'], {
        ...cached,
        nome,
        email,
        telefone,
      })
    }

    return cached
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ nome, email, telefone }) {
      const previousProfile = updatedProfileCache({ nome, email, telefone })
      return { previousProfile }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updatedProfileCache(context.previousProfile)
      }
    },
  })

  async function handleUpdateProfile(data: ProfileSchema) {
    const { nome, email, telefone, senha } = data

    try {
      await updateProfileFn({
        nome,
        email,
        telefone,
        senha: senha?.trim() === '' ? undefined : senha,
      })

      toast.success('Perfil atualizado com sucesso!')
      reset({ ...data, senha: '' })
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
              <Label htmlFor="telefone" className="font-semibold">
                Telefone
              </Label>
              <Input
                id="telefone"
                {...register('telefone')}
                onChange={handlePhoneChange}
                value={watch('telefone')}
              />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="senha" className="font-semibold">
                Nova Senha (Preencha se quiser alterar)
              </Label>
              <Input id="senha" type="password" {...register('senha')} />
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
