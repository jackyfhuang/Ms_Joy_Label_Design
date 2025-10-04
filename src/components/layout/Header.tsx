'use client'

import { APP_CONFIG } from '@/lib/constants'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="navbar navbar-expand-lg navbar-rainbow sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand text-decoration-none">
          <h1 className="h4 mb-0 fw-bold text-rainbow">Ms. Joy Label Design</h1>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link 
                href="/"
                className={`nav-link ${isActive('/') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/gallery"
                className={`nav-link ${isActive('/gallery') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/design"
                className={`nav-link ${isActive('/design') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/about"
                className={`nav-link ${isActive('/about') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/faq"
                className={`nav-link ${isActive('/faq') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'text-primary fw-semibold' : 'text-muted'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                href={`https://instagram.com/${APP_CONFIG.contact.instagram}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link text-muted text-decoration-none"
              >
                <Instagram size={18} className="me-1" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export { Header }
export default Header
