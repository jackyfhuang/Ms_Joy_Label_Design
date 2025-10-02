export interface TagDesign {
  productType: string
  text: string
  fontSize: number
  fontFamily: string
  textColor: string
  backgroundColor: string
  selectedIcon: number | null
  selectedIcon2: number | null
  iconSize: number
  tagWidth: number
  tagHeight: number
  metalRingColor: string
  letterColors: string[]
}

export interface TagDesignerProps {
  onBack: () => void
}
