// MovimentacaoDialogContent.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Banknote,
  Bookmark,
  CircleDollarSignIcon,
  FilePen,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { insertMaskInMoney } from '@/functions/money-mask'

import { DatePickerDemo } from './date-picker'

const transactionSchema = z.object({
  transactionValue: z.string(),
})

type TransactionSchema = z.infer<typeof transactionSchema>

export function AddTransaction() {
  const { setValue, watch } = useForm<TransactionSchema>({
    resolver: zodResolver(transactionSchema),
  })

  const handleMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedMoney = insertMaskInMoney(e.target.value)
    setValue('transactionValue', maskedMoney, { shouldValidate: true })
  }

  return (
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
                    <Banknote className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="transactionValue"
                    className="pl-10"
                    placeholder="0,00"
                    onChange={handleMoneyChange}
                    value={watch('transactionValue')}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Bookmark className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input id="name" className="pl-10" placeholder="Categoria" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Receita Executada</Label>
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
                    className="pl-10"
                    placeholder="Descrição"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Receita Recorrente</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={'outline'} className="w-full">
                Adicionar
              </Button>
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
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Banknote className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="transactionValue"
                    className="pl-10 focus-visible:ring-red-500"
                    placeholder="0,00"
                    onChange={handleMoneyChange}
                    value={watch('transactionValue')}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Bookmark className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="name"
                    className="pl-10 focus-visible:ring-red-500"
                    placeholder="Categoria"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  className="focus-visible:ring-red-500 data-[state=checked]:bg-destructive"
                  id="airplane-mode"
                />
                <Label htmlFor="airplane-mode">Despesa Executada</Label>
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
                    className="pl-10 focus-visible:ring-red-500"
                    placeholder="Descrição"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  className="focus-visible:ring-red-500 data-[state=checked]:bg-destructive"
                  id="airplane-mode"
                />
                <Label htmlFor="airplane-mode">Despesa Executada</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant={'outline'}
                className="w-full focus-visible:ring-red-500"
              >
                Adicionar
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
