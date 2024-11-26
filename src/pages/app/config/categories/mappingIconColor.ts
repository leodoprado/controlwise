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
  HelpCircle,
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

// Mapeamento de ícones
export const iconMap: { [key: number]: React.ComponentType } = {
  0: ShoppingCart,
  1: Gift,
  2: Car,
  3: Home,
  4: Heart,
  5: TreePalm,
  6: Coffee,
  7: Calculator,
  8: Calendar,
  9: Music,
  10: MapPin,
  11: Sun,
  12: Moon,
  13: Cloud,
  14: Bookmark,
  15: Utensils,
  16: Banknote,
  17: Briefcase,
  18: HandCoins,
  19: PiggyBank,
}

// Mapeamento de cores
export const colorMap: { [key: number]: string } = {
  0: '#FF0000',
  1: '#00FF00',
  2: '#0000FF',
  3: '#FFFF00',
  4: '#FF00FF',
  5: '#00FFFF',
  6: '#FFA500',
  7: '#800080',
  8: '#008000',
  9: '#B7C0C9',
  10: '#B22222',
  11: '#FFD700',
  12: '#8B4513',
  13: '#00CED1',
  14: '#6A5ACD',
  15: '#FF1493',
  16: '#708090',
  17: '#4682B4',
  18: '#556B2F',
  19: '#F08080',
}

// Funções para acessar os ícones e cores
export const getIconById = (idIcone: number) => iconMap[idIcone] || HelpCircle

export const getColorById = (idColor: number) =>
  colorMap[idColor] || 'bg-gray-500'
