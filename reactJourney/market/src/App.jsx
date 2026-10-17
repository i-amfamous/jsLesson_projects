import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Index from './Components/Index'
import AboutPage from './Components/AboutPage'
import LegalPage from './Components/LegalPage'
import InfoPage from './Components/InfoPage'
import {legalContent} from './Components/legalContent'
import ThemeProvider from './ThemeProvider'

const ScrollToHash = () => {
  const { hash, pathname, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname, key])

  return null
}

export const App = () => {
  return (
    <ThemeProvider>
      <ScrollToHash />
      <Routes>
        <Route index element={<Index />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='why' element={<InfoPage pageKey='why' />} />
        <Route path='features' element={<InfoPage pageKey='features' />} />
        <Route path='how-it-works' element={<InfoPage pageKey='how-it-works' />} />
        <Route path='benefits' element={<InfoPage pageKey='benefits' />} />
        <Route path='reviews' element={<InfoPage pageKey='reviews' />} />
        <Route path='pricing' element={<InfoPage pageKey='pricing' />} />
        <Route path='faq' element={<InfoPage pageKey='faq' />} />
        <Route path='contact' element={<InfoPage pageKey='contact' />} />
        <Route path='privacy' element={<LegalPage {...legalContent.privacy} />} />
        <Route path='terms' element={<LegalPage {...legalContent.terms} />} />
      </Routes>
    </ThemeProvider>
  )
}
