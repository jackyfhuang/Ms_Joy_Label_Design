'use client'

import { Header } from '@/components/layout'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-soft-rainbow">
      <Header />
      
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4 text-rainbow">
                Gallery
              </h1>
              
              <p className="lead text-muted mb-5">
                See the beautiful name tags we've created for families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="card card-rainbow p-5">
              <div className="card-body">
                <h2 className="h3 fw-bold mb-4">Coming Soon</h2>
                <p className="text-muted mb-4">
                  We're working on a beautiful gallery to showcase our custom name tags. 
                  In the meantime, check out our Instagram for the latest designs!
                </p>
                <a 
                  href="https://instagram.com/msjoy_labeldesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-rainbow"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sample Gallery Items - Placeholder */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-rainbow h-100">
              <div className="card-body text-center p-4">
                <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                  <span className="text-muted">Sample Design 1</span>
                </div>
                <h4 className="h6 fw-bold">Rainbow Name Tag</h4>
                <p className="text-muted small">Custom colors with matching icons</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100">
              <div className="card-body text-center p-4">
                <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                  <span className="text-muted">Sample Design 2</span>
                </div>
                <h4 className="h6 fw-bold">Classic Style</h4>
                <p className="text-muted small">Elegant single-color design</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100">
              <div className="card-body text-center p-4">
                <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                  <span className="text-muted">Sample Design 3</span>
                </div>
                <h4 className="h6 fw-bold">Fun Theme</h4>
                <p className="text-muted small">Playful icons and colors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card card-rainbow p-4">
              <div className="card-body">
                <h3 className="h4 fw-bold mb-3">Ready to Create Your Own?</h3>
                <p className="text-muted mb-4">
                  Use our designer tool to create a custom name tag for your child
                </p>
                <Link href="/design" className="btn btn-rainbow">
                  Start Designing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
