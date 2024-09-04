import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  senha: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function ASignUpPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Usuário cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar usuário.')
    }
  }
  return (
    <>
      <Helmet title="Cadastrar" />
      <div className="p-8">
        <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <img
              className="h-auto max-h-[80vh] w-full max-w-[80vw]"
              src={logo}
              alt="Home"
            />
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" type="text" {...register('name')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" {...register('senha')} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full font-bold"
              type="submit"
            >
              Cadastrar
            </Button>
            <Button variant="outline" className="w-full p-0">
              <Link
                to="/"
                className="flex h-full w-full items-center justify-center p-0"
              >
                Voltar
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
