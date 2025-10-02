'use client'

import { X, Plus, Minus, ShoppingBag, MessageSquare } from 'lucide-react'
import { useCartStore } from '@/stores/cart'
import { ICONS } from '@/data/icons'
import { METAL_RING_COLORS } from '@/data/colors'
import { getProductById } from '@/data/products'
import { APP_CONFIG } from '@/lib/constants'

function Cart() {
  const {
    items,
    isOpen,
    removeItem,
    updateQuantity,
    toggleCart,
    getTotalItems,
    getTotalPrice,
    getDiscountedPrice,
    clearCart,
  } = useCartStore()

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()
  const discountedPrice = getDiscountedPrice()
  const savings = totalPrice - discountedPrice

  const handleSubmitOrder = () => {
    const orderSummary = items.map(item => {
      const product = getProductById(item.productType)
      const icon = item.selectedIcon ? ICONS.find(i => i.id === item.selectedIcon) : null
      const icon2 = item.selectedIcon2 ? ICONS.find(i => i.id === item.selectedIcon2) : null
      const iconText = icon ? ` with ${icon.name}${icon2 ? ' and ' + icon2.name : ''} icon${icon2 ? 's' : ''}` : ''
      return `${item.quantity}x "${item.text}" ${product?.name || 'tag'}${iconText}`
    }).join('\n')

    const message = `New Order Request from Customer:

Order Details:
${orderSummary}

Pricing:
Subtotal: $${totalPrice.toFixed(2)}
${savings > 0 ? `Discount: -$${savings.toFixed(2)}` : ''}
Total: $${discountedPrice.toFixed(2)}

Customer Info:
- Payment: Cash or E-Transfer
- Pickup: RMD Self-Pickup

Please review and confirm this order.`

    const whatsappUrl = `https://wa.me/${APP_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp for order submission
    window.open(whatsappUrl, '_blank')
    
    // Clear cart after submission
    clearCart()
    toggleCart()
  }

  if (!isOpen) return null

  return (
    <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.25)'}} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content card-rainbow rounded-rainbow border-0" style={{background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(20px)'}}>
          <div className="modal-header border-0 pb-0">
            <h3 className="modal-title h5 fw-semibold text-dark d-flex align-items-center">
              <ShoppingBag className="me-3 text-primary" size={24} />
              Cart ({totalItems})
            </h3>
            <button
              type="button"
              className="btn-close"
              onClick={toggleCart}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            {items.length === 0 ? (
              <div className="text-center py-5">
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '5rem', height: '5rem', background: 'var(--soft-rainbow)'}}>
                  <ShoppingBag className="text-primary" size={32} />
                </div>
                <h3 className="h5 fw-medium text-dark mb-2">Your cart is empty</h3>
                <p className="text-muted mb-4">Start designing your custom name tags!</p>
                <button
                  onClick={toggleCart}
                  className="btn btn-rainbow"
                >
                  Start Designing
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="mb-4" style={{maxHeight: '16rem', overflowY: 'auto'}}>
                  {items.map((item) => {
                    const product = getProductById(item.productType)
                    const icon = item.selectedIcon ? ICONS.find(i => i.id === item.selectedIcon) : null
                    const icon2 = item.selectedIcon2 ? ICONS.find(i => i.id === item.selectedIcon2) : null
                    return (
                      <div key={item.id} className="d-flex align-items-center gap-3 p-3 rounded-rainbow border mb-3 transition" style={{background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255, 255, 255, 0.4)'}}>
                        <div className="flex-grow-1" style={{minWidth: 0}}>
                          <p className="fw-semibold text-dark text-truncate mb-1">"{item.text}"</p>
                          <p className="small text-muted mb-2">
                            {product?.name} • {icon ? icon.name : ''}{icon && icon2 ? ' + ' : ''}{icon2 ? icon2.name : ''}
                            {icon || icon2 ? ' icon' : ''} • {METAL_RING_COLORS.find(c => c.hex === item.metalRingColor)?.name || 'Silver'} ring
                          </p>
                          <p className="h5 fw-bold text-primary mb-0">${item.price}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                            style={{width: '2rem', height: '2rem'}}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-center fw-semibold text-dark" style={{width: '2rem'}}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                            style={{width: '2rem', height: '2rem'}}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-sm btn-outline-danger rounded-circle d-flex align-items-center justify-content-center"
                          style={{width: '2rem', height: '2rem'}}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    )
                  })}
                </div>

                {/* Pricing Summary */}
                <div className="border-top border-light pt-4">
                  <div className="d-flex justify-content-between small text-muted mb-2">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  {savings > 0 && (
                    <div className="d-flex justify-content-between small text-success fw-medium mb-2">
                      <span>Bulk Discount</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between h4 fw-bold text-dark">
                    <span>Total</span>
                    <span className="text-rainbow">${discountedPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <div className="mt-4">
                  <button
                    onClick={handleSubmitOrder}
                    className="btn btn-rainbow w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
                  >
                    <MessageSquare size={20} />
                    <span>Submit Order Request</span>
                  </button>
                  
                  <div className="text-center">
                    <p className="small text-muted mb-2">
                      This will send the order details to Ms. Joy for review
                    </p>
                    <button
                      onClick={clearCart}
                      className="btn btn-link text-muted text-danger p-0 small"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Cart }
export default Cart