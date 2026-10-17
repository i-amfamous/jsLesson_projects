import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ThemeContext } from '../themeContext'
import './Header.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

const searchEntries = [
  { label: 'Home', detail: 'The TechX Market point of sale platform', to: '/' },
  { label: 'About TechX', detail: 'Our story, values and team', to: '/about' },
  { label: 'Why choose TechX', detail: 'Business management, reporting and security', to: '/why' },
  { label: 'Features', detail: 'Checkout, inventory, reports, offline mode and loyalty', to: '/features' },
  { label: 'How it works', detail: 'Get started and start selling', to: '/how-it-works' },
  { label: 'Benefits', detail: 'What you get with TechX POS', to: '/benefits' },
  { label: 'Customer reviews', detail: 'Stories from business owners', to: '/reviews' },
  { label: 'Pricing', detail: 'Starter, Growth and Enterprise plans', to: '/pricing' },
  { label: 'FAQ', detail: 'Answers about setup, devices and support', to: '/faq' },
  { label: 'Contact', detail: 'Talk to our team or request a demo', to: '/contact' },
  { label: 'Our values', detail: 'The principles behind every release', to: '/about#values' },
  { label: 'Ordering', detail: 'QR code ordering for your customers', to: '/about#ordering' },
  { label: 'Checkout', detail: 'Fast, reliable counter sales', to: '/about#checkout' },
  { label: 'Our journey', detail: 'How TechX grew from one counter', to: '/about#journey' },
  { label: 'Meet the team', detail: 'The people behind TechX Market', to: '/about#team' },
]

const SearchBox = ({ onNavigate, className = '' }) => {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const results = normalizedQuery
    ? searchEntries.filter(({ label, detail }) =>
        `${label} ${detail}`.toLocaleLowerCase().includes(normalizedQuery),
      ).slice(0, 5)
    : []

  return (
    <div className={`siteSearchWrap ${className}`}>
      <svg className="siteSearchIcon" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="8.8" cy="8.8" r="5.6" />
        <path d="m13 13 4 4" />
      </svg>
      <input
        type="search"
        className="siteSearch"
        placeholder="Search"
        aria-label="Search TechX Market"
        aria-expanded={Boolean(normalizedQuery)}
        aria-controls="site-search-results"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setQuery('')
          if (event.key === 'Enter' && results[0]) {
            window.location.href = results[0].to
            onNavigate?.()
          }
        }}
      />
      {normalizedQuery && (
        <div className="siteSearchResults" id="site-search-results" role="listbox" aria-label="Search results">
          {results.length ? results.map(({ label, detail, to }) => (
            <Link
              className="siteSearchResult"
              key={label}
              to={to}
              role="option"
              aria-selected="false"
              onClick={() => {
                setQuery('')
                onNavigate?.()
              }}
            >
              <span className="siteSearchResultLabel">{label}</span>
              <span className="siteSearchResultDetail">{detail}</span>
            </Link>
          )) : <p className="siteSearchEmpty">No matching pages or sections.</p>}
        </div>
      )}
    </div>
  )
}

const ThemeToggle = ({ className = '' }) => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('ThemeToggle must be used within a ThemeProvider')
  const { theme, setTheme } = context
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className={`themeToggle ${className}`}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {theme === 'dark' ? (
          <circle cx="12" cy="12" r="4" />
        ) : (
          <path d="M20.2 15.4A8.4 8.4 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
        )}
        {theme === 'dark' && (
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        )}
      </svg>
    </button>
  )
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="siteHeader">
      <nav className="siteNav" aria-label="Main">
        <Link to="/" className="siteBrand" onClick={close}>
          <span className="siteBrandMark" aria-hidden="true">T</span>
          <span>TechX<span className="siteBrandSecond">Market</span></span>
        </Link>

        <SearchBox />
        <ThemeToggle />

        <ul className="siteNavList">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="siteNavLink">{label}</Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="siteNavCta">Book a demo <span aria-hidden="true">↗</span></Link>

        <button
          type="button"
          className="siteToggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`siteToggleIcon${open ? ' isOpen' : ''}`} aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div className="siteMenu" id="site-menu">
          <ul className="siteMenuList">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="siteMenuLink" onClick={close}>{label}</Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="siteMenuCta" onClick={close}>Book a demo <span aria-hidden="true">↗</span></Link>
          <ThemeToggle className="themeToggleMobile" />
          <SearchBox className="siteSearchMobile" onNavigate={close} />
        </div>
      )}
    </header>
  )
}

export default Header
