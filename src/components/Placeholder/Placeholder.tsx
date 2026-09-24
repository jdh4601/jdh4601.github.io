import type { Ratio } from '../../data/archive'

import './Placeholder.css'

interface PlaceholderProps {
  ratio: Ratio
  label: string
  src?: string
  alt?: string
}

/** Media slot that shows seam-allowance hatching until a real file is dropped in. */
export function Placeholder({ ratio, label, src, alt = '' }: PlaceholderProps) {
  const style = { aspectRatio: ratio.replace('/', ' / ') }

  if (src) {
    return <img className="placeholder placeholder--filled" style={style} src={src} alt={alt} loading="lazy" />
  }

  return (
    <div className="placeholder" style={style} role="img" aria-label={`${label} (placeholder)`}>
      <span className="placeholder__label">{label}</span>
      <span className="placeholder__ratio">{ratio.replace('/', ':')}</span>
    </div>
  )
}
