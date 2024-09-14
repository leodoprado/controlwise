import * as React from 'react'

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

export function CardWithForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informações Pessoais</CardTitle>
        <CardDescription>Configure seus dados pessoais.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="nome" className="font-semibold">
                Nome
              </Label>
              <Input id="nome" />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="cpf" className="font-semibold">
                CPF
              </Label>
              <Input id="cpf" />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="email" className="font-semibold">
                Email
              </Label>
              <Input id="email" />
            </div>
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="telefone" className="font-semibold">
                Telefone
              </Label>
              <Input id="telefone" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Salvar</Button>
      </CardFooter>
    </Card>
  )
}
