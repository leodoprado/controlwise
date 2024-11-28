import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getParameters } from '@/api/GET/get-parameters'
import { updateParameters } from '@/api/PUT/update-parameters'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const parametersSchema = z.object({
  anoReferencia: z.number(),
})

type ParameterSchema = z.infer<typeof parametersSchema>

export function CParametersPage() {
  const queryClient = useQueryClient()

  const { data: parameters } = useQuery({
    queryKey: ['parameters'],
    queryFn: getParameters,
    staleTime: Infinity,
  })

  const { handleSubmit, reset } = useForm<ParameterSchema>({
    resolver: zodResolver(parametersSchema),
  })

  function updatedParametersCache({ anoReferencia }: ParameterSchema) {
    const cached = queryClient.getQueryData<ParameterSchema>(['parameters'])

    if (cached) {
      queryClient.setQueryData(['parameters'], {
        ...cached,
        anoReferencia,
      })
    }

    return cached
  }

  const { mutateAsync: updateParametersFn } = useMutation({
    mutationFn: updateParameters,
    onMutate({ anoReferencia }) {
      const previousParameters = updatedParametersCache({ anoReferencia })
      return { previousParameters }
    },
  })

  async function handleUpdateParameters(data: ParameterSchema) {
    const { anoReferencia } = data

    try {
      await updateParametersFn({
        anoReferencia,
      })

      toast.success('Parâmetros atualizados com sucesso!')
      reset({ ...data })
    } catch {
      toast.error('Falha ao atualizar parâmetros!')
    }
  }

  const [open, setOpen] = useState(false)

  const handleSelectYear = async (year: number) => {
    try {
      setOpen(false)
      await updateParametersFn({ anoReferencia: year })
      toast.success('Parâmetro atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar o parâmetro!')
    }
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 7 }, (_, i) => currentYear - 3 + i) // Gera anos disponíveis para seleção

  return (
    <>
      <Helmet title="Parâmetros" />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Minhas Finanças</CardTitle>
          <CardDescription>
            Configure os parâmetros referentes ao módulo.{' '}
          </CardDescription>
          <form onSubmit={handleSubmit(handleUpdateParameters)}>
            <CardContent className="mt-3 flex items-center gap-4">
              <Label htmlFor="nome" className="font-semibold">
                Data de Referência:
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    role="combobox"
                    aria-expanded={open}
                    className="flex w-[140px] items-center justify-center gap-1 rounded-full border font-semibold"
                  >
                    {parameters?.anoReferencia}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-2">
                  <ul className="space-y-2">
                    {years.map((year) => (
                      <li
                        key={year}
                        className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                        onClick={() => handleSelectYear(year)}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </CardContent>
          </form>
        </CardHeader>
      </Card>
    </>
  )
}
