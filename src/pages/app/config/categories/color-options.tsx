import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ColorDialog({
  setCodColor,
}: {
  setCodColor: (index: number) => void
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null,
  )
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
    { color: '#b7c0c9', label: 'Cinza Claro' },
    { color: '#B22222', label: 'Vermelho Escuro' },
    { color: '#FFD700', label: 'Dourado' },
    { color: '#8B4513', label: 'Marrom' },
    { color: '#00CED1', label: 'Turquesa' },
    { color: '#6A5ACD', label: 'Azul Real' },
    { color: '#FF1493', label: 'Rosa Forte' },
    { color: '#708090', label: 'Cinza Azulado' },
    { color: '#4682B4', label: 'Azul Aço' },
    { color: '#556B2F', label: 'Verde Oliva' },
    { color: '#F08080', label: 'Coral' },
  ]

  const handleSelectColor = (index: number) => {
    setSelectedColorIndex(index)
    setIsOpen(false)
    setCodColor(index) // Passa o índice para o componente pai
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative flex items-center pl-10">
          <div
            className="absolute left-3 h-5 w-5 rounded-full border border-gray-300"
            style={{
              backgroundColor:
                selectedColorIndex !== null
                  ? colors[selectedColorIndex].color
                  : '#cccccc',
            }}
          ></div>
          <span>
            {selectedColorIndex !== null
              ? 'Cor Selecionada'
              : 'Selecione uma Cor'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-80 p-4">
        <DialogTitle>Cor para a Categoria</DialogTitle>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {colors.map((item, index) => (
            <button
              key={index}
              className="h-8 w-8 rounded-full border-2"
              style={{ backgroundColor: item.color }}
              onClick={() => handleSelectColor(index)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
