import { describe, expect, it } from 'vitest'

import { filterArchive } from './filterArchive'

const items = [
  { id: 'a', tag: 'intelligence' },
  { id: 'b', tag: 'startup' },
  { id: 'c', tag: 'intelligence' },
] as const

describe('filterArchive', () => {
  it('returns every item for "all"', () => {
    expect(filterArchive(items, 'all')).toHaveLength(3)
  })

  it('returns only items with the selected tag', () => {
    expect(filterArchive(items, 'intelligence').map((item) => item.id)).toEqual(['a', 'c'])
  })

  it('returns an empty list when nothing matches', () => {
    expect(filterArchive(items, 'fashion')).toEqual([])
  })
})
