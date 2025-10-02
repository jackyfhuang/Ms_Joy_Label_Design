import { forwardRef } from 'react'
import { Stage, Layer, Rect, Text, Group, Circle } from 'react-konva'
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
        
        <div className="flex justify-center items-center min-h-[250px] bg-gray-50 rounded-lg border border-gray-200">
          <Stage
            width={dynamicTagWidth + 100}
            height={design.tagHeight + 40}
            ref={ref || stageRef}
          >
            <Layer>
              <Group x={50} y={20}>
                {/* Metal Ring - Behind the tag */}
                <Group x={-15} y={design.tagHeight / 2}>
                  <Circle
                    radius={30}
                    fill={design.metalRingColor}
                    stroke="#333"
                    strokeWidth={1}
                    shadowColor="black"
                    shadowBlur={3}
                    shadowOffset={{ x: 1, y: 1 }}
                    shadowOpacity={0.3}
                  />
                  <Circle
                    radius={20}
                    fill={design.backgroundColor}
                    stroke="none"
                  />
                </Group>
                
                {/* Tag Background */}
                <Rect
                  width={dynamicTagWidth}
                  height={design.tagHeight}
                  fill={design.backgroundColor}
                  stroke="#ddd"
                  strokeWidth={2}
                  cornerRadius={10}
                  shadowColor="black"
                  shadowBlur={10}
                  shadowOffset={{ x: 5, y: 5 }}
                  shadowOpacity={0.2}
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
