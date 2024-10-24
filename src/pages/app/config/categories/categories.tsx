'use client'

import { DialogTitle } from '@radix-ui/react-dialog'
import {
  BookOpen,
  Car,
  Check,
  ChevronDown,
  Edit,
  Ellipsis,
  HelpCircle,
  Home,
  Menu,
  Plus,
  Trash,
  TreePalm,
  Tv,
} from 'lucide-react' // Add a default icon like HelpCircle for unknown ids
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-categories.svg'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { NoContent } from '@/pages/no-content'

// Define the icon mapping with explicit number key types
const iconMap: { [key: number]: React.ComponentType } = {
  1: Home,
  2: Car,
  3: BookOpen,
  4: Tv,
  5: TreePalm,
  6: Ellipsis,
}

// Define the color mapping
const colorMap: { [key: number]: string } = {
  1: 'bg-red-500', // Red
  2: 'bg-blue-500', // Blue
  3: 'bg-green-500', // Green
  4: 'bg-yellow-500', // Yellow
  5: 'bg-purple-500', // Purple
  6: 'bg-gray-500', // Gray
}

// Add a fallback icon for any unknown idIcone
const getIconById = (idIcone: number) => {
  return iconMap[idIcone] || HelpCircle // Fallback to HelpCircle if idIcone is unknown
}

// Add a fallback color for unknown idColor
const getColorById = (idColor: number) => {
  return colorMap[idColor] || 'bg-gray-500' // Fallback to gray if idColor is unknown
}

const categories = [
  {
    id: 1,
    nome: 'Casa',
    tipo: 'Despesa',
    idIcone: 1,
    idColor: 1,
    descricao: '',
  },
  {
    id: 2,
    nome: 'Carro',
    tipo: 'Despesa',
    idIcone: 2,
    idColor: 2,
    descricao: '',
  },
  {
    id: 3,
    nome: 'Educação',
    tipo: 'Despesa',
    idIcone: 3,
    idColor: 3,
    descricao: '',
  },
  {
    id: 4,
    nome: 'Eletrônico',
    tipo: 'Despesa',
    idIcone: 4,
    idColor: 4,
    descricao: '',
  },
  {
    id: 5,
    nome: 'Lazer',
    tipo: 'Despesa',
    idIcone: 5,
    idColor: 5,
    descricao: '',
  },
  {
    id: 6,
    nome: 'Outros',
    tipo: 'Despesa',
    idIcone: 6,
    idColor: 6,
    descricao: '',
  },
]

const options = [
  { value: 'despesas', label: 'Categorias de Despesas' },
  { value: 'receitas', label: 'Categorias de Receitas' },
]

export function CCategoryPage() {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('despesas')

  const filteredCategories = categories.filter((categorie) =>
    selectedCategory === 'despesas'
      ? categorie.tipo === 'Despesa'
      : categorie.tipo === 'Receita',
  )

  return (
    <>
      <Helmet title="Categorias" />

      <div className="flex gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={
                selectedCategory === 'despesas' ? 'destructive' : 'default'
              }
              role="combobox"
              aria-expanded={open}
              className="flex w-[220px] items-center justify-between rounded-full border font-bold"
            >
              {selectedCategory
                ? options.find((option) => option.value === selectedCategory)
                    ?.label
                : 'Selecione uma categoria...'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        setSelectedCategory(currentValue)
                        setOpen(false)
                      }}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          selectedCategory === option.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              Adicionar Nova Categoria
              <Plus className="h-5 w-5" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>
              {selectedCategory === 'despesas'
                ? 'Adicionar Categoria de Despesas'
                : 'Adicionar Categoria de Receitas'}
            </DialogTitle>

            <div className="mt-4">
              {selectedCategory === 'despesas' ? (
                <p>Formulário para cadastrar uma nova Categoria de Despesas.</p>
              ) : (
                <p>Formulário para cadastrar uma nova Categoria de Receitas.</p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2.5">
        {filteredCategories.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="w-full">
                  <TableHead className="flex-1">Nome</TableHead>
                  <TableHead className="flex-1">Ícone</TableHead>
                  <TableHead className="flex-1">Cor</TableHead>
                  <TableHead className="flex items-center justify-end">
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((categorie) => {
                  const IconComponent = getIconById(categorie.idIcone)
                  const ColorClass = getColorById(categorie.idColor)

                  return (
                    <TableRow key={categorie.id}>
                      <TableCell className="font-mono text-xs font-medium">
                        {categorie.nome}
                      </TableCell>
                      <TableCell className="font-mono text-xs font-medium">
                        {IconComponent ? <IconComponent /> : 'N/A'}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <span
                          className={`inline-block h-6 w-6 rounded-full ${ColorClass}`}
                        ></span>
                      </TableCell>

                      <TableCell className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="xs">
                              <Menu className="h-6 w-6" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="border-5 mt-1 w-56 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
                          >
                            <DropdownMenuItem className="cursor-pointer gap-2 p-3">
                              <Edit className="h-4 w-4" /> Editar Categoria
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer gap-2 p-3">
                              <Trash className="h-4 w-4" /> Excluir Categoria
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <NoContent
            contentTitle="Ops! Sem Categorias Registradas."
            imageSrc={nocontent}
            tooltipContent="Cadastre as Categorias para vincular nas Movimentações."
          ></NoContent>
        )}
      </div>
    </>
  )
}
