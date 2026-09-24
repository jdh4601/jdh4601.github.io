import { PROFILE } from '../../data/profile'
import type { BioPart } from '../../data/profile'
import { MacWindow } from '../MacWindow/MacWindow'
import { SocialLinks } from './SocialLinks'

import './About.css'

function renderPart(part: BioPart, index: number) {
  if (typeof part === 'string') return part
  return (
    <a key={index} className="about__link" href={part.href} target="_blank" rel="noreferrer">
      {part.text}
    </a>
  )
}

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-head">
        <h2 className="section-title">About me</h2>
        <span className="eyebrow">Fig. 01 / The maker</span>
      </div>

      <div className="about__grid">
        <MacWindow title="donghyun.jpg" className="about__photo">
          <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} loading="lazy" />
        </MacWindow>

        <div className="about__copy">
          <p className="about__lede">{PROFILE.lede}</p>
          {PROFILE.bio.map((paragraph, index) => (
            <p key={index} className="about__body">
              {paragraph.map(renderPart)}
            </p>
          ))}
          <SocialLinks links={PROFILE.links} />
        </div>
      </div>
    </section>
  )
}
