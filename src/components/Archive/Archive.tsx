import { useState } from 'react'

import { ARCHIVE_ITEMS, ARCHIVE_TAGS } from '../../data/archive'
import type { TagFilter } from '../../data/archive'
import { filterArchive } from '../../lib/filterArchive'
import { toSeason } from '../../lib/season'
import { Placeholder } from '../Placeholder/Placeholder'
import { FinderTags } from './FinderTags'

import './Archive.css'

export function Archive() {
  const [filter, setFilter] = useState<TagFilter>('all')
  const items = filterArchive(ARCHIVE_ITEMS, filter)

  return (
    <section className="section archive" id="archive">
      <div className="section-head">
        <h2 className="section-title">Archive</h2>
        <span className="eyebrow">{items.length} items</span>
      </div>

      <div className="archive__toolbar">
        <FinderTags active={filter} onChange={setFilter} />
      </div>

      <ul className="archive__grid" key={filter}>
        {items.map((item, index) => (
          <li key={item.id} className="archive__item" style={{ animationDelay: `${index * 40}ms` }}>
            {item.src ? (
              <img
                className="archive__photo"
                src={item.src}
                alt={item.caption}
                width={item.width}
                height={item.height}
                loading="lazy"
              />
            ) : (
              <Placeholder ratio={item.ratio} label={item.id} />
            )}
            <p className="archive__caption">
              <i style={{ background: ARCHIVE_TAGS[item.tag].color }} aria-hidden="true" />
              <span>{item.caption}</span>
              <span className="archive__date">{toSeason(item.date)}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
