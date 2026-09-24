import { describe, expect, it } from 'vitest'

import { toSeason } from './season'

describe('toSeason', () => {
  it.each([
    ['2025-01', 'SS25'],
    ['2025-06', 'SS25'],
    ['2025-07', 'FW25'],
    ['2025-10', 'FW25'],
    ['2026-12', 'FW26'],
  ])('maps %s to %s', (yearMonth, expected) => {
    expect(toSeason(yearMonth)).toBe(expected)
  })

  it('throws on malformed input', () => {
    expect(() => toSeason('2025/13')).toThrow()
  })
})
