'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('/loader.svg', { as: 'image' })
  return null
}
