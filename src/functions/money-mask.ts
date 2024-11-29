export const insertMaskInMoney = (value: string): string => {
  const noMask = value.replace(/\D/g, '')

  if (noMask.length === 0) return '0,00'

  const integerPart = noMask.slice(0, -2).replace(/^0+/, '') || '0'
  const decimalPart = noMask.slice(-2)

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return `${formattedInteger},${decimalPart}`
}
