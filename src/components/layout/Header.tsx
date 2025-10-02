'use client'

import { APP_CONFIG } from '@/lib/constants'
import { Instagram } from 'lucide-react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-rainbow sticky-top">
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <div className="bg-rainbow-gradient rounded-rainbow d-flex align-items-center justify-content-center me-3 shadow-rainbow" style={{width: '50px', height: '50px'}}>
            <span className="fs-4">✂️</span>
          </div>
          <div>
            <h1 className="h5 mb-0 fw-bold text-rainbow">Ms. Joy</h1>
            <p className="small text-muted mb-0">Label Design</p>
          </div>
        </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                href={`https://instagram.com/${APP_CONFIG.contact.instagram}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link d-flex align-items-center text-decoration-none"
              >
                <Instagram size={20} className="me-2 text-primary" />
                <span className="text-primary">Instagram</span>
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
