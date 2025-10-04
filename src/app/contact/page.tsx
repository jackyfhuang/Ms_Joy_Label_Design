'use client'

import { Header } from '@/components/layout'
import { Instagram, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-soft-rainbow">
      <Header />
      
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4 text-rainbow">
                Get in Touch
              </h1>
              
              <p className="lead text-muted mb-5">
                Ready to create something special? Let's bring your vision to life!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-primary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                  <Instagram size={40} className="text-white" />
                </div>
                <h3 className="h4 fw-bold mb-3">Instagram</h3>
                <a 
                  href="https://instagram.com/msjoy_labeldesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none fs-5 mb-3 d-block"
                >
                  @msjoy_labeldesign
                </a>
                <p className="text-muted">
                  Follow for inspiration, updates, and quick questions. 
                  Perfect for seeing our latest designs and getting styling ideas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-secondary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                  <MessageCircle size={40} className="text-white" />
                </div>
                <h3 className="h4 fw-bold mb-3">Xiaohongshu</h3>
                <a 
                  href="https://xhslink.com/m/8YhbFNq3p5W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none fs-5 mb-3 d-block"
                >
                  小红书
                </a>
                <p className="text-muted">
                  Quick questions and custom orders. 
                  Great for detailed discussions about your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Information */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4 text-rainbow">
              Local Pickup Information
            </h2>
            <p className="lead text-muted">
              Convenient Richmond pickup available for local families
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-success-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <MapPin size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">Location</h3>
                <p className="text-muted">
                  Richmond, BC
                </p>
                <p className="text-muted small">
                  Free pickup available for local customers. 
                  Exact location provided after order confirmation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-warning-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <Clock size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">Pickup Times</h3>
                <p className="text-muted">
                  Flexible Scheduling
                </p>
                <p className="text-muted small">
                  We work around your schedule. 
                  Available evenings and weekends by appointment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-info-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <MessageCircle size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">How to Arrange</h3>
                <p className="text-muted">
                  Contact Us First
                </p>
                <p className="text-muted small">
                  Message us on Instagram or Xiaohongshu to arrange 
                  a convenient pickup time that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card card-rainbow p-5">
              <div className="card-body text-center">
                <h2 className="h3 fw-bold mb-4">How to Order</h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                        <span className="text-white fw-bold">1</span>
                      </div>
                      <h4 className="h6 fw-bold">Design Your Tag</h4>
                      <p className="text-muted small">Use our designer tool to create your perfect name tag</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="bg-secondary-gradient rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                        <span className="text-white fw-bold">2</span>
                      </div>
                      <h4 className="h6 fw-bold">Contact Us</h4>
                      <p className="text-muted small">Message us with your design and pickup preference</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="bg-success-gradient rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px'}}>
                        <span className="text-white fw-bold">3</span>
                      </div>
                      <h4 className="h6 fw-bold">Pick Up & Enjoy</h4>
                      <p className="text-muted small">Collect your custom name tag when ready</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5">
                  <a href="/design" className="btn btn-rainbow me-3">
                    Start Designing
                  </a>
                  <a href="https://instagram.com/msjoy_labeldesign" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    Contact on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card card-rainbow text-center p-4">
              <div className="card-body">
                <p className="mb-2">
                  Made with <span className="text-danger">♥</span> by <span className="fw-bold">Ms. Joy</span>
                </p>
                <p className="text-muted mb-0 small">
                  Senior ECE Teacher • Richmond Pickup Available • Handcrafted with Love
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
