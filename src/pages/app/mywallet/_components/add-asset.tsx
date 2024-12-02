import { Tabs } from '@radix-ui/react-tabs'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  ArrowDown,
  ArrowUp,
  Banknote,
  Calendar,
  HandCoins,
  Tag,
  Tags,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getAssets } from '@/api/GET/get-assets'
import { createMovement } from '@/api/POST/post-movement'
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
import { TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DatePickerDemo } from '../../myexpenses/_components/date-picker'
import { Asset } from './asset'
import { AssetTypes } from './asset-types'

// Máscara de valor - Esquerda para a direita
function insertMaskInMoney(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '')
  const formattedValue = (Number(onlyNumbers) / 100).toFixed(2)
  return formattedValue.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function allowOnlyPositiveIntegers(value: string): string {
  return value.replace(/\D/g, '')
}

const movementSchema = z.object({
  valorUnitario: z.string(),
  quantidade: z.number(),
  data: z.date(),
  tipoMovimento: z.enum(['COMPRA', 'VENDA']),
  assetId: z.string(),
})

type MovementSchema = z.infer<typeof movementSchema>

export function AddAsset() {
  const [movementType, setMovementType] = useState<'COMPRA' | 'VENDA'>('COMPRA')
  const [selectedAssetType, setSelectedAssetType] = useState<string>('ACAO')
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<MovementSchema>()

  const { data: assets, isLoading } = useQuery({
    queryKey: ['assets'],
    queryFn: getAssets,
    staleTime: Infinity,
  })

  const { mutateAsync: createMovementFn } = useMutation({
    mutationFn: createMovement,
  })

  async function handleMovement(data: MovementSchema) {
    const valorUnitario = parseFloat(
      data.valorUnitario.replace(/\./g, '').replace(',', '.'),
    )

    if (!selectedAssetId) {
      toast.error('Selecione um ativo antes de registrar a movimentação.')
      return
    }

    if (!selectedDate) {
      toast.error('Selecione uma data para continuar.')
      return
    }

    try {
      await createMovementFn({
        valorUnitario,
        quantidade: data.quantidade,
        data: selectedDate,
        tipoMovimento: movementType,
        assetId: selectedAssetId,
      })
      reset()
      setSelectedDate(undefined)
      setSelectedAssetId(null)
      toast.success('Sucesso ao cadastrar Movimentação!')
    } catch (error) {
      toast.error('Erro ao cadastrar Movimentação!')
    }
  }

  const handleAssetTypeSelect = (id: string) => {
    setSelectedAssetType(id)
  }

  const handleSelectAsset = (id: string) => {
    setSelectedAssetId(id)
  }

  return (
    <DialogContent
      aria-describedby="dialog-description"
      className="mx-auto flex w-[400px] max-w-[90vw] items-center justify-center"
    >
      <Tabs defaultValue="COMPRA" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="COMPRA" onClick={() => setMovementType('COMPRA')}>
            <ArrowDown className="mr-1 h-4 w-4 text-primary" /> Comprar
          </TabsTrigger>
          <TabsTrigger value="VENDA" onClick={() => setMovementType('VENDA')}>
            <ArrowUp className="mr-1 h-4 w-4 text-destructive" /> Vender
          </TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit(handleMovement)}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                {movementType === 'COMPRA' ? (
                  <>
                    <ArrowDown className="mr-2 h-5 w-5 text-primary" />
                    Registrar Compra
                  </>
                ) : (
                  <>
                    <ArrowUp className="mr-2 h-5 w-5 text-destructive" />
                    Registrar Venda
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Tag className="h-4 w-4 text-gray-500" />
                  </span>
                  <AssetTypes onSelect={handleAssetTypeSelect} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Tags className="h-4 w-4 text-gray-500" />
                  </span>
                  <Asset
                    assetType={selectedAssetType}
                    assets={assets || []}
                    onSelectAsset={(id) => {
                      handleSelectAsset(id)
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <Banknote className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input
                      id="valorUnitario"
                      className="pl-10"
                      placeholder="Preço em R$"
                      {...register('valorUnitario', {
                        required: 'O valor é obrigatório',
                        validate: (value) =>
                          parseFloat(
                            value.replace(/\./g, '').replace(',', '.'),
                          ) > 0 || 'O valor deve ser maior que 0',
                      })}
                      onChange={(e) => {
                        const maskedValue = insertMaskInMoney(e.target.value)
                        setValue('valorUnitario', maskedValue, {
                          shouldValidate: true,
                        })
                      }}
                    />
                  </div>
                  <div className="relative w-24">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <HandCoins className="h-4 w-4 text-gray-500" />
                    </span>
                    <Input
                      id="quantidade"
                      {...register('quantidade', {
                        valueAsNumber: true, // Converte automaticamente o valor para número
                        required: 'A quantidade é obrigatória',
                        validate: (value) =>
                          value > 0 || 'A quantidade deve ser maior que 0',
                      })}
                      className="pl-10"
                      placeholder="Qtd"
                      onChange={(e) => {
                        const maskedValue = allowOnlyPositiveIntegers(
                          e.target.value,
                        )
                        setValue('quantidade', Number(maskedValue), {
                          shouldValidate: true,
                        })
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </span>
                  <DatePickerDemo
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                variant="outline"
                className="w-full"
                disabled={
                  isSubmitting ||
                  isLoading ||
                  !selectedAssetId ||
                  !selectedDate ||
                  !watch('valorUnitario') ||
                  !watch('quantidade')
                }
              >
                Adicionar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Tabs>
    </DialogContent>
  )
}
