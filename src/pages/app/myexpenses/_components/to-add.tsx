import {
  Banknote,
  Calculator,
  CircleDollarSignIcon,
  FilePen,
  Plus,
  Settings,
  TrendingDown,
  TrendingUp,
  Wallet,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DatePickerDemo } from './date-picker'

export function ToAdd() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'default'}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          Adicionar
          <Plus className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="border-5 mt-1 w-56 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
      >
        {/* Dialog wrapping the DialogTrigger and DialogContent */}
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="cursor-pointer p-3"
              onSelect={(e) => e.preventDefault()} // Previne que o Dropdown feche ao abrir o Dialog
            >
              <Banknote className="mr-2 h-4 w-4" /> Adicionar Movimentação
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="mx-auto flex w-[400px] max-w-[90vw] items-center justify-center">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">
                  <TrendingUp className="mr-1 h-4 w-4 text-primary" /> Receita
                </TabsTrigger>
                <TabsTrigger value="password">
                  <TrendingDown className="mr-1 h-4 w-4 text-destructive" />{' '}
                  Despesa
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
                          <Calculator className="h-4 w-4 text-gray-500" />
                        </span>
                        <Input id="name" className="pl-10" placeholder="0,00" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        className="data-[state=checked]:bg-destructive"
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
                          className="pl-10"
                          placeholder="Descrição"
                        />
                      </div>
                    </div>

                    <div className="items-top flex space-x-2">
                      <div className="flex items-center space-x-2">
                        <Switch
                          className="data-[state=checked]:bg-destructive"
                          id="airplane-mode"
                        />
                        <Label htmlFor="airplane-mode">Despesa Executada</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant={'outline'} className="w-full">
                      Adicionar
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>

        <DropdownMenuItem className="cursor-pointer p-3">
          <Wallet className="mr-2 h-4 w-4" /> Adicionar Planejamento
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer p-3">
          <Settings className="mr-2 h-4 w-4" /> Adicionar Meta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
