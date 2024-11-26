'use client'

import { useQuery } from '@tanstack/react-query'
import { Check, ChevronDown, HelpCircle, Plus, Trash } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { getCategories } from '@/api/GET/get-categories'
import nocontent from '@/assets/nc-categories.svg'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
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

import { getColorById, getIconById } from '../categories/mappingIconColor'
import { DeleteCategorie } from './delete-categorie'
import { FormCategorieExpense } from './form-categorie-expense'
import { FormCategorieRevenue } from './form-categorie-revenue'

const options = [
  { value: 'despesas', label: 'Categorias de Despesas' },
  { value: 'receitas', label: 'Categorias de Receitas' },
]

export function CCategoryPage() {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('despesas')
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const filteredCategories =
    categories?.filter((categorie) =>
      selectedCategory === 'despesas'
        ? categorie.tipo === 'DESPESA'
        : categorie.tipo === 'RECEITA',
    ) || []

  return (
    <>
      <Helmet title="Categorias" />

      {/* Header with category selector and add button */}
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
              {options.find((option) => option.value === selectedCategory)
                ?.label || 'Selecione uma categoria...'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandList>
                <CommandGroup className="p-0">
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        setSelectedCategory(currentValue)
                        setOpen(false)
                      }}
                      className="cursor-pointer p-3"
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
          {selectedCategory === 'despesas' ? (
            <FormCategorieExpense />
          ) : (
            <FormCategorieRevenue />
          )}
        </Dialog>
      </div>

      {/* Category List */}
      <div className="space-y-2.5">
        {isLoadingCategories ? (
          <div className="rounded-md border p-4">
            <Skeleton className="h-8 w-full" />
          </div>
        ) : filteredCategories.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="flex-1">Nome</TableHead>
                  <TableHead className="flex-1">Ícone</TableHead>
                  <TableHead className="flex-1">Cor</TableHead>
                  <TableHead className="mr-2 flex items-center justify-end">
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((categorie) => {
                  const IconComponent = getIconById(categorie.codIcone)
                  const ColorClass = getColorById(categorie.codColor)

                  return (
                    <TableRow key={categorie.id}>
                      <TableCell className="font-mono text-xs font-medium">
                        {categorie.nome}
                      </TableCell>
                      <TableCell>
                        {IconComponent ? <IconComponent /> : <HelpCircle />}
                      </TableCell>
                      <TableCell>
                        <span
                          className="inline-block h-6 w-6 rounded-full"
                          style={{ backgroundColor: ColorClass }}
                        ></span>
                      </TableCell>
                      <TableCell className="flex justify-end gap-1">
                        <Dialog
                          open={isDeleteOpen}
                          onOpenChange={setIsDeleteOpen}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="xs"
                              className="flex items-center"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DeleteCategorie
                            categorieId={categorie.id}
                            open={isDeleteOpen}
                          />
                        </Dialog>
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
          />
        )}
      </div>
    </>
  )
}
