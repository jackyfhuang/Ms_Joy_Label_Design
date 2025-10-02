import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from '@/data/products'
import { CartItem, CartStore } from '@/types/cart'
import { generateId } from '@/lib/utils'
import { DISCOUNT_RULES } from '@/lib/constants'

const getBasePrice = (productType: string): number => {
  const productTypes: Record<string, number> = {
    'standard-2.5cm': 10,
    'large-3cm': 12,
    'text-only': 8
  }
  return productTypes[productType] || 10
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (itemData) => {
        const id = generateId()
        const newItem: CartItem = {
          ...itemData,
          id,
          quantity: 1,
          price: getBasePrice(itemData.productType),
        }
        
        set((state) => ({
          items: [...state.items, newItem],
          isOpen: true,
        }))
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }))
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }))
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }))
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getDiscountedPrice: () => {
        const totalItems = get().getTotalItems()
        const totalPrice = get().getTotalPrice()
        
        if (totalItems >= DISCOUNT_RULES.bulk10.minItems) {
          return totalPrice * (1 - DISCOUNT_RULES.bulk10.discount)
        } else if (totalItems >= DISCOUNT_RULES.bulk5.minItems) {
          return totalPrice * (1 - DISCOUNT_RULES.bulk5.discount)
        }
        
        return totalPrice
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
