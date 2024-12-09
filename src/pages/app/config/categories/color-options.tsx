import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ColorDialog({
  setCodColor,
  selectedColor,
}: {
  setCodColor: (index: number) => void
  selectedColor: number | null
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null,
  )
  const [isOpen, setIsOpen] = useState(false)

  const colors = [
    { color: '#F87171', label: 'Vermelho' },
    { color: '#4ADE80', label: 'Verde' },
    { color: '#60A5FA', label: 'Azul' },
    { color: '#FACC15', label: 'Amarelo' },
    { color: '#E879F9', label: 'Magenta' },
    { color: '#22D3EE', label: 'Ciano' },
    { color: '#F97316', label: 'Laranja' },
    { color: '#C084FC', label: 'Roxo' },
    { color: '#34D399', label: 'Verde Escuro' },
    { color: '#CBD5E1', label: 'Cinza Claro' },
    { color: '#DC2626', label: 'Vermelho Escuro' },
    { color: '#FBBF24', label: 'Dourado' },
    { color: '#92400E', label: 'Marrom' },
    { color: '#0891B2', label: 'Turquesa' },
    { color: '#4F46E5', label: 'Azul Real' },
    { color: '#DB2777', label: 'Rosa Forte' },
    { color: '#64748B', label: 'Cinza Azulado' },
    { color: '#2563EB', label: 'Azul Aço' },
    { color: '#15803D', label: 'Verde Oliva' },
    { color: '#EF4444', label: 'Coral' },
  ]

  // Sincroniza o estado com o valor passado pelo componente pai
  useEffect(() => {
    setSelectedColorIndex(selectedColor)
  }, [selectedColor])

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
              className={`h-8 w-8 rounded-full border-2 ${
                selectedColorIndex === index
                  ? 'border-blue-500'
                  : 'border-transparent'
              }`}
              style={{ backgroundColor: item.color }}
              onClick={() => handleSelectColor(index)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
