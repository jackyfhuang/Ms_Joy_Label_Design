'use client'

import { Header } from '@/components/layout'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-soft-rainbow">
      <Header />
      
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4 text-rainbow">
                Frequently Asked Questions
              </h1>
              
              <p className="lead text-muted mb-5">
                Everything you need to know about our name tags
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container py-5">
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
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                    How long does it take to make my name tag?
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Most orders are ready within 2-3 business days. Orders placed by 2pm can often be processed the same day. We'll keep you updated on your order status throughout the process.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
                    Do you offer bulk discounts?
                  </button>
                </h2>
                <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes! We offer 10% off for orders of 10 or more name tags. This is perfect for schools, daycares, or large families. Contact us for custom bulk pricing.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item border-0 mb-3 rounded-rainbow shadow-rainbow">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">
                    Can I pick up my order locally?
                  </button>
                </h2>
                <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes! We offer free pickup in Richmond, BC. This is a great way to save on shipping and support your local community. Contact us to arrange a pickup time that works for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card card-rainbow p-4">
              <div className="card-body">
                <h3 className="h4 fw-bold mb-3">Still Have Questions?</h3>
                <p className="text-muted mb-4">
                  We're here to help! Contact us directly and we'll get back to you quickly.
                </p>
                <a href="/contact" className="btn btn-rainbow">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
