import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <img
              className="h-auto max-h-[80vh] w-full max-w-[80vw]"
              src={logo}
              alt="Home"
            />
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Senha</Label>
              <Input id="email" type="email" />
            </div>

            <Button className="w-full font-bold" type="submit">
              Acessar painel
            </Button>
            <Button variant="ghost" className="w-full">
              <Link to="/sign-up">Nova Conta</Link>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
