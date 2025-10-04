'use client'

import { useRouter } from 'next/navigation'
import { Instagram, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Header } from '@/components/layout'
import { Cart } from '@/components/cart'
import { ExitIntentPopup, useExitIntent } from '@/components/ui/ExitIntentPopup'
import { useCartStore } from '@/stores/cart'
import { APP_CONFIG } from '@/lib/constants'

export default function Home() {
  const router = useRouter()
  const { getTotalItems, toggleCart } = useCartStore()
  const [isMounted, setIsMounted] = useState(false)
  const { showPopup, setShowPopup } = useExitIntent()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-soft-rainbow">
      <Header />
      
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4 text-rainbow">
                Beautiful Name Tags for Your Child
              </h1>
              
              <p className="lead text-muted mb-5 fs-5">
                Professional quality embroidered tags that last through every adventure
              </p>
              
              <div className="d-flex justify-content-center mb-5">
                <button
                  onClick={() => router.push('/design')}
                  className="btn btn-rainbow btn-lg px-5 py-3 fw-bold"
                  style={{transition: 'all 0.3s ease'}}
                >
                  Design Your Tag
                </button>
              </div>

              {/* Trust Signals */}
              <div className="text-center">
                <p className="text-muted mb-0">
                  Made by an ECE Teacher • Free Richmond Pickup • Waterproof & Durable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="card-title h5 fw-bold mb-3">Personalized</h3>
                <p className="card-text text-muted">
                  Custom colors, fonts, and icons to make each tag uniquely yours
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="card-title h5 fw-bold mb-3">Waterproof</h3>
                <p className="card-text text-muted">
                  Built to last through daily adventures and all weather conditions
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="card-title h5 fw-bold mb-3">Local Pickup</h3>
                <p className="card-text text-muted">
                  Convenient Richmond pickup available - support your local community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-rainbow-gradient py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold mb-4 text-white">
                Simple Pricing
              </h2>
              <p className="lead text-white">
                Choose the perfect size for your child
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-rainbow h-100 text-center">
                <div className="card-body p-4">
                  <h3 className="card-title h4 fw-bold mb-3">Standard</h3>
                  <div className="display-4 fw-bold mb-3">$10</div>
                  <p className="text-muted mb-4">2.5cm width, one icon on each side</p>
                  <button className="btn btn-rainbow btn-lg w-100">
                    Choose This
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-rainbow h-100 text-center">
                <div className="card-body p-4">
                  <h3 className="card-title h4 fw-bold mb-3">Large</h3>
                  <div className="display-4 fw-bold mb-3">$12</div>
                  <p className="text-muted mb-4">3cm with single icon</p>
                  <button className="btn btn-rainbow btn-lg w-100">
                    Choose This
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-rainbow h-100 text-center">
                <div className="card-body p-4">
                  <h3 className="card-title h4 fw-bold mb-3">Small</h3>
                  <div className="display-4 fw-bold mb-3">$8</div>
                  <p className="text-muted mb-4">Single colour text, no icons</p>
                  <button className="btn btn-rainbow btn-lg w-100">
                    Choose This
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="display-5 fw-bold mb-4 text-rainbow">
              Explore Our Site
            </h2>
            <p className="lead text-muted">
              Everything you need to know about our name tags
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">Gallery</h3>
                <p className="text-muted mb-4">
                  See beautiful examples of our custom name tags
                </p>
                <a href="/gallery" className="btn btn-outline-primary w-100">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">About Ms. Joy</h3>
                <p className="text-muted mb-4">
                  Learn about the ECE teacher behind your name tags
                </p>
                <a href="/about" className="btn btn-outline-primary w-100">
                  Our Story
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">FAQ</h3>
                <p className="text-muted mb-4">
                  Get answers to common questions about our products
                </p>
                <a href="/faq" className="btn btn-outline-primary w-100">
                  View FAQ
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">Contact</h3>
                <p className="text-muted mb-4">
                  Get in touch and learn about local pickup options
                </p>
                <a href="/contact" className="btn btn-outline-primary w-100">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">Design Tool</h3>
                <p className="text-muted mb-4">
                  Create your custom name tag with our designer
                </p>
                <button
                  onClick={() => router.push('/design')}
                  className="btn btn-rainbow w-100"
                >
                  Start Designing
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <h3 className="h5 fw-bold mb-3">Instagram</h3>
                <p className="text-muted mb-4">
                  Follow us for inspiration and latest updates
                </p>
                <a 
                  href="https://instagram.com/msjoy_labeldesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary w-100"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart Button */}
      {isMounted && getTotalItems() > 0 && (
        <button
          onClick={toggleCart}
          className="btn btn-rainbow position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow-lg"
          style={{width: '70px', height: '70px', zIndex: 1000}}
        >
          <div className="position-relative">
            <span className="fs-3">🛒</span>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
              {getTotalItems()}
            </span>
          </div>
        </button>
      )}

      <Cart />
      <ExitIntentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}