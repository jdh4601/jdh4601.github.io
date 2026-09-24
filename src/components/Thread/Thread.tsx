import { useEffect, useRef } from 'react'

import { useThreadGeometry } from './useThreadGeometry'

import './Thread.css'

const SECTION_IDS = ['about', 'collections', 'archive', 'contact'] as const
const VIEWPORT_ANCHOR = 0.72
const SEARCH_STEPS = 18

/** Finds how much of the path has to be drawn for its tip to reach `targetY`. */
function lengthAtY(path: SVGPathElement, total: number, targetY: number): number {
  let low = 0
  let high = total
  for (let step = 0; step < SEARCH_STEPS; step += 1) {
    const mid = (low + high) / 2
    if (path.getPointAtLength(mid).y < targetY) low = mid
    else high = mid
  }
  return low
}

/** A single running stitch that is sewn down the page as you scroll. */
export function Thread() {
  const { d, width, height } = useThreadGeometry(SECTION_IDS)
  const revealRef = useRef<SVGPathElement>(null)
  const tipRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const reveal = revealRef.current
    const tip = tipRef.current
    if (!d || !reveal || !tip) return

    const total = reveal.getTotalLength()
    reveal.style.strokeDasharray = `${total}`
    let frame = 0

    const draw = () => {
      const target = window.scrollY + window.innerHeight * VIEWPORT_ANCHOR
      const isAtBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      const length = isAtBottom ? total : lengthAtY(reveal, total, target)
      reveal.style.strokeDashoffset = `${total - length}`
      const point = reveal.getPointAtLength(length)
      tip.setAttribute('cx', `${point.x}`)
      tip.setAttribute('cy', `${point.y}`)
      tip.style.opacity = length > 0 && length < total ? '1' : '0'
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [d])

  if (!d) return null

  return (
    <svg className="thread" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <defs>
        <mask id="thread-reveal" maskUnits="userSpaceOnUse">
          <path ref={revealRef} d={d} className="thread__reveal" />
        </mask>
      </defs>
      <path d={d} className="thread__stitch" mask="url(#thread-reveal)" />
      <circle ref={tipRef} r="3.5" className="thread__tip" />
    </svg>
  )
}
