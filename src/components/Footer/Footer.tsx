import { PROFILE } from '../../data/profile'
import { CareLabel } from './CareLabel'

import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <CareLabel lines={PROFILE.careLabel} />
      <p className="footer__legal eyebrow">© 2026 {PROFILE.name}</p>
    </footer>
  )
}
