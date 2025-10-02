export interface IconData {
  id: number
  name: string
  emoji: string
  category: 'animals' | 'nature' | 'food' | 'objects' | 'symbols'
}

export const ICONS: IconData[] = [
  // Row 1
  { id: 1, name: 'Paw Print', emoji: '🐾', category: 'animals' },
  { id: 2, name: 'Cherries', emoji: '🍒', category: 'food' },
  { id: 3, name: 'Sailboat', emoji: '⛵', category: 'objects' },
  { id: 4, name: 'Turtle', emoji: '🐢', category: 'animals' },
  { id: 5, name: 'Star', emoji: '⭐', category: 'symbols' },
  
  // Row 2
  { id: 6, name: 'Crown', emoji: '👑', category: 'objects' },
  { id: 7, name: 'Pig', emoji: '🐷', category: 'animals' },
  { id: 8, name: 'Horse', emoji: '🐴', category: 'animals' },
  { id: 9, name: 'Dinosaur', emoji: '🦕', category: 'animals' },
  { id: 10, name: 'Lemon', emoji: '🍋', category: 'food' },
  
  // Row 3
  { id: 11, name: 'Fox', emoji: '🦊', category: 'animals' },
  { id: 12, name: 'Cactus', emoji: '🌵', category: 'nature' },
  { id: 13, name: 'Tractor', emoji: '🚜', category: 'objects' },
  { id: 14, name: 'Bow', emoji: '🎀', category: 'objects' },
  { id: 15, name: 'Moon', emoji: '🌙', category: 'nature' },
  
  // Row 4
  { id: 16, name: 'Cloud', emoji: '☁️', category: 'nature' },
  { id: 17, name: 'Crocodile', emoji: '🐊', category: 'animals' },
  { id: 18, name: 'Heart', emoji: '❤️', category: 'symbols' },
  { id: 19, name: 'Star', emoji: '⭐', category: 'symbols' },
  { id: 20, name: 'Rocket', emoji: '🚀', category: 'objects' },
  
  // Row 5
  { id: 21, name: 'Paint Brush', emoji: '🎨', category: 'objects' },
  { id: 22, name: 'Dog', emoji: '🐶', category: 'animals' },
  { id: 23, name: 'Airplane', emoji: '✈️', category: 'objects' },
  { id: 24, name: 'Car', emoji: '🚗', category: 'objects' },
  { id: 25, name: 'Avocado', emoji: '🥑', category: 'food' },
  
  // Row 6
  { id: 26, name: 'Clover', emoji: '🍀', category: 'nature' },
  { id: 27, name: 'Smiley', emoji: '😊', category: 'symbols' },
  { id: 28, name: 'Tulip', emoji: '🌷', category: 'nature' },
  { id: 29, name: 'Rainbow', emoji: '🌈', category: 'nature' },
  { id: 30, name: 'Stars', emoji: '✨', category: 'symbols' },
  
  // Row 7
  { id: 31, name: 'Duck', emoji: '🦆', category: 'animals' },
  { id: 32, name: 'Mickey Mouse', emoji: '🐭', category: 'animals' },
  { id: 33, name: 'Strawberry', emoji: '🍓', category: 'food' },
  { id: 34, name: 'Bear', emoji: '🐻', category: 'animals' },
  { id: 35, name: 'Pear', emoji: '🍐', category: 'food' },
]

export const ICON_CATEGORIES = [
  { value: 'all', label: 'All Icons' },
  { value: 'animals', label: 'Animals' },
  { value: 'nature', label: 'Nature' },
  { value: 'food', label: 'Food' },
  { value: 'objects', label: 'Objects' },
  { value: 'symbols', label: 'Symbols' },
]
