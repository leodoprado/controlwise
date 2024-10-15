import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/useAuth'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function ASignInPage() {
  const [searchParams] = useSearchParams()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const navigate = useNavigate()

  const { mutateAsync: signInAccountFn } = useMutation({
    mutationFn: login,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await signInAccountFn({ email: data.email, password: data.password })

      toast.success('Autenticação realizada com sucesso.')

      setTimeout(() => {
        navigate('/myexpenses/dashboard')
      }, 2000)
    } catch (error) {
      toast.error('Credenciais inválidas!')
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
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
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
