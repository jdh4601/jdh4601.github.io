import { useCallback, useRef, useState } from 'react'
import type { PointerEvent } from 'react'

interface Offset {
  x: number
  y: number
}

const canDrag = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

export function useDraggable() {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const origin = useRef<Offset>({ x: 0, y: 0 })

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!canDrag() || event.button !== 0) return
      event.stopPropagation()
      event.currentTarget.setPointerCapture(event.pointerId)
      origin.current = { x: event.clientX - offset.x, y: event.clientY - offset.y }
      setIsDragging(true)
    },
    [offset],
  )

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (!isDragging) return
      setOffset({ x: event.clientX - origin.current.x, y: event.clientY - origin.current.y })
    },
    [isDragging],
  )

  const onPointerUp = useCallback(() => setIsDragging(false), [])

  return {
    offset,
    isDragging,
    handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  }
}
