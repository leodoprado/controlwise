import {
  Banknote,
  Bookmark,
  Briefcase,
  Calculator,
  Calendar,
  Car,
  Cloud,
  Coffee,
  Gift,
  HandCoins,
  Heart,
  Home,
  MapPin,
  Moon,
  Music,
  PiggyBank,
  ShoppingCart,
  Sun,
  TreePalm,
  Utensils,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function IconDialog({
  setCodIcone,
}: {
  setCodIcone: (index: number) => void
}) {
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(
    null,
  )
  const [isOpen, setIsOpen] = useState(false)

  const icons = [
    { icon: <ShoppingCart className="h-6 w-6" />, label: 'Supermercado' },
    { icon: <Gift className="h-6 w-6" />, label: 'Presentes' },
    { icon: <Car className="h-6 w-6" />, label: 'Transporte' },
    { icon: <Home className="h-6 w-6" />, label: 'Moradia' },
    { icon: <Heart className="h-6 w-6" />, label: 'Saúde' },
    { icon: <TreePalm className="h-6 w-6" />, label: 'Lazer' },
    { icon: <Coffee className="h-6 w-6" />, label: 'Alimentação' },
    { icon: <Calculator className="h-6 w-6" />, label: 'Impostos' },
    { icon: <Calendar className="h-6 w-6" />, label: 'Recorrente' },
    { icon: <Music className="h-6 w-6" />, label: 'Entretenimento' },
    { icon: <MapPin className="h-6 w-6" />, label: 'Viagens' },
    { icon: <Sun className="h-6 w-6" />, label: 'Férias' },
    { icon: <Moon className="h-6 w-6" />, label: 'Residencial' },
    { icon: <Cloud className="h-6 w-6" />, label: 'Tecnologia' },
    { icon: <Bookmark className="h-6 w-6" />, label: 'Educação' },
    { icon: <Utensils className="h-6 w-6" />, label: 'Refeições' },
    { icon: <Banknote className="h-6 w-6" />, label: 'Banco' },
    { icon: <Briefcase className="h-6 w-6" />, label: 'Salário' },
    { icon: <HandCoins className="h-6 w-6" />, label: 'Investimentos' },
    { icon: <PiggyBank className="h-6 w-6" />, label: 'Poupança' },
  ]

  const handleSelectIcon = (index: number) => {
    setSelectedIconIndex(index)
    setIsOpen(false)
    setCodIcone(index) // Passa o índice para o componente pai
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative flex items-center pl-10">
          <div className="absolute left-3">
            {selectedIconIndex !== null ? (
              icons[selectedIconIndex].icon
            ) : (
              <Banknote className="h-5 w-5" />
            )}
          </div>
          <span>
            {selectedIconIndex !== null
              ? 'Ícone Selecionado'
              : 'Selecione um Ícone'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-80 p-4">
        <DialogTitle>Ícone para a Categoria</DialogTitle>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {icons.map((item, index) => (
            <button
              key={index}
              className="rounded-lg p-2 hover:bg-gray-200"
              onClick={() => handleSelectIcon(index)}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
