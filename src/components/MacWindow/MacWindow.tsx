import type { ReactNode } from 'react'

import './MacWindow.css'

interface MacWindowProps {
  title?: string
  children: ReactNode
  className?: string
}

export function MacWindow({ title, children, className = '' }: MacWindowProps) {
  return (
    <div className={`mac-window ${className}`}>
      <div className="mac-window__bar">
        <span className="mac-window__lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {title && <span className="mac-window__title">{title}</span>}
      </div>
      <div className="mac-window__body">{children}</div>
    </div>
  )
}
