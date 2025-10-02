// Utility functions
export const generateId = (): string => {
  return Date.now().toString()
}

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const generateRainbowColors = (text: string): string[] => {
  const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3']
  return text.split('').map((_, index) => rainbowColors[index % rainbowColors.length])
}

export const calculateTagWidth = (
  baseWidth: number,
  textLength: number,
  iconWidth: number,
  padding: number = 40,
  minWidth?: number,
  maxWidth: number = 400
): number => {
  const minW = minWidth || baseWidth
  const calculatedWidth = Math.max(minW, Math.min(maxWidth, baseWidth + (textLength * 6) + iconWidth + padding))
  return calculatedWidth
}
