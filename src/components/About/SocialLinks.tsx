import './SocialLinks.css'

interface SocialLink {
  label: string
  href: string
  icon: string
}

interface SocialLinksProps {
  links: readonly SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <img src={link.icon} alt="" width="18" height="18" />
          </a>
        </li>
      ))}
    </ul>
  )
}
