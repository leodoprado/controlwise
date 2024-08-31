import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Usuário autenticado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Erro ao autenticar usuário.')
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <div className="p-8">
        <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <img
              className="h-auto max-h-[80vh] w-full max-w-[80vw]"
              src={logo}
              alt="Home"
            />
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
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
              Acessar painel
            </Button>
            <Button variant="outline" className="w-full p-0">
              <Link
                to="/signup"
                className="flex h-full w-full items-center justify-center p-0"
              >
                Nova Conta
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
