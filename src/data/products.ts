export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  dimensions: {
    width: number
    height: number
  }
  features: string[]
  icon: string
  preview: string // emoji or description for preview
  layout: 'single-icon' | 'dual-icons' | 'text-only'
  maxTextLength: number
  defaultSettings: {
    fontSize: number
    fontFamily: string
    backgroundColor: string
    textColor: string
  }
}

export const PRODUCT_TYPES: ProductType[] = [
  {
    id: 'standard-2.5cm',
    name: 'Standard 2.5cm Tag',
    description: 'Our most popular! Dual icons with embroidered lettering in your choice of color',
    price: 10,
    dimensions: { width: 100, height: 60 }, // Width fixed, height accommodates content
    features: [
      'Two icons (one on each side)',
      'Custom embroidered lettering',
      'Choice of thread colors',
      'Waterproof material',
      'Perfect for backpacks & lunch boxes'
    ],
    icon: '🏷️',
    preview: '🐾 Name 🐾',
    layout: 'dual-icons',
    maxTextLength: 12,
    defaultSettings: {
      fontSize: 16,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    }
  },
  {
    id: 'large-3cm',
    name: 'Large 3cm Tag',
    description: 'Bigger size with single icon and larger text area',
    price: 12,
    dimensions: { width: 120, height: 80 }, // Width fixed, height accommodates content
    features: [
      'Single icon with text',
      'Larger text area',
      'Custom embroidered lettering',
      'Choice of thread colors',
      'Great for older kids'
    ],
    icon: '📏',
    preview: '🐶 Name',
    layout: 'single-icon',
    maxTextLength: 15,
    defaultSettings: {
      fontSize: 20,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    }
  },
  {
    id: 'text-only',
    name: 'Text Only Tag',
    description: 'Clean and simple with just embroidered lettering',
    price: 8,
    dimensions: { width: 100, height: 50 }, // Width fixed, height accommodates content
    features: [
      'Text only design',
      'Custom embroidered lettering',
      'Choice of thread colors',
      'Minimalist style',
      'Budget-friendly option'
    ],
    icon: '📝',
    preview: 'Name',
    layout: 'text-only',
    maxTextLength: 20,
    defaultSettings: {
      fontSize: 16,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    }
  }
]

export const getProductById = (id: string): ProductType | undefined => {
  return PRODUCT_TYPES.find(product => product.id === id)
}

export const getDefaultProduct = (): ProductType => {
  return PRODUCT_TYPES[0] // Standard 2.5cm tag
}
