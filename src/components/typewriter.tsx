'use client'

import Typewriter from 'typewriter-effect'

import { TYPED_STRINGS } from '@/lib/constants'

export function Typing() {
  return (
    <div className="min-h-6 text-gray-200 md:text-lg italic font-medium ">
      <Typewriter
        options={{
          strings: TYPED_STRINGS,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50
        }}
      />
    </div>
  )
}
