'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function LoadingSpinner({ size = 'md', text, className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  }

  return (
    <div className={`d-flex flex-column align-items-center justify-content-center gap-3 ${className}`}>
      <div className={`spinner-border text-primary ${sizeClasses[size]}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && (
        <p className="text-muted mb-0 fw-medium">{text}</p>
      )}
    </div>
  )
}

export function LoadingSkeleton({ lines = 3, className = '' }: { lines?: number, className?: string }) {
  return (
    <div className={`${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="placeholder-glow">
          <div className={`placeholder ${index === 0 ? 'col-8' : index === 1 ? 'col-6' : 'col-4'}`}></div>
        </div>
      ))}
    </div>
  )
}
