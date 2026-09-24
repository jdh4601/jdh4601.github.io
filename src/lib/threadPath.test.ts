import { describe, expect, it } from 'vitest'

import { buildThreadPath } from './threadPath'

describe('buildThreadPath', () => {
  it('returns an empty path for fewer than two points', () => {
    expect(buildThreadPath([{ x: 0, y: 0 }])).toBe('')
  })

  it('joins points with vertical-tangent cubic curves', () => {
    const path = buildThreadPath([
      { x: 10, y: 0 },
      { x: 90, y: 100 },
    ])
    expect(path).toBe('M 10 0 C 10 50, 90 50, 90 100')
  })

  it('emits one curve per segment', () => {
    const path = buildThreadPath([
      { x: 0, y: 0 },
      { x: 0, y: 10 },
      { x: 0, y: 20 },
    ])
    expect(path.match(/C/g)).toHaveLength(2)
  })
})
