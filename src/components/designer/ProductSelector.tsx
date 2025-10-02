import { PRODUCT_TYPES } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { TagDesign } from '@/types/designer'

interface ProductSelectorProps {
  design: TagDesign
  currentProduct: any
  isOpen: boolean
  onToggle: () => void
  onUpdateDesign: (updates: Partial<TagDesign>) => void
}

export const ProductSelector = ({
  design,
  currentProduct,
  isOpen,
  onToggle,
  onUpdateDesign
}: ProductSelectorProps) => {
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
              🏷️
            </div>
            <div>
              <h3 className="h5 h4-sm fw-semibold text-dark mb-1">Tag Style</h3>
              <p className="small text-muted mb-0">{currentProduct.name} - <span className="fw-medium text-primary">${currentProduct.price}</span></p>
            </div>
          </div>
          <div className={`rounded-circle d-flex align-items-center justify-content-center transition-all ${
            isOpen ? 'bg-primary bg-opacity-10' : 'bg-light'
          }`} style={{width: '2rem', height: '2rem'}}>
            <span className={`fs-5 transition-all ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="card-body border-top border-light">
          <div className="d-flex flex-column gap-3 gap-sm-4">
            {PRODUCT_TYPES.map((product) => (
              <button
                key={product.id}
                onClick={() => onUpdateDesign({ productType: product.id })}
                className={`btn btn-link w-100 p-4 p-sm-5 text-start transition-all rounded-rainbow ${
                  design.productType === product.id ? 'shadow-lg' : ''
                }`}
                style={{
                  background: design.productType === product.id 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))'
                    : 'rgba(255, 255, 255, 0.6)',
                  border: design.productType === product.id
                    ? '2px solid rgba(99, 102, 241, 0.3)'
                    : '1px solid rgba(229, 231, 235, 0.4)',
                  backdropFilter: 'blur(8px)',
                  textDecoration: 'none'
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3 gap-sm-4">
                    <div className={`rounded-rainbow d-flex align-items-center justify-content-center ${
                      design.productType === product.id ? 'shadow' : ''
                    }`} style={{
                      width: '3rem',
                      height: '3rem',
                      fontSize: '1.5rem',
                      background: design.productType === product.id
                        ? 'var(--soft-rainbow)'
                        : 'linear-gradient(135deg, #f9fafb, #f3f4f6)'
                    }}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className={`fw-semibold h6 ${
                        design.productType === product.id ? 'text-primary' : 'text-dark'
                      }`}>{product.name}</h3>
                      <p className="small text-muted d-none d-sm-block mb-0">{product.description}</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <div className={`h5 fw-bold ${
                      design.productType === product.id ? 'text-primary' : 'text-dark'
                    }`}>${product.price}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
