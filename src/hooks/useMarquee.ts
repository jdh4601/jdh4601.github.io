import { useCallback, useRef, useState } from 'react'
import type { PointerEvent } from 'react'

export interface MarqueeRect {
  left: number
  top: number
  width: number
  height: number
}

/** Finder-style rubber-band selection box, drawn only on empty board space. */
export function useMarquee() {
  const [rect, setRect] = useState<MarqueeRect | null>(null)
  const start = useRef<{ x: number; y: number } | null>(null)

  const onPointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    start.current = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (!start.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    setRect({
      left: Math.min(x, start.current.x),
      top: Math.min(y, start.current.y),
      width: Math.abs(x - start.current.x),
      height: Math.abs(y - start.current.y),
    })
  }, [])

  const onPointerUp = useCallback(() => {
    start.current = null
    setRect(null)
  }, [])

  return { rect, handlers: { onPointerDown, onPointerMove, onPointerUp } }
}
