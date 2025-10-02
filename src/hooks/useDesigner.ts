import { useState, useCallback, useEffect, useRef } from 'react'
import { TagDesign } from '@/types/designer'
import { getProductById, getDefaultProduct } from '@/data/products'
import { generateRainbowColors, calculateTagWidth } from '@/lib/utils'
import { DEFAULT_TAG_DESIGN } from '@/lib/constants'

export const useDesigner = () => {
  const defaultProduct = getDefaultProduct()
  const [design, setDesign] = useState<TagDesign>({
    productType: defaultProduct.id,
    text: DEFAULT_TAG_DESIGN.text,
    fontSize: defaultProduct.defaultSettings.fontSize,
    fontFamily: defaultProduct.defaultSettings.fontFamily,
    textColor: defaultProduct.defaultSettings.textColor,
    backgroundColor: defaultProduct.defaultSettings.backgroundColor,
    selectedIcon: DEFAULT_TAG_DESIGN.selectedIcon,
    selectedIcon2: DEFAULT_TAG_DESIGN.selectedIcon2,
    iconSize: DEFAULT_TAG_DESIGN.iconSize,
    tagWidth: defaultProduct.dimensions.width,
    tagHeight: defaultProduct.dimensions.height,
    metalRingColor: DEFAULT_TAG_DESIGN.metalRingColor,
    letterColors: generateRainbowColors(DEFAULT_TAG_DESIGN.text),
  })

  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['product', 'text']))
  const [selectedLetterIndex, setSelectedLetterIndex] = useState<number | null>(null)
  const [showSameColorPicker, setShowSameColorPicker] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const currentProduct = getProductById(design.productType) || getDefaultProduct()

  // Auto-save functionality
  const autoSave = useCallback(async () => {
    if (!design.text.trim()) return
    
    setIsSaving(true)
    try {
      // Simulate auto-save (in real app, this would save to localStorage or API)
      localStorage.setItem('msjoy-design-autosave', JSON.stringify({
        design,
        timestamp: new Date().toISOString()
      }))
      setLastSaved(new Date())
    } catch (error) {
      console.error('Auto-save failed:', error)
    } finally {
      setIsSaving(false)
    }
  }, [design])

  // Load saved design on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('msjoy-design-autosave')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.design && parsed.timestamp) {
          setDesign(parsed.design)
          setLastSaved(new Date(parsed.timestamp))
        }
      }
    } catch (error) {
      console.error('Failed to load saved design:', error)
    }
  }, [])

  // Auto-save when design changes (with debounce)
  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }
    
    saveTimeoutRef.current = setTimeout(() => {
      autoSave()
    }, 2000) // Auto-save after 2 seconds of inactivity

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [design, autoSave])

  const updateDesign = useCallback((updates: Partial<TagDesign>) => {
    setDesign(prev => {
      const newDesign = { ...prev, ...updates }
      
      if (updates.productType && updates.productType !== prev.productType) {
        const newProduct = getProductById(updates.productType)
        if (newProduct) {
          newDesign.tagWidth = newProduct.dimensions.width
          newDesign.tagHeight = newProduct.dimensions.height
          newDesign.fontSize = newProduct.defaultSettings.fontSize
          newDesign.fontFamily = newProduct.defaultSettings.fontFamily
          newDesign.textColor = newProduct.defaultSettings.textColor
          newDesign.backgroundColor = newProduct.defaultSettings.backgroundColor
          newDesign.selectedIcon = null
          newDesign.selectedIcon2 = null
        }
      }
      
      return newDesign
    })
  }, [])

  const updateText = useCallback((newText: string) => {
    const newLetterColors = generateRainbowColors(newText)
    setDesign(prev => ({
      ...prev,
      text: newText,
      letterColors: newLetterColors
    }))
  }, [])

  const resetDesign = useCallback(() => {
    const product = getProductById(design.productType) || getDefaultProduct()
    const newText = DEFAULT_TAG_DESIGN.text
    setDesign({
      productType: design.productType,
      text: newText,
      fontSize: product.defaultSettings.fontSize,
      fontFamily: product.defaultSettings.fontFamily,
      textColor: product.defaultSettings.textColor,
      backgroundColor: product.defaultSettings.backgroundColor,
      selectedIcon: null,
      selectedIcon2: null,
      iconSize: DEFAULT_TAG_DESIGN.iconSize,
      tagWidth: product.dimensions.width,
      tagHeight: product.dimensions.height,
      metalRingColor: DEFAULT_TAG_DESIGN.metalRingColor,
      letterColors: generateRainbowColors(newText),
    })
  }, [design.productType])

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }, [])

  const dynamicTagWidth = calculateTagWidth(
    currentProduct.dimensions.width,
    design.text.length,
    ((design.selectedIcon ? 24 : 0) + (design.selectedIcon2 ? 24 : 0))
  )

  return {
    design,
    currentProduct,
    openSections,
    selectedLetterIndex,
    showSameColorPicker,
    dynamicTagWidth,
    isSaving,
    lastSaved,
    updateDesign,
    updateText,
    resetDesign,
    toggleSection,
    setSelectedLetterIndex,
    setShowSameColorPicker,
    autoSave,
  }
}
