import { ICONS, ICON_CATEGORIES } from '@/data/icons'
import { Button } from '@/components/ui/Button'
import { TagDesign } from '@/types/designer'

interface IconSelectorProps {
  design: TagDesign
  currentProduct: any
  isOpen: boolean
  onToggle: () => void
  onUpdateDesign: (updates: Partial<TagDesign>) => void
}

export const IconSelector = ({
  design,
  currentProduct,
  isOpen,
  onToggle,
  onUpdateDesign
}: IconSelectorProps) => {
  const selectedIcon = design.selectedIcon ? ICONS.find(icon => icon.id === design.selectedIcon) : null
  const selectedIcon2 = design.selectedIcon2 ? ICONS.find(icon => icon.id === design.selectedIcon2) : null

  const handleIconClick = (iconId: number) => {
    if (currentProduct.layout === 'dual-icons') {
      // For dual icons, cycle through left/right assignment
      if (!design.selectedIcon) {
        onUpdateDesign({ selectedIcon: iconId })
      } else if (!design.selectedIcon2) {
        onUpdateDesign({ selectedIcon2: iconId })
      } else {
        // Replace left icon
        onUpdateDesign({ selectedIcon: iconId })
      }
    } else {
      onUpdateDesign({ selectedIcon: iconId })
    }
  }

  const getIconDisplayText = () => {
    if (currentProduct.layout === 'dual-icons') {
      return `${selectedIcon ? selectedIcon.name : 'None'} + ${selectedIcon2 ? selectedIcon2.name : 'None'}`
    }
    return selectedIcon ? selectedIcon.name : 'None'
  }

  return (
    <div className="card card-rainbow">
      <button
        onClick={onToggle}
        className={`btn btn-link w-100 p-4 p-sm-5 text-start transition ${
          isOpen ? 'bg-white bg-opacity-40' : ''
        }`}
        style={{textDecoration: 'none'}}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3 gap-sm-4">
            <div className="rounded-rainbow d-flex align-items-center justify-content-center fs-2" style={{width: '3rem', height: '3rem', background: 'var(--soft-rainbow)'}}>
              🎨
            </div>
            <div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-1">Icons</h3>
              <p className="small text-muted mb-0">{getIconDisplayText()}</p>
            </div>
          </div>
          <div className={`rounded-circle d-flex align-items-center justify-content-center transition ${
            isOpen ? 'bg-info bg-opacity-10' : 'bg-light'
          }`} style={{width: '2rem', height: '2rem'}}>
            <span className={`fs-5 transition ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-200 space-y-4">
          {currentProduct.layout === 'dual-icons' && (
            <div className="bg-light rounded-rainbow p-4">
              <h4 className="font-medium text-gray-900 mb-3">Dual Icons (Left + Right)</h4>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedIcon ? selectedIcon.emoji : '👈'}</span>
                  <div>
                    <div className="text-sm font-medium">Left Icon</div>
                    <div className="text-xs text-gray-500">{selectedIcon ? selectedIcon.name : 'None'}</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onUpdateDesign({ selectedIcon: null })}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Remove
                </Button>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedIcon2 ? selectedIcon2.emoji : '👉'}</span>
                  <div>
                    <div className="text-sm font-medium">Right Icon</div>
                    <div className="text-xs text-gray-500">{selectedIcon2 ? selectedIcon2.name : 'None'}</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onUpdateDesign({ selectedIcon2: null })}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Remove
                </Button>
              </div>
              
              <div className="text-xs text-gray-600 bg-white p-2 rounded border">
                <strong>Tip:</strong> Choose different icons for left and right sides to make your tag unique!
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-8 gap-2">
            {/* None Option */}
            <Button
              variant="outline"
              onClick={() => onUpdateDesign({ selectedIcon: null, selectedIcon2: null })}
              className={`rounded-rainbow d-flex flex-column align-items-center justify-content-center transition ${
                design.selectedIcon === null && design.selectedIcon2 === null
                  ? 'border-black bg-gray-100'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-lg fw-bold">—</span>
              <span className="text-xs">None</span>
            </Button>

            {ICONS.slice(0, 15).map((icon) => (
              <Button
                key={icon.id}
                variant="outline"
                onClick={() => handleIconClick(icon.id)}
                className={`rounded-rainbow d-flex flex-column align-items-center justify-content-center transition ${
                  design.selectedIcon === icon.id || design.selectedIcon2 === icon.id
                    ? 'border-black bg-gray-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                title={icon.name}
              >
                <span className="text-lg">{icon.emoji}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
