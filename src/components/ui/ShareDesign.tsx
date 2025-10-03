'use client'

import { useState, useMemo } from 'react'
import { Share2, Copy, Check, Instagram, MessageCircle } from 'lucide-react'
import { TagDesign } from '@/types/designer'

interface ShareDesignProps {
  design: TagDesign
  onClose: () => void
}

export function ShareDesign({ design, onClose }: ShareDesignProps) {
  const [copied, setCopied] = useState(false)

  const shareText = useMemo(() => {
    return `Check out my custom name tag design! 🎨✨
    
Name: ${design.text}
Style: ${design.fontFamily}
Colors: ${design.letterColors.length > 1 ? 'Rainbow' : design.textColor}
Icons: ${design.selectedIcon ? 'Yes' : 'No'}

Created with @msjoy_labeldesign 💕
#CustomNameTags #PersonalizedTags #KidsLabels`
  }, [design.text, design.fontFamily, design.letterColors, design.textColor, design.selectedIcon])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const shareToInstagram = () => {
    const encodedText = encodeURIComponent(shareText)
    const instagramUrl = `https://www.instagram.com/create/story/?text=${encodedText}`
    window.open(instagramUrl, '_blank')
    onClose()
  }

  const shareToWhatsApp = () => {
    const encodedText = encodeURIComponent(shareText)
    const whatsappUrl = `https://wa.me/?text=${encodedText}`
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-rainbow">
          <div className="modal-header border-0 pb-0">
            <div className="d-flex align-items-center gap-2">
              <Share2 className="text-primary" size={24} />
              <h5 className="modal-title fw-bold text-rainbow">Share Your Design</h5>
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
                <h6 className="fw-semibold mb-3">Share Options</h6>
                
                <div className="d-grid gap-3">
                  <button
                    onClick={shareToInstagram}
                    className="btn btn-outline-primary d-flex align-items-center gap-3 justify-content-start"
                  >
                    <Instagram size={20} />
                    <span>Share to Instagram Story</span>
                  </button>
                  
                  <button
                    onClick={shareToWhatsApp}
                    className="btn btn-outline-success d-flex align-items-center gap-3 justify-content-start"
                  >
                    <MessageCircle size={20} />
                    <span>Share to WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={copyToClipboard}
                    className="btn btn-outline-secondary d-flex align-items-center gap-3 justify-content-start"
                  >
                    {copied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
              </div>
              
              <div className="col-md-6">
                <h6 className="fw-semibold mb-3">Preview</h6>
                <div className="bg-light rounded-rainbow p-3">
                  <p className="small text-muted mb-2">
                    {shareText.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
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
              Done Sharing ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
