export type BoardKind = 'icon' | 'object' | 'polaroid' | 'hangtag' | 'note'

export interface BoardItem {
  id: string
  kind: BoardKind
  label: string
  /** Position as a percentage of the board, measured from the top-left. */
  x: number
  y: number
  width: number
  rotate?: number
  src?: string
  /** CSS filter that recolours the stock blue Finder folder into a tag colour. */
  tint?: string
  text?: string
  hideOnMobile?: boolean
  /** Phone/tablet (≤900px) coordinates, measured from the approved phone layout. */
  mobile?: { x: number; y: number }
}

// Keep x 22–78% / y 28–68% (desktop) and y 34–64% (mobile) empty: the title lives there.
export const BOARD_ITEMS: readonly BoardItem[] = [
  { id: 'hangtag', kind: 'hangtag', label: 'hang tag', x: 19, y: 6, width: 92, rotate: -8, text: 'SIZE M\nSEOUL', mobile: { x: 4, y: 1 } },
  { id: 'button', kind: 'object', label: 'jacket button', src: '/objects/buttons.webp', x: 47, y: 5, width: 44, mobile: { x: 44, y: 4 } },
  { id: 'terminal', kind: 'icon', label: 'Terminal', src: '/icons/terminal.webp', x: 63, y: 8, width: 60, rotate: 6, mobile: { x: 76, y: 3 } },
  { id: 'claudecode', kind: 'icon', label: 'Claude Code', src: '/icons/claudecode.svg', x: 9, y: 25, width: 54, rotate: -4, mobile: { x: 29, y: 21 } },
  { id: 'arxiv', kind: 'icon', label: 'arXiv, 2 a.m.', src: '/icons/arxiv.svg', x: 33, y: 14, width: 58, rotate: 4, hideOnMobile: true },
  { id: 'finder', kind: 'icon', label: 'Finder', src: '/icons/finder.webp', x: 91, y: 36, width: 52, hideOnMobile: true },
  { id: 'folder-blue', kind: 'icon', label: 'intelligence', src: '/icons/folder.webp', x: 6, y: 58, width: 58, rotate: -3, mobile: { x: 64, y: 19 } },
  { id: 'folder-green', kind: 'icon', label: 'fashion', src: '/icons/folder.webp', x: 84, y: 52, width: 58, tint: 'hue-rotate(-95deg) saturate(1.1) brightness(0.88)', mobile: { x: 83, y: 59 } },
  { id: 'trash', kind: 'icon', label: 'Trash (full of drafts)', src: '/icons/trash.webp', x: 14, y: 84, width: 58, mobile: { x: 3, y: 57 } },
  { id: 'jupyter', kind: 'icon', label: 'Jupyter', src: '/icons/jupyter.svg', x: 42, y: 80, width: 40, rotate: -5, hideOnMobile: true },
  { id: 'look-fw21', kind: 'polaroid', label: 'Saint Laurent FW21', src: '/objects/sl-fw21-look19.webp', x: 27, y: 71, width: 110, rotate: 5, mobile: { x: 18, y: 61 } },
  { id: 'look-ss23', kind: 'polaroid', label: 'Saint Laurent SS23', src: '/objects/sl-ss23-look31.webp', x: 60, y: 72, width: 110, rotate: -6, mobile: { x: 54, y: 62 } },
  { id: 'pytorch', kind: 'icon', label: 'PyTorch', src: '/icons/pytorch.svg', x: 49, y: 86, width: 30, mobile: { x: 87, y: 28 } },
  { id: 'ollama', kind: 'icon', label: 'Ollama', src: '/icons/ollama.svg', x: 78, y: 76, width: 34, hideOnMobile: true },
  { id: 'wandb', kind: 'icon', label: 'Weights & Biases', src: '/icons/weightsandbiases.svg', x: 88, y: 84, width: 34, rotate: 8, hideOnMobile: true },

  { id: 'note-loss', kind: 'note', label: 'note', x: 5, y: 44, width: 150, text: 'loss 0.0421 ↓', mobile: { x: 5, y: 27 } },
  { id: 'note-train', kind: 'note', label: 'note', x: 67, y: 64, width: 170, text: '$ python train.py --epochs 300', hideOnMobile: true },
  { id: 'note-cut', kind: 'note', label: 'note', x: 45, y: 92, width: 180, text: '✂ - - - cut along the line - - -', hideOnMobile: true },
]
