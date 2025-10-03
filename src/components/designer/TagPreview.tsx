import { forwardRef } from 'react'
import { Stage, Layer, Rect, Text, Group, Circle, Line } from 'react-konva'
import Konva from 'konva'
import { TagDesign } from '@/types/designer'
import { ICONS } from '@/data/icons'

interface TagPreviewProps {
  design: TagDesign
  currentProduct: any
  dynamicTagWidth: number
  stageRef: React.RefObject<Konva.Stage>
}

export const TagPreview = forwardRef<Konva.Stage, TagPreviewProps>(
  ({ design, currentProduct, dynamicTagWidth, stageRef }, ref) => {
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
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
          <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {currentProduct.name}
          </div>
        </div>
        
        <div className="flex justify-center items-center min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-inner">
          <Stage
            width={dynamicTagWidth + 120}
            height={design.tagHeight + 80}
            ref={ref || stageRef}
          >
            <Layer>
              <Group x={60} y={40}>
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
                
                {/* Tag Background with realistic shadow and depth */}
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
                
                {/* Inner tag highlight for depth */}
                <Rect
                  width={dynamicTagWidth - 4}
                  height={design.tagHeight - 4}
                  x={2}
                  y={2}
                  fill="transparent"
                  stroke="#ffffff"
                  strokeWidth={1}
                  cornerRadius={10}
                  opacity={0.3}
                />
                
                {/* Icons and Text Layout */}
                {currentProduct.layout === 'dual-icons' && renderDualIcons()}
                {currentProduct.layout === 'single-icon' && renderSingleIcon()}
                {currentProduct.layout === 'text-only' && renderTextOnly()}
              </Group>
            </Layer>
          </Stage>
        </div>
        
        {/* Design Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Design Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium">{currentProduct.name} - ${currentProduct.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">{design.text}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Font:</span>
              <span className="font-medium">{design.fontFamily}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Icons:</span>
              <span className="font-medium">
                {currentProduct.layout === 'dual-icons' 
                  ? `${selectedIcon ? selectedIcon.name : 'None'} + ${selectedIcon2 ? selectedIcon2.name : 'None'}`
                  : selectedIcon ? selectedIcon.name : 'None'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

TagPreview.displayName = 'TagPreview'
