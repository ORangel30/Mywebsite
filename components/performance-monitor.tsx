'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
useEffect(() => {
  // Intersection Observer for lazy loading and animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with data-fade attribute
  document.querySelectorAll('[data-fade]').forEach((el) => {
    observer.observe(el)
  })

  // Performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms')
      
      // Track Core Web Vitals
      if ('web-vital' in window) {
        // This would integrate with web-vitals library
        console.log('Core Web Vitals tracking enabled')
      }
    })
  }

  return () => {
    observer.disconnect()
  }
}, [])

return null
}
