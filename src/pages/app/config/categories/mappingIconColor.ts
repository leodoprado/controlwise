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

// Mapeamento de Cores
export const colorMap: { [key: number]: string } = {
  0: '#F87171',
  1: '#4ADE80',
  2: '#60A5FA',
  3: '#FACC15',
  4: '#E879F9',
  5: '#22D3EE',
  6: '#F97316',
  7: '#C084FC',
  8: '#34D399',
  9: '#CBD5E1',
  10: '#DC2626',
  11: '#FBBF24',
  12: '#92400E',
  13: '#0891B2',
  14: '#4F46E5',
  15: '#DB2777',
  16: '#64748B',
  17: '#2563EB',
  18: '#15803D',
  19: '#EF4444',
}

// Funções para acessar os ícones e cores
export const getIconById = (idIcone: number) => iconMap[idIcone] || HelpCircle

export const getColorById = (idColor: number) =>
  colorMap[idColor] || 'bg-gray-500'
