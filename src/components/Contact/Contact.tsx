import { PROFILE } from '../../data/profile'
import { MailComposer } from './MailComposer'

import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <h2 className="section-title">Contact</h2>
        <span className="eyebrow">By letter</span>
      </div>

      <div className="contact__grid">
        <div>
          <p className="contact__lede">
            Write to me. Co&#8209;founders, designers, and anyone building for small labels
            are welcome.
          </p>
          <p className="contact__note">Pick a subject, add a line, and hit Send. I read everything.</p>
        </div>
        <MailComposer email={PROFILE.email} />
      </div>
    </section>
  )
}
