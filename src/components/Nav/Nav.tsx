import './Nav.css'

const LINKS = [
  { href: '#about', label: 'about me' },
  { href: '#collections', label: 'collections' },
  { href: '#archive', label: 'archive' },
  { href: '#contact', label: 'contact' },
] as const

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      {LINKS.map((link) => (
        <a key={link.href} href={link.href} className="nav__link">
          {link.label}
        </a>
      ))}
    </nav>
  )
}
