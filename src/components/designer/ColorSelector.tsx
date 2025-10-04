import { THREAD_COLORS, METAL_RING_COLORS } from '@/data/colors'
import { Button } from '@/components/ui/Button'
import { TagDesign } from '@/types/designer'
import { generateRainbowColors } from '@/lib/utils'

interface ColorSelectorProps {
  design: TagDesign
  currentProduct: any
  isOpen: boolean
  onToggle: () => void
  onUpdateDesign: (updates: Partial<TagDesign>) => void
  selectedLetterIndex: number | null
  showSameColorPicker: boolean
  onSetSelectedLetterIndex: (index: number | null) => void
  onSetShowSameColorPicker: (show: boolean) => void
  colorType?: 'tag' | 'text' | 'ring'
}

export const ColorSelector = ({
  design,
  currentProduct,
  isOpen,
  onToggle,
  onUpdateDesign,
  selectedLetterIndex,
  showSameColorPicker,
  onSetSelectedLetterIndex,
  onSetShowSameColorPicker,
  colorType = 'tag',
}: ColorSelectorProps) => {
  return (
    <div className="card card-rainbow">
      <button
        onClick={onToggle}
        className={`btn btn-link w-100 p-4 p-sm-5 text-start transition-all ${
          isOpen ? 'bg-white bg-opacity-40' : ''
        }`}
        style={{textDecoration: 'none'}}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3 gap-sm-4">
            <div className="rounded-rainbow d-flex align-items-center justify-content-center fs-2" style={{width: '3rem', height: '3rem', background: 'var(--soft-rainbow)'}}>
              <span className="fw-bold text-white">C</span>
            </div>
            <div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-1">
                {colorType === 'tag' ? 'Tag Color' : 
                 colorType === 'text' ? 'Text Colors' : 
                 'Ring Color'}
              </h3>
              <p className="small text-muted mb-0">
                {colorType === 'tag' ? 'Choose your tag background color' : 
                 colorType === 'text' ? 'Customize text & letter colors' : 
                 'Select metal ring color'}
              </p>
            </div>
          </div>
          <div className={`rounded-circle d-flex align-items-center justify-content-center transition-all ${
            isOpen ? 'bg-danger bg-opacity-10' : 'bg-light'
          }`} style={{width: '2rem', height: '2rem'}}>
            <span className={`fs-5 transition-all ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="card-body border-top border-light">
          <div className="d-flex flex-column gap-4 gap-sm-5">
            
            {/* Tag Color Section */}
            {colorType === 'tag' && (
              <div>
                <label className="form-label small fw-medium text-dark mb-3">Tag Background Color</label>
                <div className="d-flex gap-3">
                  <button
                    onClick={() => onUpdateDesign({ backgroundColor: '#FFFFFF' })}
                    className={`btn btn-outline-secondary px-4 py-3 border-2 rounded-rainbow transition-all d-flex align-items-center gap-2 ${
                      design.backgroundColor === '#FFFFFF'
                        ? 'border-dark bg-light'
                        : 'border-secondary'
                    }`}
                  >
                    <div className="rounded" style={{width: '1rem', height: '1rem', backgroundColor: '#FFFFFF', border: '1px solid #ccc'}}></div>
                    <span className="small">White</span>
                  </button>
                  <button
                    onClick={() => onUpdateDesign({ backgroundColor: '#000000' })}
                    className={`btn btn-outline-secondary px-4 py-3 border-2 rounded-rainbow transition-all d-flex align-items-center gap-2 ${
                      design.backgroundColor === '#000000'
                        ? 'border-dark bg-light'
                        : 'border-secondary'
                    }`}
                  >
                    <div className="rounded" style={{width: '1rem', height: '1rem', backgroundColor: '#000000'}}></div>
                    <span className="small">Black</span>
                  </button>
                </div>
              </div>
            )}

            {/* Text Colors Section */}
            {colorType === 'text' && (
              <>
                {/* Text Color - Only show when a letter is selected */}
                {selectedLetterIndex !== null && (
                  <div>
                    <label className="form-label small fw-medium text-dark mb-3">
                      Color for letter "{design.text[selectedLetterIndex]}"
                    </label>
                    <div className="row g-2">
                      {THREAD_COLORS.slice(0, 16).map((color) => (
                        <div key={color.id} className="col-3 col-sm-2">
                          <button
                            onClick={() => {
                              const newLetterColors = [...design.letterColors]
                              newLetterColors[selectedLetterIndex] = color.hex
                              onUpdateDesign({ letterColors: newLetterColors })
                              onSetSelectedLetterIndex(null)
                            }}
                            className={`btn btn-sm w-100 rounded-rainbow border-2 transition-all ${
                              (design.letterColors[selectedLetterIndex] || design.textColor) === color.hex
                                ? 'border-dark'
                                : 'border-secondary'
                            }`}
                            style={{ backgroundColor: color.hex, height: '2rem' }}
                            title={color.name}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => onSetSelectedLetterIndex(null)}
                      className="btn btn-link btn-sm mt-2 text-muted"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {/* Same Color Picker - Only show when Same Color button is clicked */}
                {showSameColorPicker && (
                  <div>
                    <label className="form-label small fw-medium text-dark mb-3">
                      Choose color for all letters
                    </label>
                    <div className="row g-2">
                      {THREAD_COLORS.slice(0, 16).map((color) => (
                        <div key={color.id} className="col-3 col-sm-2">
                          <button
                            onClick={() => {
                              const newLetterColors = design.text.split('').map(() => color.hex)
                              onUpdateDesign({ letterColors: newLetterColors })
                              onSetShowSameColorPicker(false)
                            }}
                            className={`btn btn-sm w-100 rounded-rainbow border-2 transition-all ${
                              design.textColor === color.hex
                                ? 'border-dark'
                                : 'border-secondary'
                            }`}
                            style={{ backgroundColor: color.hex, height: '2rem' }}
                            title={color.name}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => onSetShowSameColorPicker(false)}
                      className="btn btn-link btn-sm mt-2 text-muted"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {/* Individual Letter Colors */}
                <div>
                  <label className="form-label small fw-medium text-dark mb-3">Letter Colors</label>
                  <p className="small text-muted mb-3">
                    {selectedLetterIndex !== null 
                      ? `Select a color for "${design.text[selectedLetterIndex]}"`
                      : "Click any letter below to select its color"
                    }
                  </p>
                  <div 
                    className="d-inline-flex align-items-center px-3 py-2 rounded-rainbow border-2 bg-white"
                    style={{ 
                      backgroundColor: design.backgroundColor,
                      borderColor: design.backgroundColor === '#FFFFFF' ? '#e5e7eb' : '#374151'
                    }}
                  >
                    {design.text.split('').map((letter, index) => (
                      <button
                        key={index}
                        onClick={() => onSetSelectedLetterIndex(index)}
                        className={`btn btn-link px-2 py-1 fs-5 fw-bold transition-all ${
                          selectedLetterIndex === index 
                            ? 'bg-warning bg-opacity-25 text-warning-emphasis' 
                            : ''
                        }`}
                        style={{ 
                          color: design.letterColors[index] || design.textColor,
                          textShadow: design.backgroundColor === '#FFFFFF' ? '1px 1px 2px rgba(0,0,0,0.3)' : '1px 1px 2px rgba(255,255,255,0.3)'
                        }}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <button
                      onClick={() => {
                        const rainbowColors = generateRainbowColors(design.text)
                        onUpdateDesign({ letterColors: rainbowColors })
                        onSetSelectedLetterIndex(null)
                      }}
                      className="btn btn-sm btn-dark px-3 py-1"
                    >
                      Rainbow
                    </button>
                    <button
                      onClick={() => {
                        onSetShowSameColorPicker(true)
                        onSetSelectedLetterIndex(null)
                      }}
                      className="btn btn-sm btn-secondary px-3 py-1"
                    >
                      Same Color
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Ring Color Section */}
            {colorType === 'ring' && (
              <div>
                <label className="form-label small fw-medium text-dark mb-3">Metal Ring Color</label>
                <div className="row g-2">
                  {METAL_RING_COLORS.map((color) => (
                    <div key={color.id} className="col-4 col-sm-3">
                      <button
                        onClick={() => onUpdateDesign({ metalRingColor: color.hex })}
                        className={`btn btn-sm w-100 rounded-rainbow border-2 transition-all d-flex flex-column align-items-center justify-content-center ${
                          design.metalRingColor === color.hex
                            ? 'border-dark'
                            : 'border-secondary'
                        }`}
                        style={{ backgroundColor: color.hex, height: '3rem' }}
                        title={color.name}
                      >
                        <div 
                          className="rounded-circle mb-1" 
                          style={{ 
                            width: '1rem', 
                            height: '1rem', 
                            backgroundColor: color.hex,
                            border: '1px solid rgba(255,255,255,0.3)'
                          }}
                        />
                        <span 
                          className="small fw-medium"
                          style={{ 
                            color: '#fff',
                            textShadow: '0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
                            fontSize: '0.7rem'
                          }}
                        >
                          {color.name}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}