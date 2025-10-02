// Application constants
export const APP_CONFIG = {
  name: 'Ms. Joy Label Design',
  description: 'Custom embroidered name tags for backpacks and lunch boxes',
  contact: {
    instagram: 'msjoy_labeldesign',
    whatsapp: '17787230722'
  }
} as const

export const DISCOUNT_RULES = {
  bulk5: { minItems: 5, discount: 0.10 },
  bulk10: { minItems: 10, discount: 0.15 }
} as const

export const DEFAULT_TAG_DESIGN = {
  text: 'Your Name',
  fontSize: 16,
  fontFamily: 'Arial, sans-serif',
  textColor: '#000000',
  backgroundColor: '#FFFFFF',
  selectedIcon: null,
  selectedIcon2: null,
  iconSize: 24,
  metalRingColor: '#C0C0C0',
  letterColors: []
} as const
