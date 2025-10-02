'use client'

import { useState, useEffect } from 'react'
import { X, Gift, Heart } from 'lucide-react'

interface ExitIntentPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ExitIntentPopup({ isOpen, onClose }: ExitIntentPopupProps) {
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem('exit-intent-shown')
    if (shown) {
      setHasShown(true)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('exit-intent-shown', 'true')
    setHasShown(true)
    onClose()
  }

  const handleOfferClick = () => {
    sessionStorage.setItem('exit-intent-shown', 'true')
    setHasShown(true)
    onClose()
    // In a real app, you'd redirect to a special offer page or apply a discount code
    window.location.href = '/designer'
  }

  if (!isOpen || hasShown) return null

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-rainbow border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #fff0f5, #fff8e7, #f0fff4, #f0f8ff)'}}>
          <div className="modal-header border-0 pb-0">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <Gift className="text-white" size={20} />
              </div>
              <h5 className="modal-title fw-bold text-rainbow">Wait! Don't miss out! 💕</h5>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          
          <div className="modal-body text-center py-4">
            <div className="mb-4">
              <Heart className="text-danger mb-3" size={48} />
            </div>
            
            <h4 className="fw-bold mb-3 text-dark">Special Offer Just for You!</h4>
            
            <p className="text-muted mb-4">
              Get <strong className="text-success">10% off</strong> your first order when you design your tag today!
            </p>
            
            <div className="bg-white rounded-rainbow p-3 mb-4 shadow-sm">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-semibold">Discount Code:</span>
                <span className="badge bg-success fs-6 px-3 py-2">WELCOME10</span>
              </div>
            </div>
            
            <p className="text-muted small mb-4">
              ✨ Perfect for backpacks, lunch boxes, and school supplies<br/>
              💧 Waterproof and durable<br/>
              🎨 Fully customizable with your child's name
            </p>
          </div>
          
          <div className="modal-footer border-0 pt-0">
            <div className="d-grid gap-2 w-100">
              <button
                type="button"
                className="btn btn-primary btn-lg fw-bold"
                onClick={handleOfferClick}
              >
                🎨 Design My Tag Now!
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClose}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook to detect exit intent
export function useExitIntent() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0) {
        setShowPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  return { showPopup, setShowPopup }
}
