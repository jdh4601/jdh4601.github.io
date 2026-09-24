export interface Point {
  x: number
  y: number
}

const round = (value: number): number => Math.round(value * 10) / 10

/**
 * Joins points with cubic curves whose handles are vertical, so the thread
 * always leaves and enters a point travelling downwards, like a seam.
 */
export function buildThreadPath(points: readonly Point[]): string {
  if (points.length < 2) return ''
  const [first, ...rest] = points
  const segments = rest.map((point, index) => {
    const previous = points[index]
    const midY = round((previous.y + point.y) / 2)
    return `C ${round(previous.x)} ${midY}, ${round(point.x)} ${midY}, ${round(point.x)} ${round(point.y)}`
  })
  return [`M ${round(first.x)} ${round(first.y)}`, ...segments].join(' ')
}
