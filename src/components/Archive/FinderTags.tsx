import { ARCHIVE_TAGS } from '../../data/archive'
import type { TagFilter } from '../../data/archive'

import './FinderTags.css'

interface FinderTagsProps {
  active: TagFilter
  onChange: (tag: TagFilter) => void
}

const OPTIONS: { value: TagFilter; label: string; color: string }[] = [
  { value: 'all', label: 'all', color: 'var(--tag-gray)' },
  ...Object.entries(ARCHIVE_TAGS).map(([value, tag]) => ({
    value: value as TagFilter,
    label: tag.label,
    color: tag.color,
  })),
]

/** Tag filter styled after the Finder sidebar's "Tags" list. */
export function FinderTags({ active, onChange }: FinderTagsProps) {
  return (
    <div className="finder-tags" role="radiogroup" aria-label="Filter archive by tag">
      <span className="finder-tags__heading">Tags</span>
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={active === option.value}
          className="finder-tags__item"
          onClick={() => onChange(option.value)}
        >
          <i style={{ background: option.color }} aria-hidden="true" />
          {option.label}
        </button>
      ))}
    </div>
  )
}
