'use client'

import { useEffect } from 'react'

declare global {
interface Window {
  gtag: (command: string, targetId: string, config?: any) => void
}
}

export function Analytics() {
useEffect(() => {
  // Google Analytics 4
  const script1 = document.createElement('script')
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
  script1.async = true
  document.head.appendChild(script1)

  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `
  document.head.appendChild(script2)

  return () => {
    document.head.removeChild(script1)
    document.head.removeChild(script2)
  }
}, [])

return null
}
