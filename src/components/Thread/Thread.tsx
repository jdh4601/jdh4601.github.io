import { useThreadGeometry } from './useThreadGeometry'

import './Thread.css'

const SECTION_IDS = ['about', 'collections', 'archive', 'contact'] as const

/** A static running stitch spanning the page. */
export function Thread() {
  const { d, width, height } = useThreadGeometry(SECTION_IDS)

  if (!d) return null

  return (
    <svg className="thread" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={d} className="thread__stitch" />
    </svg>
  )
}
