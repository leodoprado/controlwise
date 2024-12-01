'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandItem, CommandList } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const assetTypes = [
  { id: 'ACAO', label: 'Ações' },
  { id: 'FII', label: 'FIIs' },
  { id: 'CRIPTOMOEDA', label: 'Criptomoedas' },
  { id: 'STOCK', label: 'Stock' },
  { id: 'BDR', label: 'BDR' },
]

export function AssetTypes({ onSelect }: { onSelect: (id: string) => void }) {
  const [selectedAssetType, setSelectedAssetType] = useState<string>('ACAO')
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (id: string) => {
    setSelectedAssetType(id)
    setIsOpen(false)
    onSelect(id)
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-full justify-start pl-10 text-left font-normal"
        >
          <div className="flex items-center gap-2">
            <span>
              {selectedAssetType
                ? assetTypes.find((type) => type.id === selectedAssetType)
                    ?.label
                : 'Selecione um tipo de Ativo...'}
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
            {assetTypes.map((type) => (
              <CommandItem
                key={type.id}
                onSelect={() => handleSelect(type.id)}
                className="cursor-pointer"
              >
                {type.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
