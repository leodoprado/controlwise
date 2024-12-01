'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

type AssetProps = {
  assetType: string
  assets: Array<{
    id: string
    ticker: string
    nome: string
    tipo: string
  }>
  onSelectAsset: (id: string) => void // Função para enviar o ID do ativo selecionado
}

export function Asset({
  assetType = 'ACAO',
  assets,
  onSelectAsset,
}: AssetProps) {
  const [filteredAssets, setFilteredAssets] = useState<typeof assets>([])
  const [selectedAsset, setSelectedAsset] = useState<{
    id: string
    nome: string
  } | null>(null)
  const [isOpen, setIsOpen] = useState(false) // Estado para controlar o Popover

  // Filtra os ativos sempre que `assets` ou `assetType` mudarem
  useEffect(() => {
    const activeType = assetType || 'ACAO' // Define "ACAO" como padrão se o tipo estiver indefinido
    if (assets && assets.length > 0) {
      const filtered = assets.filter((asset) => asset.tipo === activeType)
      setFilteredAssets(filtered)
      setSelectedAsset(null) // Reseta a seleção ao trocar o tipo
    }
  }, [assets, assetType]) // Garante que só rode quando `assets` estiverem disponíveis

  const handleSelectAsset = (id: string, nome: string) => {
    setSelectedAsset({ id, nome }) // Armazena o ID e nome do ativo selecionado
    onSelectAsset(id) // Envia o ID para o componente pai
    setIsOpen(false) // Fecha o Popover após a seleção
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-start pl-10 text-left font-normal"
        >
          <div className="flex items-center gap-2">
            <span>
              {selectedAsset
                ? selectedAsset.nome
                : filteredAssets.length > 0
                  ? 'Selecione um Ativo...'
                  : 'Nenhum ativo disponível'}{' '}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          <CommandList>
            {filteredAssets.map((asset) => (
              <CommandItem
                key={asset.id} // Use o campo `id` como chave
                onSelect={() => handleSelectAsset(asset.id, asset.nome)} // Envia o ID correto
                className="cursor-pointer"
              >
                {asset.ticker + ' - ' + asset.nome}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
