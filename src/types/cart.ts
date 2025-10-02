export interface CartItem {
  id: string
  productType: string
  text: string
  fontSize: number
  fontFamily: string
  textColor: string
  backgroundColor: string
  selectedIcon: number | null
  selectedIcon2: number | null // For dual-icon products
  iconSize: number
  tagWidth: number
  tagHeight: number
  metalRingColor: string
  letterColors: string[] // Array of colors for each letter
  quantity: number
  price: number
}

export interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'id' | 'quantity' | 'price'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getDiscountedPrice: () => number
}
