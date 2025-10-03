'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, Download, ShoppingCart, Save, Clock, Share2 } from 'lucide-react'
import Konva from 'konva'
import { useCartStore } from '@/stores/cart'
import { useDesigner } from '@/hooks/useDesigner'
import { Button } from '@/components/ui/Button'
import { ProductSelector } from './ProductSelector'
import { TextCustomizer } from './TextCustomizer'
import { IconSelector } from './IconSelector'
import { ColorSelector } from './ColorSelector'
import { TagPreview } from './TagPreview'
import { DesignProgress } from './DesignProgress'
import { TagDesignerProps } from '@/types/designer'
import { Cart } from '@/components/cart'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ShareDesign } from '@/components/ui/ShareDesign'

export const TagDesigner = ({ onBack }: TagDesignerProps) => {
  const stageRef = useRef<Konva.Stage>(null)
  const { addItem, toggleCart, getTotalItems } = useCartStore()
  const [showShareModal, setShowShareModal] = useState(false)
  
  const {
    design,
    currentProduct,
    openSections,
    selectedLetterIndex,
    showSameColorPicker,
    dynamicTagWidth,
    isSaving,
    lastSaved,
    updateDesign,
    updateText,
    resetDesign,
    toggleSection,
    setSelectedLetterIndex,
    setShowSameColorPicker,
    autoSave,
  } = useDesigner()

  const downloadDesign = () => {
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL()
      const link = document.createElement('a')
      link.download = `${design.text.replace(/\s+/g, '-')}-tag-design.png`
      link.href = uri
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const addToCart = () => {
    addItem({
      productType: design.productType,
      text: design.text,
      fontSize: design.fontSize,
      fontFamily: design.fontFamily,
      textColor: design.textColor,
      backgroundColor: design.backgroundColor,
      selectedIcon: design.selectedIcon,
      selectedIcon2: design.selectedIcon2,
      iconSize: design.iconSize,
      tagWidth: dynamicTagWidth,
      tagHeight: design.tagHeight,
      metalRingColor: design.metalRingColor,
      letterColors: design.letterColors,
    })
  }

  return (
    <div className="min-h-screen bg-soft-rainbow">
      {/* Header */}
      <div className="border-bottom border-light" style={{background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)'}}>
        <div className="container py-4">
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
            <button
              onClick={onBack}
              className="btn btn-link d-flex align-items-center gap-3 text-muted text-decoration-none p-3 rounded-rainbow"
              style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}
            >
              <ArrowLeft size={20} />
              <span className="fw-medium">Back to Home</span>
            </button>
            
            <div className="d-flex flex-wrap align-items-center gap-3">
              {/* Auto-save status */}
              <div className="d-flex align-items-center gap-2 text-muted small">
                {isSaving ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span>Saving...</span>
                  </>
                ) : lastSaved ? (
                  <>
                    <Clock size={14} />
                    <span>Saved {lastSaved.toLocaleTimeString()}</span>
                  </>
                ) : null}
              </div>
              
              <button
                onClick={resetDesign}
                className="btn btn-outline-secondary px-4 py-2 rounded-rainbow fw-medium"
                title="Start over with a new design"
              >
                Reset
              </button>
              <button
                onClick={downloadDesign}
                className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2 rounded-rainbow fw-medium"
                title="Save your design as an image"
              >
                <Download size={16} />
                <span>Save Design</span>
              </button>
              <button
                onClick={() => setShowShareModal(true)}
                className="btn btn-outline-info d-flex align-items-center gap-2 px-4 py-2 rounded-rainbow fw-medium"
                title="Share your design on social media"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
              <button
                onClick={addToCart}
                className="btn btn-rainbow d-flex align-items-center gap-2 px-6 py-2 rounded-rainbow fw-medium pulse"
                title="Add this design to your cart"
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
              {getTotalItems() > 0 && (
                <button
                  onClick={toggleCart}
                  className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2 rounded-rainbow fw-medium"
                >
                  <ShoppingCart size={16} />
                  <span>Cart ({getTotalItems()})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <DesignProgress design={design} />

        <div className="row g-4 g-lg-5">
          {/* Left Column - Controls */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="d-flex flex-column gap-4">
              <ProductSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('product')}
                onToggle={() => toggleSection('product')}
                onUpdateDesign={updateDesign}
              />

              <TextCustomizer
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('text')}
                onToggle={() => toggleSection('text')}
                onUpdateDesign={updateDesign}
                onUpdateText={updateText}
              />

              <IconSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('icons')}
                onToggle={() => toggleSection('icons')}
                onUpdateDesign={updateDesign}
              />

              <ColorSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('colors')}
                onToggle={() => toggleSection('colors')}
                onUpdateDesign={updateDesign}
                selectedLetterIndex={selectedLetterIndex}
                showSameColorPicker={showSameColorPicker}
                onSetSelectedLetterIndex={setSelectedLetterIndex}
                onSetShowSameColorPicker={setShowSameColorPicker}
              />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="position-sticky" style={{top: '2rem'}}>
              <TagPreview
                design={design}
                currentProduct={currentProduct}
                dynamicTagWidth={dynamicTagWidth}
                stageRef={stageRef}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Cart />
      {showShareModal && (
        <ShareDesign 
          design={design} 
          onClose={() => setShowShareModal(false)} 
        />
      )}
    </div>
  )
}
