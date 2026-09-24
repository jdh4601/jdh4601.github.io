import { LOOKS } from '../../data/collections'
import { LookCard } from './LookCard'

import './Collections.css'

export function Collections() {
  return (
    <section className="section collections" id="collections">
      <div className="section-head">
        <h2 className="section-title">Collections</h2>
        <span className="eyebrow">{LOOKS.length} looks</span>
      </div>

      <ol className="collections__list">
        {LOOKS.map((look) => (
          <LookCard key={look.number} look={look} />
        ))}
      </ol>
    </section>
  )
}
