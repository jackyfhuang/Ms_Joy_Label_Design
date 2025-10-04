import { TagDesign } from '@/types/designer'
import { ArrowLeft } from 'lucide-react'

interface DesignProgressProps {
  design: TagDesign
  onBack?: () => void
}

export const DesignProgress = ({ design, onBack }: DesignProgressProps) => {
  const steps = [
    { label: 'Style', completed: true, icon: '🏷️' },
    { label: 'Name', completed: design.text !== 'Your Name', icon: '✏️' },
    { label: 'Icons', completed: design.selectedIcon !== null || design.selectedIcon2 !== null, icon: '🎨' },
    { label: 'Colors', completed: design.textColor !== '#000000' || design.backgroundColor !== '#FFFFFF', icon: '🌈' }
  ]

  return (
    <div className="mb-4 mb-sm-5">
      <div className="card card-rainbow p-4 p-sm-5">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 gap-sm-3">
          {/* Back Arrow - positioned on the left */}
          {onBack && (
            <button
              onClick={onBack}
              className="btn btn-link d-flex align-items-center justify-content-center text-muted text-decoration-none p-2 rounded-rainbow"
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                border: 'none'
              }}
              title="Back to Home"
            >
              <ArrowLeft size={14} />
            </button>
          )}
          
          {/* Progress Icons - centered */}
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 gap-sm-4 gap-lg-5">
            {steps.map((step, index) => (
              <div key={step.label} className="d-flex flex-column flex-sm-row align-items-center gap-2 gap-sm-3">
                <div className={`rounded-rainbow d-flex align-items-center justify-content-center fw-medium transition-all ${
                  step.completed 
                    ? 'shadow-lg' 
                    : ''
                }`} style={{
                  width: '3rem',
                  height: '3rem',
                  fontSize: '1.25rem',
                  background: step.completed 
                    ? 'var(--rainbow-gradient)' 
                    : 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                  color: step.completed ? 'white' : '#9ca3af'
                }}>
                  {step.completed ? '✓' : step.icon}
                </div>
                <span className={`fw-medium transition-colors ${
                  step.completed ? 'text-primary' : 'text-muted'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Spacer to balance the layout when back button is present */}
          {onBack && <div style={{ width: '2rem' }}></div>}
        </div>
      </div>
    </div>
  )
}
