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
              🌈
            </div>
            <div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-1">Colors</h3>
              <p className="small text-muted mb-0">Text & background</p>
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
        <div className="p-4 border-t border-gray-200 space-y-4">
          {/* Text Color - Only show when a letter is selected */}
          {selectedLetterIndex !== null && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color for letter "{design.text[selectedLetterIndex]}"
              </label>
              <div className="grid grid-cols-8 gap-2">
                {THREAD_COLORS.slice(0, 16).map((color) => (
                  <Button
                    key={color.id}
                    variant="outline"
                    onClick={() => {
                      const newLetterColors = [...design.letterColors]
                      newLetterColors[selectedLetterIndex] = color.hex
                      onUpdateDesign({ letterColors: newLetterColors })
                      onSetSelectedLetterIndex(null) // Close the color picker
                    }}
                    className={`rounded-rainbow border border-2 transition ${
                      (design.letterColors[selectedLetterIndex] || design.textColor) === color.hex
                        ? 'border-black'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSetSelectedLetterIndex(null)}
                className="mt-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </Button>
            </div>
          )}

          {/* Same Color Picker - Only show when Same Color button is clicked */}
          {showSameColorPicker && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose color for all letters
              </label>
              <div className="grid grid-cols-8 gap-2">
                {THREAD_COLORS.slice(0, 16).map((color) => (
                  <Button
                    key={color.id}
                    variant="outline"
                    onClick={() => {
                      const newLetterColors = design.text.split('').map(() => color.hex)
                      onUpdateDesign({ letterColors: newLetterColors })
                      onSetShowSameColorPicker(false) // Close the color picker
                    }}
                    className={`rounded-rainbow border border-2 transition ${
                      design.textColor === color.hex
                        ? 'border-black'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSetShowSameColorPicker(false)}
                className="mt-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </Button>
            </div>
          )}

          {/* Background Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => onUpdateDesign({ backgroundColor: '#FFFFFF' })}
                className={`px-4 py-2 border-2 rounded-lg transition-colors flex items-center space-x-2 ${
                  design.backgroundColor === '#FFFFFF'
                    ? 'border-black bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
                <span className="text-sm">White</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => onUpdateDesign({ backgroundColor: '#000000' })}
                className={`px-4 py-2 border-2 rounded-lg transition-colors flex items-center space-x-2 ${
                  design.backgroundColor === '#000000'
                    ? 'border-black bg-gray-100'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="w-4 h-4 bg-black rounded"></div>
                <span className="text-sm">Black</span>
              </Button>
            </div>
          </div>

          {/* Metal Ring Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Metal Ring Color</label>
            <div className="grid grid-cols-4 gap-2">
              {METAL_RING_COLORS.map((color) => (
                <Button
                  key={color.id}
                  variant="outline"
                  onClick={() => onUpdateDesign({ metalRingColor: color.hex })}
                  className={`rounded-lg border-2 transition ${
                    design.metalRingColor === color.hex
                      ? 'border-black scale-105'
                      : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <div className="w-6 h-6 rounded-full border border-gray-400 shadow-sm" style={{ backgroundColor: color.hex }}></div>
                    <span 
                      className="text-xs font-medium text-gray-800"
                      style={{ 
                        textShadow: '0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.6), 0 0 12px rgba(255, 255, 255, 0.4)',
                        filter: 'contrast(1.2) brightness(1.1)'
                      }}
                    >
                      {color.name}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Individual Letter Colors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Letter Colors</label>
            <p className="text-xs text-gray-500 mb-3">
              {selectedLetterIndex !== null 
                ? `Select a color for "${design.text[selectedLetterIndex]}"`
                : "Click any letter below to select its color"
              }
            </p>
            <div 
              className="inline-flex items-center px-4 py-3 rounded-lg border-2 bg-white"
              style={{ 
                backgroundColor: design.backgroundColor,
                borderColor: selectedLetterIndex !== null ? '#000' : '#e5e7eb'
              }}
            >
              {design.text.split('').map((letter, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => onSetSelectedLetterIndex(index)}
                  className={`font-bold text-lg transition-all duration-200 cursor-pointer mx-1 px-1 rounded ${
                    selectedLetterIndex === index 
                      ? 'bg-gray-200 scale-110' 
                      : 'hover:scale-110 hover:bg-gray-100'
                  }`}
                  style={{ color: design.letterColors[index] || design.textColor }}
                  title={`Click to select color for "${letter}"`}
                >
                  {letter}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newLetterColors = generateRainbowColors(design.text)
                  onUpdateDesign({ letterColors: newLetterColors })
                  onSetSelectedLetterIndex(null) // Close any open color picker
                  onSetShowSameColorPicker(false) // Close same color picker
                }}
                className="px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 transition-colors"
              >
                🌈 Rainbow
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onSetShowSameColorPicker(true) // Show color picker
                  onSetSelectedLetterIndex(null) // Close individual letter picker
                }}
                className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors"
              >
                🎨 Same Color
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
