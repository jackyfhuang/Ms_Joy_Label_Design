import { TagDesign } from '@/types/designer'

interface DesignProgressProps {
  design: TagDesign
}

export const DesignProgress = ({ design }: DesignProgressProps) => {
  const steps = [
    { label: 'Style', completed: true, icon: '🏷️' },
    { label: 'Name', completed: design.text !== 'Your Name', icon: '✏️' },
    { label: 'Icons', completed: design.selectedIcon !== null || design.selectedIcon2 !== null, icon: '🎨' },
    { label: 'Colors', completed: design.textColor !== '#000000' || design.backgroundColor !== '#FFFFFF', icon: '🌈' }
  ]

  return (
    <div className="mb-4 mb-sm-5">
      <div className="card card-rainbow p-4 p-sm-5">
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
      </div>
    </div>
  )
}
