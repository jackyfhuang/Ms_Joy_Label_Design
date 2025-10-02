import { APP_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-aurora-gradient text-dark py-5" style={{background: 'linear-gradient(135deg, #f8f4ff, #fff0f8, #f5f0ff, #e8f5e8, #e3f2fd)'}}>
      <div className="container text-center">
        <h2 className="h2 fw-bold mb-4">Get in Touch</h2>
        
        <div className="row mb-4">
          <div className="col-12 mb-3">
            <h3 className="fw-semibold mb-2">Instagram</h3>
            <a 
              href={`https://instagram.com/${APP_CONFIG.contact.instagram}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              @{APP_CONFIG.contact.instagram}
            </a>
          </div>
        </div>
        
        <p className="text-secondary small">
          Made by Ms. Joy • Senior ECE Teacher • RMD Pickup Available
        </p>
      </div>
    </footer>
  )
}

export default Footer
