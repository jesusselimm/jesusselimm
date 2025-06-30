"use client"

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Sayfa yüklendiğinde tema durumunu kontrol et
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    let shouldBeDark = false
    
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark'
    } else {
      shouldBeDark = systemPrefersDark
    }
    
    setIsDark(shouldBeDark)
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light')
    
    console.log('Theme initialized:', shouldBeDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    console.log('Switching to theme:', newTheme)
    
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Hydration problemini önlemek için
  if (!mounted) {
    return (
      <button className="theme-toggle" disabled>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
        </svg>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Temayı değiştir"
      title={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
    >
      {isDark ? (
        // Güneş ikonu (light moda geçiş için)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ) : (
        // Ay ikonu (dark moda geçiş için)
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}