export interface ColorData {
  id: string
  name: string
  hex: string
  category: 'primary' | 'pastel' | 'bright' | 'neutral'
}

export const THREAD_COLORS: ColorData[] = [
  // Primary Colors (softer versions)
  { id: 'soft-red', name: 'Soft Rose', hex: '#FFB3BA', category: 'primary' },
  { id: 'soft-blue', name: 'Soft Blue', hex: '#B3D9FF', category: 'primary' },
  { id: 'soft-yellow', name: 'Soft Lemon', hex: '#FDFFB6', category: 'primary' },
  { id: 'soft-green', name: 'Soft Mint', hex: '#A8E6CF', category: 'primary' },
  
  // Pastel Colors (enhanced feminine palette)
  { id: 'blush-pink', name: 'Blush Pink', hex: '#FFC1CC', category: 'pastel' },
  { id: 'lavender', name: 'Lavender', hex: '#E6E6FA', category: 'pastel' },
  { id: 'mint-cream', name: 'Mint Cream', hex: '#A8E6CF', category: 'pastel' },
  { id: 'peach', name: 'Soft Peach', hex: '#FFD89B', category: 'pastel' },
  { id: 'sky-blue', name: 'Sky Blue', hex: '#B3D9FF', category: 'pastel' },
  { id: 'buttercream', name: 'Buttercream', hex: '#F9F7A4', category: 'pastel' },
  { id: 'lilac', name: 'Lilac', hex: '#C8A2C8', category: 'pastel' },
  { id: 'rose-gold', name: 'Rose Gold', hex: '#E8B4B8', category: 'pastel' },
  
  // Bright Colors (gentler versions)
  { id: 'coral', name: 'Soft Coral', hex: '#FFB6C1', category: 'bright' },
  { id: 'apricot', name: 'Apricot', hex: '#FFD89B', category: 'bright' },
  { id: 'sage', name: 'Sage Green', hex: '#B8E6B8', category: 'bright' },
  { id: 'periwinkle', name: 'Periwinkle', hex: '#B19CD9', category: 'bright' },
  { id: 'dusty-pink', name: 'Dusty Pink', hex: '#F7B2D3', category: 'bright' },
  
  // Neutral Colors (warmer tones)
  { id: 'soft-black', name: 'Soft Black', hex: '#6B7280', category: 'neutral' },
  { id: 'white', name: 'Pure White', hex: '#FEFEFE', category: 'neutral' },
  { id: 'warm-gray', name: 'Warm Gray', hex: '#D1D5DB', category: 'neutral' },
  { id: 'taupe', name: 'Taupe', hex: '#A78B5B', category: 'neutral' },
  { id: 'slate-blue', name: 'Slate Blue', hex: '#8B9DC3', category: 'neutral' },
]

export const TAG_BACKGROUND_COLORS: ColorData[] = [
  { id: 'white', name: 'Pure White', hex: '#FEFEFE', category: 'neutral' },
  { id: 'cream', name: 'Warm Cream', hex: '#FFF8E7', category: 'neutral' },
  { id: 'blush', name: 'Blush', hex: '#FFF0F5', category: 'pastel' },
  { id: 'lavender-mist', name: 'Lavender Mist', hex: '#F5F0FF', category: 'pastel' },
  { id: 'mint-cream', name: 'Mint Cream', hex: '#F0FFF4', category: 'pastel' },
  { id: 'sky-mist', name: 'Sky Mist', hex: '#F0F8FF', category: 'pastel' },
  { id: 'rose-quartz', name: 'Rose Quartz', hex: '#F8F4FF', category: 'pastel' },
  { id: 'peach-cream', name: 'Peach Cream', hex: '#FFF0F8', category: 'pastel' },
]

export const METAL_RING_COLORS: ColorData[] = [
  { id: 'soft-silver', name: 'Soft Silver', hex: '#D1D5DB', category: 'neutral' },
  { id: 'champagne-gold', name: 'Champagne Gold', hex: '#F7E7CE', category: 'bright' },
  { id: 'rose-gold', name: 'Rose Gold', hex: '#E8B4B8', category: 'pastel' },
  { id: 'warm-brass', name: 'Warm Brass', hex: '#D4AF37', category: 'neutral' },
  { id: 'soft-black', name: 'Soft Black', hex: '#6B7280', category: 'neutral' },
  { id: 'periwinkle', name: 'Periwinkle', hex: '#B19CD9', category: 'primary' },
  { id: 'soft-coral', name: 'Soft Coral', hex: '#FFB6C1', category: 'primary' },
  { id: 'sage', name: 'Sage Green', hex: '#B8E6B8', category: 'primary' },
  { id: 'dusty-lavender', name: 'Dusty Lavender', hex: '#C8A2C8', category: 'bright' },
  { id: 'blush-pink', name: 'Blush Pink', hex: '#F7B2D3', category: 'bright' },
]

export const COLOR_CATEGORIES = [
  { value: 'all', label: 'All Colors' },
  { value: 'primary', label: 'Primary' },
  { value: 'pastel', label: 'Pastel' },
  { value: 'bright', label: 'Bright' },
  { value: 'neutral', label: 'Neutral' },
]
