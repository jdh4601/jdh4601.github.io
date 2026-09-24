import { useEffect, useState } from 'react'

import { buildThreadPath } from '../../lib/threadPath'
import type { Point } from '../../lib/threadPath'

interface ThreadGeometry {
  d: string
  width: number
  height: number
}

const EMPTY: ThreadGeometry = { d: '', width: 0, height: 0 }

function measure(sectionIds: readonly string[]): ThreadGeometry {
  const width = document.documentElement.clientWidth
  // Measure the content, not the document: the SVG itself would otherwise keep the page tall.
  const main = document.querySelector('main')
  const height = main ? main.offsetTop + main.offsetHeight : 0
  const gutter = Math.max(8, Math.min(width * 0.025, 36))
  const sides = [gutter, width - gutter]

  const landing = document.getElementById('top')
  const start: Point = { x: width / 2, y: (landing?.offsetHeight ?? 600) - 90 }

  const crossings = sectionIds.flatMap((id, index): Point[] => {
    const section = document.getElementById(id)
    if (!section) return []
    const top = section.offsetTop
    // Cross over inside the section's top padding so the thread never runs through a title.
    const padding = parseFloat(getComputedStyle(section).paddingTop) || 160
    const [from, to] = index % 2 === 0 ? sides : [...sides].reverse()
    return [
      { x: from, y: top + padding * 0.1 },
      { x: to, y: top + padding * 0.85 },
    ]
  })

  const lastSide = crossings.at(-1)?.x ?? sides[0]
  const points = [start, ...crossings, { x: lastSide, y: height - 40 }]
  return { d: buildThreadPath(points), width, height }
}

/** Re-measures the document whenever its size changes. */
export function useThreadGeometry(sectionIds: readonly string[]): ThreadGeometry {
  const [geometry, setGeometry] = useState<ThreadGeometry>(EMPTY)

  useEffect(() => {
    const update = () => setGeometry(measure(sectionIds))
    const observer = new ResizeObserver(update)
    const main = document.querySelector('main')
    if (main) observer.observe(main)
    update()
    return () => observer.disconnect()
  }, [sectionIds])

  return geometry
}
