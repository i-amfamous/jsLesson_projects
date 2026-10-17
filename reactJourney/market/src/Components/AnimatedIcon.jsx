import './AnimatedIcon.css'

const iconArtwork = {
  business: <><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 7V5h6v2M4 12h16M10 12v2h4v-2" /></>,
  insights: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /><path d="M16 6h4v4" /></>,
  secure: <><path d="M12 3 19 6v5c0 4.4-2.8 7.8-7 10-4.2-2.2-7-5.6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  growth: <><path d="M4 18h16M6 15l4-4 3 2 6-7" /><path d="M15 6h4v4" /></>,
  checkout: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4M16 14v3" /></>,
  inventory: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5M12 13v8" /></>,
  reports: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 16v-3M12 16V8M16 16v-5M8 7h2" /></>,
  offline: <><path d="M5 9a11 11 0 0 1 14 0M8 12a6.5 6.5 0 0 1 8 0M11 15a2 2 0 0 1 2 0M3 3l18 18" /></>,
  team: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 5v1" /></>,
  loyalty: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></>,
  clarity: <><circle cx="12" cy="12" r="8.5" /><path d="M12 8v4l3 2" /></>,
  speed: <><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 12 4-4M6 18h12" /></>,
  trust: <><path d="M12 3 19 6v5c0 4.4-2.8 7.8-7 10-4.2-2.2-7-5.6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
}

const AnimatedIcon = ({ name, className = '' }) => (
  <span className={`animatedIcon ${className}`} aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">{iconArtwork[name]}</svg>
  </span>
)

export default AnimatedIcon
