import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ColorDialog() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedLabel, setSelectedLabel] =
    useState<string>('Selecione uma Cor')
  const [isOpen, setIsOpen] = useState(false)

  const colors = [
    { color: '#FF0000', label: 'Vermelho' },
    { color: '#00FF00', label: 'Verde' },
    { color: '#0000FF', label: 'Azul' },
    { color: '#FFFF00', label: 'Amarelo' },
    { color: '#FF00FF', label: 'Magenta' },
    { color: '#00FFFF', label: 'Ciano' },
    { color: '#FFA500', label: 'Laranja' },
    { color: '#800080', label: 'Roxo' },
    { color: '#008000', label: 'Verde Escuro' },
    { color: '#000000', label: 'Preto' },
  ]

  const handleSelectColor = (color: string, label: string) => {
    setSelectedColor(color)
    setSelectedLabel(label)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="relative flex items-center pl-10"
        >
          <div
            className="absolute left-3 h-5 w-5 rounded-full border border-gray-300"
            style={{ backgroundColor: selectedColor || '#cccccc' }} // Exibe a cor selecionada ou cor padrão
            aria-hidden="true"
          ></div>
          <span>{selectedLabel}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-80 p-4">
        <DialogTitle>Cor para a Categoria</DialogTitle>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {colors.map((item, index) => (
            <button
              key={index}
              className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 hover:border-gray-500 focus:outline-none"
              style={{ backgroundColor: item.color }}
              onClick={() => handleSelectColor(item.color, item.label)}
              aria-label={item.label}
            >
              {selectedColor === item.color && (
                <span className="absolute h-4 w-4 rounded-full border-2 border-white bg-white"></span>
              )}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
