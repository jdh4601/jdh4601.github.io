import { describe, expect, it } from 'vitest'

import { buildMailto } from './mailto'

describe('buildMailto', () => {
  it('encodes subject and body so spaces and line breaks survive', () => {
    expect(buildMailto('a@b.com', 'Co-founding', 'Hi,\nLet us talk')).toBe(
      'mailto:a@b.com?subject=Co-founding&body=Hi%2C%0ALet%20us%20talk',
    )
  })

  it('omits empty fields', () => {
    expect(buildMailto('a@b.com', '', '')).toBe('mailto:a@b.com')
  })
})
