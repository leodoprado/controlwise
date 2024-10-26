import {
  Banknote,
  Bookmark,
  Briefcase,
  Calculator,
  Calendar,
  Car,
  Cloud,
  Coffee,
  FilePen,
  Gift,
  Globe,
  HandCoins,
  Heart,
  Home,
  Image as ImageIcon,
  MapPin,
  Moon,
  Music,
  Settings,
  ShoppingCart,
  Star,
  Sun,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function IconDialog() {
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null)
  const [selectedLabel, setSelectedLabel] =
    useState<string>('Selecione um Ícone')
  const [isOpen, setIsOpen] = useState(false)

  const icons = [
    { icon: <Banknote className="h-6 w-6" />, label: 'Banco' },
    { icon: <Bookmark className="h-6 w-6" />, label: 'Marcador' },
    { icon: <HandCoins className="h-6 w-6" />, label: 'Moedas' },
    { icon: <FilePen className="h-6 w-6" />, label: 'Arquivo' },
    { icon: <Home className="h-6 w-6" />, label: 'Casa' },
    { icon: <Car className="h-6 w-6" />, label: 'Carro' },
    { icon: <Heart className="h-6 w-6" />, label: 'Coração' },
    { icon: <Star className="h-6 w-6" />, label: 'Estrela' },
    { icon: <Gift className="h-6 w-6" />, label: 'Presente' },
    { icon: <ShoppingCart className="h-6 w-6" />, label: 'Carrinho' },
    { icon: <Calculator className="h-6 w-6" />, label: 'Calculadora' },
    { icon: <Calendar className="h-6 w-6" />, label: 'Calendário' },
    { icon: <Coffee className="h-6 w-6" />, label: 'Café' },
    { icon: <Briefcase className="h-6 w-6" />, label: 'Pasta' },
    { icon: <Globe className="h-6 w-6" />, label: 'Globo' },
    { icon: <Music className="h-6 w-6" />, label: 'Música' },
    { icon: <MapPin className="h-6 w-6" />, label: 'Pin' },
    { icon: <Sun className="h-6 w-6" />, label: 'Sol' },
    { icon: <Moon className="h-6 w-6" />, label: 'Lua' },
    { icon: <Cloud className="h-6 w-6" />, label: 'Nuvem' },
    { icon: <Settings className="h-6 w-6" />, label: 'Configurações' },
  ]

  const handleSelectIcon = (icon: JSX.Element) => {
    setSelectedIcon(icon)
    setSelectedLabel('Ícone Selecionado')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="relative flex items-center space-x-1 pl-10"
        >
          <div className="absolute left-3 flex h-5 w-5 items-center justify-center">
            {selectedIcon || (
              <ImageIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            )}
          </div>
          <span>{selectedLabel}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-80 p-4">
        <DialogTitle>Ícone para a Categoria</DialogTitle>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {icons.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-center rounded-lg p-2 hover:bg-gray-200 focus:outline-none"
              onClick={() => handleSelectIcon(item.icon)}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
