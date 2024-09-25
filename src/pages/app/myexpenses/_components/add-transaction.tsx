import {
  Calculator,
  CircleDollarSignIcon,
  FilePen,
  Plus,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DatePickerDemo } from './date-picker'

export function AddTransaction({ buttonText }: { buttonText: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'default'}
          className="flex items-center gap-2 rounded-full px-5 py-3 shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          <span className="text-sm font-bold">{buttonText}</span>
          <Plus className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="mx-auto flex w-[400px] max-w-[90vw] items-center justify-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">
              <TrendingUp className="mr-1 h-4 w-4 text-primary" /> Receita
            </TabsTrigger>
            <TabsTrigger value="password">
              <TrendingDown className="mr-1 h-4 w-4 text-destructive" /> Despesa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="flex">
                  <CircleDollarSignIcon className="mr-2 text-primary" />
                  Cadastrar Receita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Calculator className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input id="name" className="pl-10" placeholder="0,00" />
                  </div>
                </div>
                <div className="items-top mb-3 flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Receita executada
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <DatePickerDemo />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FilePen className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input
                      id="username"
                      className="pl-10" // Adiciona padding para evitar sobreposição do ícone
                      placeholder="Descrição"
                    />
                  </div>
                </div>

                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Receita recorrente
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Adicionar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle className="flex">
                  <CircleDollarSignIcon className="mr-2 text-destructive" />
                  Cadastrar Despesa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Calculator className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input id="name" className="pl-10" placeholder="0,00" />
                  </div>
                </div>
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Receita executada
                    </label>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <DatePickerDemo />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FilePen className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input
                      id="username"
                      className="pl-10" // Adiciona padding para evitar sobreposição do ícone
                      placeholder="Descrição"
                    />
                  </div>
                </div>

                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Receita recorrente
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Adicionar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
