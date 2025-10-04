import { FONTS } from '@/data/fonts'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { TagDesign } from '@/types/designer'

interface TextCustomizerProps {
  design: TagDesign
  currentProduct: any
  isOpen: boolean
  onToggle: () => void
  onUpdateDesign: (updates: Partial<TagDesign>) => void
  onUpdateText: (text: string) => void
}

export const TextCustomizer = ({
  design,
  currentProduct,
  isOpen,
  onToggle,
  onUpdateDesign,
  onUpdateText
}: TextCustomizerProps) => {
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
              <span className="fw-bold text-white">T</span>
            </div>
            <div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-1">Child's Name</h3>
              <p className="small text-muted mb-0">{design.text || 'Enter a name'}</p>
            </div>
          </div>
          <div className={`rounded-circle d-flex align-items-center justify-content-center transition ${
            isOpen ? 'bg-warning bg-opacity-10' : 'bg-light'
          }`} style={{width: '2rem', height: '2rem'}}>
            <span className={`fs-5 transition ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="card-body border-top border-light">
          <div className="d-flex flex-column gap-4 gap-sm-5">
            {/* Name Input */}
            <div>
              <label className="form-label small fw-medium text-dark mb-3">
                Child's Name
              </label>
              <input
                type="text"
                value={design.text}
                onChange={(e) => onUpdateText(e.target.value)}
                placeholder="Enter name here..."
                maxLength={currentProduct.maxTextLength}
                className="form-control form-control-rainbow"
              />
              <div className="small text-muted mt-2 d-flex justify-content-between">
                <span>{design.text.length}/{currentProduct.maxTextLength} characters</span>
                {design.text.length > 0 && (
                  <span className="text-primary fw-medium">Name added!</span>
                )}
              </div>
            </div>

            {/* Font Style */}
            <div>
              <label className="form-label small fw-medium text-dark mb-3">
                Font Style
              </label>
              <select
                value={design.fontFamily}
                onChange={(e) => onUpdateDesign({ fontFamily: e.target.value })}
                className="form-select form-control-rainbow"
              >
                {FONTS.map((font) => (
                  <option key={font.id} value={font.fontFamily}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
