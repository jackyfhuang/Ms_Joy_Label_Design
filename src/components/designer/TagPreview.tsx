import { forwardRef } from 'react'
import { Stage, Layer, Rect, Text, Group, Circle, Line } from 'react-konva'
import Konva from 'konva'
import { TagDesign } from '@/types/designer'
import { ICONS } from '@/data/icons'

interface TagPreviewProps {
  design: TagDesign
  currentProduct: any
  dynamicTagWidth: number
  stageRef: React.RefObject<Konva.Stage | null>
  onReset?: () => void
}

export const TagPreview = forwardRef<Konva.Stage, TagPreviewProps>(
  ({ design, currentProduct, dynamicTagWidth, stageRef, onReset }, ref) => {
    const selectedIcon = design.selectedIcon ? ICONS.find(icon => icon.id === design.selectedIcon) : null
    const selectedIcon2 = design.selectedIcon2 ? ICONS.find(icon => icon.id === design.selectedIcon2) : null

    const renderText = () => {
      return design.text.split('').map((letter, index) => {
        const letterWidth = design.fontSize * 0.6
        const totalTextWidth = design.text.length * letterWidth
        const startX = (dynamicTagWidth - totalTextWidth) / 2
        const letterX = startX + (index * letterWidth)
        
        return (
          <Text
            key={index}
            text={letter}
            fontSize={design.fontSize}
            fontFamily={design.fontFamily}
            fill={design.letterColors[index] || design.textColor}
            x={letterX}
            y={(design.tagHeight - design.fontSize) / 2}
            fontStyle="bold"
            shadowColor="#000000"
            shadowBlur={2}
            shadowOffset={{ x: 1, y: 1 }}
            shadowOpacity={0.3}
          />
        )
      })
    }

    const renderDualIcons = () => (
      <>
        {/* Left Icon */}
        {selectedIcon && (
          <Text
            text={selectedIcon.emoji}
            fontSize={24}
            x={8}
            y={(design.tagHeight - 24) / 2}
            fontFamily="Arial"
            shadowColor="#000000"
            shadowBlur={2}
            shadowOffset={{ x: 1, y: 1 }}
            shadowOpacity={0.2}
          />
        )}
        
        {/* Right Icon */}
        {selectedIcon2 && (
          <Text
            text={selectedIcon2.emoji}
            fontSize={24}
            x={dynamicTagWidth - 24 - 8}
            y={(design.tagHeight - 24) / 2}
            fontFamily="Arial"
            shadowColor="#000000"
            shadowBlur={2}
            shadowOffset={{ x: 1, y: 1 }}
            shadowOpacity={0.2}
          />
        )}
        
        {/* Text in Center */}
        {renderText()}
      </>
    )

    const renderSingleIcon = () => (
      <>
        {/* Single Icon */}
        {selectedIcon && (
          <Text
            text={selectedIcon.emoji}
            fontSize={24}
            x={10}
            y={(design.tagHeight - 24) / 2}
            fontFamily="Arial"
            shadowColor="#000000"
            shadowBlur={2}
            shadowOffset={{ x: 1, y: 1 }}
            shadowOpacity={0.2}
          />
        )}
        
        {/* Text */}
        {renderText()}
      </>
    )

    const renderTextOnly = () => (
      <>
        {/* Text Only */}
        {renderText()}
      </>
    )

    return (
      <div className="card card-rainbow shadow-lg">
        <div className="card-header bg-rainbow-gradient text-white border-0">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="h5 mb-0 fw-bold">Live Preview</h3>
            {onReset && (
              <button
                onClick={onReset}
                className="btn btn-outline-light btn-sm px-3 py-1 rounded-rainbow fw-medium"
                title="Start over with a new design"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        
        <div className="card-body p-3">
          <div className="d-flex justify-content-center align-items-center rounded-rainbow shadow-inner position-relative overflow-hidden" 
               style={{minHeight: '120px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
          <Stage
            width={dynamicTagWidth + 80}
            height={design.tagHeight + 60}
            ref={ref || stageRef}
          >
            <Layer>
              <Group x={40} y={30}>
                {/* Metal Ring - Professional realistic look with proper hole */}
                <Group x={0} y={design.tagHeight / 2}>
                  {/* Outer metal ring shadow */}
                  <Circle
                    radius={36}
                    fill="transparent"
                    stroke="#1a1a1a"
                    strokeWidth={1}
                    shadowColor="#000000"
                    shadowBlur={8}
                    shadowOffset={{ x: 3, y: 3 }}
                    shadowOpacity={0.4}
                  />
                  
                  {/* Create ring using stroke instead of fill */}
                  <Circle
                    radius={32}
                    fill="transparent"
                    stroke={design.metalRingColor}
                    strokeWidth={12}
                    shadowColor="#ffffff"
                    shadowBlur={2}
                    shadowOffset={{ x: -1, y: -1 }}
                    shadowOpacity={0.3}
                  />
                  
                  {/* Inner metal highlight */}
                  <Circle
                    radius={31}
                    fill="transparent"
                    stroke="#ffffff"
                    strokeWidth={2}
                    opacity={0.4}
                  />
                  
                  {/* Hole shadow/depth - this creates the visual depth of the hole */}
                  <Circle
                    radius={25}
                    fill="transparent"
                    stroke="#2a2a2a"
                    strokeWidth={1}
                    shadowColor="#000000"
                    shadowBlur={3}
                    shadowOffset={{ x: 1, y: 1 }}
                    shadowOpacity={0.6}
                  />
                </Group>
                
                {/* Tag Background with fabric texture */}
                <Rect
                  width={dynamicTagWidth}
                  height={design.tagHeight}
                  fill={design.backgroundColor}
                  stroke="#cccccc"
                  strokeWidth={1}
                  cornerRadius={12}
                  shadowColor="#000000"
                  shadowBlur={15}
                  shadowOffset={{ x: 6, y: 6 }}
                  shadowOpacity={0.25}
                />
                
                {/* Primary fabric weave - horizontal threads */}
                {Array.from({ length: Math.floor(design.tagHeight / 3) }).map((_, i) => (
                  <Line
                    key={`h-main-${i}`}
                    points={[0, i * 3 + 1.5, dynamicTagWidth, i * 3 + 1.5]}
                    stroke={design.backgroundColor === '#FFFFFF' ? '#b8b8b8' : 'rgba(255,255,255,0.4)'}
                    strokeWidth={0.8}
                    opacity={0.9}
                  />
                ))}
                
                {/* Secondary fabric weave - vertical threads */}
                {Array.from({ length: Math.floor(dynamicTagWidth / 4) }).map((_, i) => (
                  <Line
                    key={`v-main-${i}`}
                    points={[i * 4 + 2, 0, i * 4 + 2, design.tagHeight]}
                    stroke={design.backgroundColor === '#FFFFFF' ? '#b8b8b8' : 'rgba(255,255,255,0.4)'}
                    strokeWidth={0.6}
                    dash={[2, 1]}
                    opacity={0.7}
                  />
                ))}
                
                {/* Fine fabric grain - micro texture */}
                {Array.from({ length: Math.floor(design.tagHeight / 1.5) }).map((_, i) => (
                  <Line
                    key={`grain-h-${i}`}
                    points={[0, i * 1.5 + 0.5, dynamicTagWidth, i * 1.5 + 0.5]}
                    stroke={design.backgroundColor === '#FFFFFF' ? '#e0e0e0' : 'rgba(255,255,255,0.2)'}
                    strokeWidth={0.2}
                    opacity={0.5}
                  />
                ))}
                
                {Array.from({ length: Math.floor(dynamicTagWidth / 2) }).map((_, i) => (
                  <Line
                    key={`grain-v-${i}`}
                    points={[i * 2 + 1, 0, i * 2 + 1, design.tagHeight]}
                    stroke={design.backgroundColor === '#FFFFFF' ? '#e0e0e0' : 'rgba(255,255,255,0.2)'}
                    strokeWidth={0.2}
                    dash={[1, 3]}
                    opacity={0.4}
                  />
                ))}
                
                {/* Fabric nap direction - subtle directional texture */}
                <Rect
                  width={dynamicTagWidth}
                  height={design.tagHeight}
                  fill={design.backgroundColor === '#FFFFFF' ? 'rgba(180,180,180,0.08)' : 'rgba(255,255,255,0.06)'}
                  stroke="none"
                  cornerRadius={12}
                />
                
                {/* Fabric surface variation - realistic material properties */}
                <Rect
                  width={dynamicTagWidth}
                  height={design.tagHeight}
                  fill={design.backgroundColor === '#FFFFFF' ? 'rgba(220,220,220,0.12)' : 'rgba(255,255,255,0.08)'}
                  stroke="none"
                  cornerRadius={12}
                  opacity={0.7}
                />
                
                {/* Fabric inner weave shadow */}
                <Rect
                  width={dynamicTagWidth - 8}
                  height={design.tagHeight - 8}
                  x={4}
                  y={4}
                  fill="transparent"
                  stroke={design.backgroundColor === '#FFFFFF' ? '#d5d5d5' : 'rgba(0,0,0,0.15)'}
                  strokeWidth={0.5}
                  cornerRadius={8}
                />
                
                {/* Fabric edge seam highlight */}
                <Rect
                  width={dynamicTagWidth - 3}
                  height={design.tagHeight - 3}
                  x={1.5}
                  y={1.5}
                  fill="transparent"
                  stroke={design.backgroundColor === '#FFFFFF' ? '#f8f8f8' : 'rgba(255,255,255,0.5)'}
                  strokeWidth={1.2}
                  cornerRadius={10.5}
                />
                
                {/* Fabric edge shadow for depth */}
                <Rect
                  width={dynamicTagWidth - 1}
                  height={design.tagHeight - 1}
                  x={0.5}
                  y={0.5}
                  fill="transparent"
                  stroke={design.backgroundColor === '#FFFFFF' ? '#a0a0a0' : 'rgba(255,255,255,0.2)'}
                  strokeWidth={0.3}
                  cornerRadius={11.5}
                  opacity={0.6}
                />
                
                {/* Icons and Text Layout */}
                {currentProduct.layout === 'dual-icons' && renderDualIcons()}
                {currentProduct.layout === 'single-icon' && renderSingleIcon()}
                {currentProduct.layout === 'text-only' && renderTextOnly()}
              </Group>
            </Layer>
          </Stage>
          </div>
        </div>
      </div>
    )
  }
)

TagPreview.displayName = 'TagPreview'

