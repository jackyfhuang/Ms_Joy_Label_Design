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
  const stageRef = useRef<Konva.Stage | null>(null)
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

      <div className="container py-5">
        <DesignProgress design={design} onBack={onBack} />

        <div className="row g-4 g-lg-5">
          {/* Left Column - Controls */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="d-flex flex-column gap-4">
              {/* 1. Pick your tag size */}
              <ProductSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('product')}
                onToggle={() => toggleSection('product')}
                onUpdateDesign={updateDesign}
              />

              {/* 2. Tag color */}
              <ColorSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('tagColors')}
                onToggle={() => toggleSection('tagColors')}
                onUpdateDesign={updateDesign}
                selectedLetterIndex={selectedLetterIndex}
                showSameColorPicker={showSameColorPicker}
                onSetSelectedLetterIndex={setSelectedLetterIndex}
                onSetShowSameColorPicker={setShowSameColorPicker}
                colorType="tag"
              />

              {/* 3. Name on tag */}
              <TextCustomizer
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('text')}
                onToggle={() => toggleSection('text')}
                onUpdateDesign={updateDesign}
                onUpdateText={updateText}
              />

              {/* 4. Coloring on name or individual letters */}
              <ColorSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('textColors')}
                onToggle={() => toggleSection('textColors')}
                onUpdateDesign={updateDesign}
                selectedLetterIndex={selectedLetterIndex}
                showSameColorPicker={showSameColorPicker}
                onSetSelectedLetterIndex={setSelectedLetterIndex}
                onSetShowSameColorPicker={setShowSameColorPicker}
                colorType="text"
              />

              {/* 5. Pick the icons */}
              <IconSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('icons')}
                onToggle={() => toggleSection('icons')}
                onUpdateDesign={updateDesign}
              />

              {/* 6. Finally pick the color of the ring */}
              <ColorSelector
                design={design}
                currentProduct={currentProduct}
                isOpen={openSections.has('ringColors')}
                onToggle={() => toggleSection('ringColors')}
                onUpdateDesign={updateDesign}
                selectedLetterIndex={selectedLetterIndex}
                showSameColorPicker={showSameColorPicker}
                onSetSelectedLetterIndex={setSelectedLetterIndex}
                onSetShowSameColorPicker={setShowSameColorPicker}
                colorType="ring"
              />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="col-lg-6 order-1 order-lg-2 position-sticky" style={{top: '1rem', height: 'fit-content', zIndex: 100}}>
            <TagPreview
              design={design}
              currentProduct={currentProduct}
              dynamicTagWidth={dynamicTagWidth}
              stageRef={stageRef}
              onReset={resetDesign}
            />
          </div>
        </div>
      </div>
      
      {/* Action Buttons Section */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card card-rainbow">
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-4">
                    <button
                      onClick={downloadDesign}
                      className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-3 rounded-rainbow fw-medium"
                      title="Save your design as an image"
                    >
                      <Download size={18} />
                      <span>Save Design</span>
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      onClick={() => setShowShareModal(true)}
                      className="btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2 py-3 rounded-rainbow fw-medium"
                      title="Share your design on social media"
                    >
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      onClick={addToCart}
                      className="btn btn-rainbow w-100 d-flex align-items-center justify-content-center gap-2 py-3 rounded-rainbow fw-medium pulse"
                      title="Add this design to your cart"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                {getTotalItems() > 0 && (
                  <div className="row mt-3">
                    <div className="col-12">
                      <button
                        onClick={toggleCart}
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-2 rounded-rainbow fw-medium"
                      >
                        <ShoppingCart size={16} />
                        <span>View Cart ({getTotalItems()})</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
