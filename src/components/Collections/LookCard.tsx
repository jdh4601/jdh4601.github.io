import type { Look } from '../../data/collections'
import { toSeason } from '../../lib/season'
import { Placeholder } from '../Placeholder/Placeholder'

interface LookCardProps {
  look: Look
}

export function LookCard({ look }: LookCardProps) {
  return (
    <li className="look">
      <div className="look__photo">
        <Placeholder ratio={look.photo.ratio} label={look.photo.file} src={look.photo.src} alt={look.title} />
      </div>

      <div className="look__text">
        <div className="look__head">
          <div className="look__meta eyebrow">
            <span>Look {look.number}</span>
            <span className="look__season">{toSeason(look.startedAt)}</span>
          </div>
          <h3 className="look__title">{look.title}</h3>
          <p className="look__role">{look.role}</p>
        </div>
        <div className="look__body">
          <p className="look__line">{look.line}</p>
          <p className="look__composition">
            <span>Composition:</span> {look.composition}
          </p>
          {look.link && (
            <a className="look__link" href={look.link.href} target="_blank" rel="noreferrer">
              {look.link.label} ↗
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
