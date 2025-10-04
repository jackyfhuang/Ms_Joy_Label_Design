'use client'

import { Header } from '@/components/layout'
import { Heart, Award, Users, MapPin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-soft-rainbow">
      <Header />
      
      {/* Hero Section */}
      <section className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4 text-rainbow">
                About Ms. Joy
              </h1>
              
              <p className="lead text-muted mb-5">
                A Senior ECE Teacher passionate about creating beautiful, durable name tags for children
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-5">
        <div className="row g-5">
          {/* Story Section */}
          <div className="col-lg-8">
            <div className="card card-rainbow p-5">
              <div className="card-body">
                <h2 className="h3 fw-bold mb-4">My Story</h2>
                <p className="mb-4">
                  As a Senior Early Childhood Educator, I've spent years working with children and their families. 
                  I've seen firsthand how important it is for children to have their belongings clearly labeled - 
                  from backpacks and lunch boxes to water bottles and jackets.
                </p>
                <p className="mb-4">
                  Traditional labels often fall off, fade, or get damaged through daily use. That's why I started 
                  creating professional-quality embroidered name tags that are waterproof, durable, and beautiful.
                </p>
                <p className="mb-0">
                  Every name tag is handcrafted with love and attention to detail. I believe every child deserves 
                  something special that makes them feel proud of their belongings.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="col-lg-4">
            <div className="card card-rainbow h-100 p-4">
              <div className="card-body text-center">
                <div className="mb-4">
                  <div className="bg-primary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <Award size={40} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-2">Senior ECE Teacher</h3>
                  <p className="text-muted">Years of experience working with children and families</p>
                </div>
                
                <div className="mb-4">
                  <div className="bg-secondary-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <Users size={40} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-2">500+ Happy Families</h3>
                  <p className="text-muted">Families trust us with their children's name tags</p>
                </div>
                
                <div className="mb-0">
                  <div className="bg-success-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <MapPin size={40} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-2">Richmond, BC</h3>
                  <p className="text-muted">Local pickup available for our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-pink-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <Heart size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">Made with Love</h3>
                <p className="text-muted">
                  Every name tag is crafted with care and attention to detail, 
                  understanding that it will be part of a child's daily routine.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-purple-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <Award size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">Professional Quality</h3>
                <p className="text-muted">
                  Using high-quality materials and professional embroidery techniques 
                  to ensure your name tags last through years of daily use.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card card-rainbow h-100 text-center p-4">
              <div className="card-body">
                <div className="bg-success-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                  <Users size={30} className="text-white" />
                </div>
                <h3 className="h5 fw-bold mb-3">Community Focused</h3>
                <p className="text-muted">
                  Supporting local families with convenient pickup options 
                  and personalized service that big companies can't provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="card card-rainbow p-5">
              <div className="card-body">
                <h2 className="h3 fw-bold mb-4">Ready to Create Something Special?</h2>
                <p className="text-muted mb-4">
                  Let's work together to create the perfect name tag for your child. 
                  With my experience as an ECE teacher, I understand what children and parents need.
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                  <a href="/design" className="btn btn-rainbow">
                    Start Designing
                  </a>
                  <a href="/contact" className="btn btn-outline-primary">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
