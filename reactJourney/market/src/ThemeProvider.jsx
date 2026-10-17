import { useLayoutEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem('techx-theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
    window.localStorage.setItem('techx-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
