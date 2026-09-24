import type { CSSProperties } from 'react'

import type { BoardItem } from '../../data/board'
import { useDraggable } from '../../hooks/useDraggable'

interface BoardObjectProps {
  item: BoardItem
  index: number
}

function BoardObjectContent({ item }: { item: BoardItem }) {
  switch (item.kind) {
    case 'polaroid':
      return (
        <figure className="board-polaroid">
          <img src={item.src} alt="" draggable={false} />
          <figcaption>{item.label}</figcaption>
        </figure>
      )
    case 'hangtag':
      return <div className="board-hangtag">{item.text}</div>
    case 'note':
      return <p className="board-note">{item.text}</p>
    default:
      return (
        <img
          className="board-object__img"
          src={item.src}
          alt=""
          draggable={false}
          style={item.tint ? { filter: item.tint } : undefined}
        />
      )
  }
}

export function BoardObject({ item, index }: BoardObjectProps) {
  const { offset, isDragging, handlers } = useDraggable()

  const style = {
    '--x': `${item.x}%`,
    '--y': `${item.y}%`,
    '--mx': `${item.mobile?.x ?? item.x}%`,
    '--my': `${item.mobile?.y ?? item.y}%`,
    width: `${item.width}px`,
    '--rotate': `${item.rotate ?? 0}deg`,
    '--delay': `${index * 45}ms`,
    translate: `${offset.x}px ${offset.y}px`,
  } as CSSProperties

  const className = [
    'board-object',
    `board-object--${item.kind}`,
    item.hideOnMobile ? 'board-object--desktop-only' : '',
    isDragging ? 'is-dragging' : '',
  ].join(' ')

  return (
    <div className={className} style={style} {...handlers}>
      <div className="board-object__inner">
        <BoardObjectContent item={item} />
      </div>
      {item.kind !== 'note' && (
        <span className="board-object__tag" aria-hidden="true">
          {item.label}
        </span>
      )}
    </div>
  )
}
