'use client'

import { useState } from 'react'
import { X, Ruler, Info } from 'lucide-react'

interface SizeGuideProps {
  isOpen: boolean
  onClose: () => void
}

export function SizeGuide({ isOpen, onClose }: SizeGuideProps) {
  if (!isOpen) return null

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-rainbow">
          <div className="modal-header border-0 pb-0">
            <div className="d-flex align-items-center gap-2">
              <Ruler className="text-primary" size={24} />
              <h5 className="modal-title fw-bold text-rainbow">Size Guide</h5>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          
          <div className="modal-body">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card card-girly h-100 p-4">
                  <div className="card-body text-center">
                    <div className="bg-primary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      <span className="fs-2 text-white">📏</span>
                    </div>
                    <h3 className="h4 fw-bold text-primary mb-3">Mini</h3>
                    <div className="mb-3">
                      <span className="badge bg-primary fs-6 px-3 py-2">2cm width</span>
                    </div>
                    <p className="text-muted mb-4">
                      Perfect for smaller items like pencil cases, small bags, or delicate belongings.
                    </p>
                    <div className="text-start">
                      <h6 className="fw-semibold mb-2">Best for:</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Pencil cases</li>
                        <li>• Small backpacks</li>
                        <li>• Delicate items</li>
                        <li>• Younger children (3-5 years)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card card-girly h-100 p-4">
                  <div className="card-body text-center">
                    <div className="bg-success-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      <span className="fs-2 text-white">📐</span>
                    </div>
                    <h3 className="h4 fw-bold text-success mb-3">Standard</h3>
                    <div className="mb-3">
                      <span className="badge bg-success fs-6 px-3 py-2">2.5cm width</span>
                      <span className="badge bg-warning ms-2 fs-6 px-3 py-2">Most Popular</span>
                    </div>
                    <p className="text-muted mb-4">
                      The perfect size for most backpacks, lunch boxes, and school supplies.
                    </p>
                    <div className="text-start">
                      <h6 className="fw-semibold mb-2">Best for:</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Regular backpacks</li>
                        <li>• Lunch boxes</li>
                        <li>• School supplies</li>
                        <li>• Most children (5+ years)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card card-girly h-100 p-4">
                  <div className="card-body text-center">
                    <div className="bg-info-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      <span className="fs-2 text-white">📏</span>
                    </div>
                    <h3 className="h4 fw-bold text-info mb-3">Large</h3>
                    <div className="mb-3">
                      <span className="badge bg-info fs-6 px-3 py-2">3cm width</span>
                    </div>
                    <p className="text-muted mb-4">
                      Great for larger backpacks, sports bags, and items that need extra visibility.
                    </p>
                    <div className="text-start">
                      <h6 className="fw-semibold mb-2">Best for:</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Large backpacks</li>
                        <li>• Sports bags</li>
                        <li>• Gym bags</li>
                        <li>• Older children (8+ years)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card card-girly h-100 p-4">
                  <div className="card-body text-center">
                    <div className="bg-secondary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                      <span className="fs-2 text-white">ℹ️</span>
                    </div>
                    <h3 className="h4 fw-bold text-secondary mb-3">Care Instructions</h3>
                    <div className="text-start">
                      <h6 className="fw-semibold mb-2">To keep your tags looking great:</h6>
                      <ul className="list-unstyled small text-muted">
                        <li>• Machine washable</li>
                        <li>• Air dry recommended</li>
                        <li>• Avoid bleach</li>
                        <li>• Iron on low heat if needed</li>
                        <li>• Waterproof and durable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modal-footer border-0 pt-0">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={onClose}
            >
              Got it! Thanks 💕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
