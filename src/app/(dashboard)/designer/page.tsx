'use client'

import { TagDesigner } from '@/components/designer'
import { useRouter } from 'next/navigation'

export default function DesignerPage() {
  const router = useRouter()

  return <TagDesigner onBack={() => router.push('/')} />
}
