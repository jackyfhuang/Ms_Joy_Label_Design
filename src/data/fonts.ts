export interface FontData {
  id: string
  name: string
  fontFamily: string
  description: string
  category: 'playful' | 'elegant' | 'bold' | 'handwritten'
}

export const FONTS: FontData[] = [
  {
    id: 'arial',
    name: 'Arial',
    fontFamily: 'Arial, sans-serif',
    description: 'Clean and readable',
    category: 'bold'
  },
  {
    id: 'comic-sans',
    name: 'Comic Sans',
    fontFamily: 'Comic Sans MS, cursive',
    description: 'Fun and playful',
    category: 'playful'
  },
  {
    id: 'times',
    name: 'Times New Roman',
    fontFamily: 'Times New Roman, serif',
    description: 'Classic and elegant',
    category: 'elegant'
  },
  {
    id: 'georgia',
    name: 'Georgia',
    fontFamily: 'Georgia, serif',
    description: 'Friendly serif',
    category: 'elegant'
  },
  {
    id: 'trebuchet',
    name: 'Trebuchet MS',
    fontFamily: 'Trebuchet MS, sans-serif',
    description: 'Modern and clean',
    category: 'bold'
  },
  {
    id: 'courier',
    name: 'Courier New',
    fontFamily: 'Courier New, monospace',
    description: 'Typewriter style',
    category: 'bold'
  },
  {
    id: 'brush-script',
    name: 'Brush Script',
    fontFamily: 'Brush Script MT, cursive',
    description: 'Handwritten look',
    category: 'handwritten'
  },
  {
    id: 'impact',
    name: 'Impact',
    fontFamily: 'Impact, sans-serif',
    description: 'Bold and strong',
    category: 'bold'
  }
]

export const FONT_CATEGORIES = [
  { value: 'all', label: 'All Fonts' },
  { value: 'playful', label: 'Playful' },
  { value: 'elegant', label: 'Elegant' },
  { value: 'bold', label: 'Bold' },
  { value: 'handwritten', label: 'Handwritten' },
]
