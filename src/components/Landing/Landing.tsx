import { BOARD_ITEMS } from '../../data/board'
import { PROFILE } from '../../data/profile'
import { useMarquee } from '../../hooks/useMarquee'
import { BoardObject } from './BoardObject'

import './Landing.css'

const mobileIds = BOARD_ITEMS.filter((item) => !item.hideOnMobile).map((item) => item.id)

for (let index = mobileIds.length - 1; index > 0; index -= 1) {
  const randomIndex = Math.floor(Math.random() * (index + 1))
  const currentId = mobileIds[index]
  mobileIds[index] = mobileIds[randomIndex]
  mobileIds[randomIndex] = currentId
}

const MOBILE_ORDER = new Map(mobileIds.map((id, index) => [id, index]))

export function Landing() {
  const { rect, handlers } = useMarquee()

  return (
    <header className="landing" id="top">
      <div className="landing__board" {...handlers}>
        {BOARD_ITEMS.map((item, index) => (
          <BoardObject
            key={item.id}
            item={item}
            index={index}
            mobileIndex={MOBILE_ORDER.get(item.id) ?? 0}
          />
        ))}
        {rect && <div className="landing__marquee" style={rect} />}
      </div>

      <div className="landing__title">
        <h1 className="landing__name">{PROFILE.name}</h1>
        <p className="landing__tagline">{PROFILE.tagline}</p>
        <p className="landing__descriptor">{PROFILE.descriptor}</p>
      </div>

      <span className="landing__season eyebrow">Collection FW26</span>
      <span className="landing__hint eyebrow">drag anything</span>
    </header>
  )
}
