'use client'

import { useRouter } from 'next/navigation'
import { Instagram, Heart, Sparkles, Ruler } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Header } from '@/components/layout'
import { Cart } from '@/components/cart'
import { SizeGuide } from '@/components/ui/SizeGuide'
import { ExitIntentPopup, useExitIntent } from '@/components/ui/ExitIntentPopup'
import { useCartStore } from '@/stores/cart'
import { APP_CONFIG } from '@/lib/constants'

export default function Home() {
  const router = useRouter()
  const { getTotalItems, toggleCart } = useCartStore()
  const [isMounted, setIsMounted] = useState(false)
  const [showSizeGuide, setShowSizeGuide] = useState(false)
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
              {/* Floating sparkles */}
              <div className="position-relative mb-4">
                <Sparkles className="position-absolute top-0 start-0 text-primary bounce" size={30} />
                <Sparkles className="position-absolute top-0 end-0 text-secondary pulse" size={25} />
              </div>
              
              <div className="mb-4">
                <span className="badge bg-rainbow-gradient text-white px-4 py-2 rounded-pill fs-6 shadow-rainbow floating">
                  ✨ Custom Embroidered Name Tags ✨
                </span>
              </div>
              
              <h1 className="display-2 fw-bold mb-4 text-rainbow">
                Personalized Name Tags That Last
              </h1>
              
              <p className="lead text-muted mb-4 fs-4">
                Waterproof embroidered tags for backpacks and lunch boxes. 
                <br />
                <strong>Professional quality, made with love by a Senior ECE Teacher!</strong> 💕
              </p>

              {/* Social Proof */}
              <div className="row g-3 mb-5">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center gap-2 text-success">
                    <Heart size={20} className="text-danger" />
                    <span className="fw-semibold">500+ Happy Families</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center gap-2 text-primary">
                    <Sparkles size={20} />
                    <span className="fw-semibold">Waterproof & Durable</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center gap-2 text-warning">
                    <span className="fs-5">⭐</span>
                    <span className="fw-semibold">5-Star Reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center mb-4">
                <button
                  onClick={() => router.push('/designer')}
                  className="btn btn-pink btn-lg px-5 py-3 fw-bold pulse"
                  style={{transition: 'all 0.3s ease'}}
                >
                  🎨 Design Your Tag
                </button>
                <a 
                  href={`https://instagram.com/${APP_CONFIG.contact.instagram}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-purple btn-lg px-5 py-3 fw-bold text-decoration-none"
                  style={{transition: 'all 0.3s ease'}}
                >
                  📱 View Gallery
                </a>
              </div>

              {/* Urgency/Trust Signals */}
              <div className="text-center">
                <p className="text-success fw-semibold mb-2">
                  🚚 Free pickup in Richmond • ⏰ Order by 2pm for same-day processing
                </p>
                <div className="d-flex justify-content-center align-items-center gap-4 text-muted small">
                  <span>✅ 100% Satisfaction Guarantee</span>
                  <span>✅ Made by ECE Teacher</span>
                  <span>✅ Waterproof & Durable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 text-girly">
              Why Choose Our Tags? 💖
            </h2>
            <p className="lead text-muted fs-5">
              Every tag is crafted with love and attention to detail
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-girly h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-pink-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">🎨</span>
                </div>
                <h3 className="card-title h4 fw-bold text-pink mb-3">Personalized</h3>
                <p className="card-text text-muted">
                  Your child's name with custom colors, fonts, and adorable icons to make each tag uniquely theirs! ✨
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-girly h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-purple-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">💧</span>
                </div>
                <h3 className="card-title h4 fw-bold text-purple mb-3">Waterproof</h3>
                <p className="card-text text-muted">
                  Built to last through daily adventures, playground fun, and all weather conditions! 🌧️
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-girly h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-red-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">📍</span>
                </div>
                <h3 className="card-title h4 fw-bold text-danger mb-3">Local Pickup</h3>
                <p className="card-text text-muted">
                  Convenient RMD pickup available - support your local community while getting amazing products! 🏠
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 text-rainbow">
              What Parents Say 💕
            </h2>
            <p className="lead text-muted fs-5">
              Don't just take our word for it - hear from happy families!
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-girly h-100 p-4">
              <div className="card-body text-center">
                <div className="mb-3">
                  <span className="fs-1">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="card-text fst-italic mb-4">
                  "My daughter's name tag is absolutely perfect! The quality is amazing and it's survived months of daily use. Ms. Joy was so patient helping me design it!"
                </p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <span className="text-white fw-bold">S</span>
                  </div>
                  <div className="text-start">
                    <div className="fw-semibold">Sarah M.</div>
                    <div className="text-muted small">Mom of 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-girly h-100 p-4">
              <div className="card-body text-center">
                <div className="mb-3">
                  <span className="fs-1">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="card-text fst-italic mb-4">
                  "Finally found name tags that actually stay on! The waterproof feature is incredible - my son's tag looks brand new after 6 months."
                </p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <span className="text-white fw-bold">M</span>
                  </div>
                  <div className="text-start">
                    <div className="fw-semibold">Michael T.</div>
                    <div className="text-muted small">Dad of 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-girly h-100 p-4">
              <div className="card-body text-center">
                <div className="mb-3">
                  <span className="fs-1">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="card-text fst-italic mb-4">
                  "As a teacher, I can tell these are made with love and attention to detail. My students love their personalized tags!"
                </p>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="rounded-circle bg-success d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <span className="text-white fw-bold">J</span>
                  </div>
                  <div className="text-start">
                    <div className="fw-semibold">Jennifer L.</div>
                    <div className="text-muted small">Elementary Teacher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-pink-gradient py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold mb-4 text-white">
                Simple Pricing 💖
              </h2>
              <p className="lead text-white fs-5">
                Choose the perfect size for your child's personality
              </p>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="btn btn-outline-light btn-sm px-3 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-2"
              >
                <Ruler size={16} />
                Size Guide
              </button>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-girly h-100 text-center position-relative shadow-rainbow">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className="badge bg-success rounded-pill fs-6 px-3 py-2 pulse">⭐ Most Popular</span>
                </div>
                <div className="card-body p-4 pt-5">
                  <h3 className="card-title h3 fw-bold text-pink mb-3">Standard</h3>
                  <div className="display-4 fw-bold text-girly mb-4">$10</div>
                  <p className="text-muted fs-5 fw-medium mb-2">2.5cm width, one icon on each side</p>
                  <p className="text-success small mb-3">✅ Perfect for most kids</p>
                  <button className="btn btn-pink btn-lg w-100">
                    Choose This! 🌟
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-girly h-100 text-center position-relative">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className="badge bg-warning rounded-pill fs-6 px-3 py-2">🔥 Great Value</span>
                </div>
                <div className="card-body p-4 pt-5">
                  <h3 className="card-title h3 fw-bold text-purple mb-3">Large</h3>
                  <div className="display-4 fw-bold text-girly mb-4">$12</div>
                  <p className="text-muted fs-5 fw-medium mb-2">3cm with single icon</p>
                  <button className="btn btn-purple btn-lg w-100">
                    Choose This! 🔥
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-girly h-100 text-center position-relative">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className="badge bg-info rounded-pill fs-6 px-3 py-2">💜 Minimalist</span>
                </div>
                <div className="card-body p-4 pt-5">
                  <h3 className="card-title h3 fw-bold text-danger mb-3">Small</h3>
                  <div className="display-4 fw-bold text-girly mb-4">$8</div>
                  <p className="text-muted fs-5 fw-medium mb-2">Single colour text, no icons</p>
                  <button className="btn btn-red btn-lg w-100">
                    Choose This! 💜
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card card-girly text-center p-4">
                <h3 className="h4 fw-bold text-pink mb-3">💰 Bulk Discounts</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <span className="badge bg-success rounded-circle me-2" style={{width: '20px', height: '20px'}}></span>
                  <span className="text-muted">10+ tags: <span className="fw-bold text-success">10% off</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-4 fw-bold mb-4 text-rainbow">
              Frequently Asked Questions 🤔
            </h2>
            <p className="lead text-muted fs-5">
              Everything you need to know about our name tags
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    How long do the name tags last?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Our waterproof embroidered name tags are designed to last for years! They're machine washable and can withstand daily wear and tear, playground adventures, and all weather conditions.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    What's included with each order?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Each order includes: 1 personalized embroidered name tag, metal ring for easy attachment, and care instructions. You can also add additional icons and choose from our color palette!
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    How do I attach the name tag?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Simply thread the metal ring through your backpack's zipper pull, lunch box handle, or any loop on your child's belongings. The ring is designed to stay secure while being easy to remove if needed.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    Can I customize colors and fonts?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Absolutely! Our designer tool lets you choose from a beautiful palette of soft pastel colors, different fonts, and adorable icons. You can even use different colors for each letter to create a rainbow effect!
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    What if I'm not happy with my order?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    We offer a 100% satisfaction guarantee! If you're not completely happy with your name tag, contact us and we'll work with you to make it right or provide a full refund.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-5" style={{background: 'linear-gradient(135deg, #f8f4ff, #fff0f8, #f5f0ff, #e8f5e8, #e3f2fd)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="display-5 fw-bold mb-4" style={{color: '#6B7280'}}>
                Get in Touch! 💖
              </h2>
              <p className="lead fs-5" style={{color: '#8B9DC3'}}>
                Ready to create something special? Let's bring your vision to life!
              </p>
            </div>
          </div>
          
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card card-girly h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-pink-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <div style={{
                      width: '40px', 
                      height: '40px', 
                      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-pink mb-3">Instagram</h3>
                  <a 
                    href="https://instagram.com/msjoy_labeldesign" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none fs-5"
                  >
                    <span className="text-pink">@msjoy_labeldesign</span>
                  </a>
                  <p className="text-muted mt-2">Follow for inspiration & updates! ✨</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card card-girly h-100 text-center p-4">
                <div className="card-body">
                  <div className="bg-purple-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                    <div style={{
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: '#FF2442', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      小红书
                    </div>
                  </div>
                  <h3 className="h4 fw-bold text-purple mb-3">Xiaohongshu</h3>
                  <a 
                    href="https://xhslink.com/m/8YhbFNq3p5W" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none fs-5"
                  >
                    <span className="text-purple">Follow & Message</span>
                  </a>
                  <p className="text-muted mt-2">Quick questions & custom orders! 💬</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card card-girly text-center p-4">
                <div className="card-body">
                  <p className="fs-5 mb-2">
                    Made with <Heart className="text-danger" size={20} /> by <span className="fw-bold text-pink">Ms. Joy</span>
                  </p>
                  <p className="text-muted mb-0">
                    Senior ECE Teacher • RMD Pickup Available • Handcrafted with Love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart Button */}
      {isMounted && getTotalItems() > 0 && (
        <button
          onClick={toggleCart}
          className="btn btn-pink position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow-lg bounce"
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
      <SizeGuide isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
      <ExitIntentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}