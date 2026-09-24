import './CareLabel.css'

interface CareLabelProps {
  lines: readonly string[]
}

export function CareLabel({ lines }: CareLabelProps) {
  return (
    <aside className="care-label" aria-label="Care label">
      <span className="care-label__brand">D. JEONG</span>
      <ul className="care-label__lines">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <span className="care-label__size">RN 0718 · FW26</span>
    </aside>
  )
}
