'use client'

import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

import { TYPED_STRINGS } from '@/lib/constants'

export function Typing() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null // return this null to avoid hydration errors
  }
  return (
    <p className="text-gray-200 md:text-lg italic font-medium ">
      <Typewriter
        options={{
          strings: TYPED_STRINGS,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50
        }}
      />
    </p>
  )
}
