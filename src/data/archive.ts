export const ARCHIVE_TAGS = {
  intelligence: { label: 'intelligence', color: 'var(--tag-blue)' },
  startup: { label: 'startup', color: 'var(--tag-red)' },
  fashion: { label: 'fashion', color: 'var(--tag-green)' },
  etc: { label: 'etc', color: 'var(--tag-yellow)' },
} as const

export type ArchiveTag = keyof typeof ARCHIVE_TAGS
export type TagFilter = ArchiveTag | 'all'

export type Ratio = '4/5' | '1/1' | '3/4' | '3/2' | '16/9'

export interface ArchiveItem {
  id: string
  tag: ArchiveTag
  caption: string
  date: string
  ratio: Ratio
  src?: string
  width?: number
  height?: number
}

// Newest first. Items without `src` render as placeholders until the photo arrives.
export const ARCHIVE_ITEMS: readonly ArchiveItem[] = [
  { id: 'zara-cover', tag: 'fashion', caption: 'ZARA research project, fashion communication.', date: '2026-09', ratio: '4/5', src: '/archive/zara-cover.webp', width: 720, height: 406 },
  { id: 'zara-poster', tag: 'fashion', caption: 'ZARA: Trends Under Observation, a campaign concept.', date: '2026-09', ratio: '4/5', src: '/archive/zara-poster.webp', width: 566, height: 851 },
  { id: 'learn-clo3d', tag: 'fashion', caption: 'Learning CLO 3D, one pattern piece at a time.', date: '2026-09', ratio: '4/5', src: '/archive/learn-clo3d.webp', width: 720, height: 433 },
  { id: 'icml-2026', tag: 'intelligence', caption: "ICML 2026 in Seoul.", date: '2026-07', ratio: '4/5', src: '/archive/icml-2026.webp', width: 720, height: 960 },
  { id: 'openai-build-week', tag: 'intelligence', caption: "Staff at OpenAI Build Week.", date: '2026-07', ratio: '4/5', src: '/archive/openai-build-week.webp', width: 720, height: 540 },
  { id: 'project-1', tag: 'fashion', caption: "Project 01, back view.", date: '2026-04', ratio: '4/5', src: '/archive/project-1.webp', width: 720, height: 1080 },
  { id: 'project-2', tag: 'fashion', caption: "Project 02, back view.", date: '2026-04', ratio: '4/5', src: '/archive/project-2.webp', width: 720, height: 1080 },
  { id: 'drawing', tag: 'fashion', caption: "Front and back, sketched first.", date: '2026-04', ratio: '4/5', src: '/archive/drawing.webp', width: 720, height: 932 },
  { id: 'lab-1', tag: 'intelligence', caption: "Agents on one screen, code on the other.", date: '2026-03', ratio: '4/5', src: '/archive/lab-1.webp', width: 720, height: 960 },
  { id: 'runway-2', tag: 'fashion', caption: "Visiting IGNITION, a graduation fashion show.", date: '2026-03', ratio: '4/5', src: '/archive/runway-2.webp', width: 720, height: 960 },
  { id: 'venn', tag: 'startup', caption: "Fun, market need, profit. Look for the overlap.", date: '2026-02', ratio: '4/5', src: '/archive/venn.webp', width: 520, height: 406 },
  { id: 'claude-stickers', tag: 'intelligence', caption: "Clauding\u2026", date: '2026-02', ratio: '4/5', src: '/archive/claude-stickers.webp', width: 720, height: 845 },
  { id: 'google-stickers', tag: 'intelligence', caption: "GDGoC hackathon, Team 11.", date: '2026-02', ratio: '4/5', src: '/archive/google-stickers.webp', width: 720, height: 960 },
  { id: 'hackathon-win', tag: 'etc', caption: "Team 11, excellence award.", date: '2026-02', ratio: '4/5', src: '/archive/hackathon-win.webp', width: 720, height: 540 },
  { id: 'seminar-poster', tag: 'etc', caption: "Designing the MEET ONE seminar posters.", date: '2026-02', ratio: '4/5', src: '/archive/seminar-poster.webp', width: 720, height: 960 },
  { id: 'done-office-2', tag: 'etc', caption: "D.one office, Songdo view.", date: '2026-01', ratio: '4/5', src: '/archive/done-office-2.webp', width: 720, height: 960 },
  { id: 'art-gallery', tag: 'fashion', caption: "An afternoon at the gallery.", date: '2025-12', ratio: '4/5', src: '/archive/art-gallery.webp', width: 720, height: 960 },
  { id: 'musinsa', tag: 'fashion', caption: "Fitting room at Musinsa Standard.", date: '2025-12', ratio: '4/5', src: '/archive/musinsa.webp', width: 720, height: 960 },
  { id: 'reading', tag: 'etc', caption: "The current reading stack.", date: '2025-12', ratio: '4/5', src: '/archive/reading.webp', width: 720, height: 960 },
  { id: 'seminar-slides', tag: 'etc', caption: "Slides for a D.one talk.", date: '2025-12', ratio: '4/5', src: '/archive/seminar-slides.webp', width: 720, height: 960 },
  { id: 'crycheeseburger', tag: 'etc', caption: "CryCheeseBurger, our seminar sponsor.", date: '2025-12', ratio: '4/5', src: '/archive/crycheeseburger.webp', width: 720, height: 1080 },
  { id: 'done-seminar-host', tag: 'startup', caption: "Hosting a D.one founder seminar.", date: '2025-11', ratio: '4/5', src: '/archive/done-seminar-host.webp', width: 720, height: 480 },
  { id: 'done-office-3', tag: 'etc', caption: "D.one office, still working.", date: '2025-11', ratio: '4/5', src: '/archive/done-office-3.webp', width: 720, height: 960 },
  { id: 'post-it', tag: 'startup', caption: "October goals for D.one, one post-it at a time.", date: '2025-10', ratio: '4/5', src: '/archive/post-it.webp', width: 720, height: 1020 },
  { id: 'done-office-1', tag: 'etc', caption: "D.one office, after hours.", date: '2025-10', ratio: '4/5', src: '/archive/done-office-1.webp', width: 720, height: 960 },
  { id: 'tonywack', tag: 'fashion', caption: "Tonywack, Seoul.", date: '2025-09', ratio: '4/5', src: '/archive/tonywack.webp', width: 720, height: 960 },
  { id: 'ir-pitch', tag: 'startup', caption: "Pitching the AI hearing aid.", date: '2025-08', ratio: '4/5', src: '/archive/ir-pitch.webp', width: 720, height: 447 },
  { id: 'public-data-award', tag: 'startup', caption: "Grand prize, Incheon public data contest.", date: '2025-07', ratio: '4/5', src: '/archive/public-data-award.webp', width: 720, height: 960 },
  { id: 'lab-2', tag: 'intelligence', caption: "GM-DETR on the monitor, notes on the laptop.", date: '2025-07', ratio: '4/5', src: '/archive/lab-2.webp', width: 720, height: 960 },
  { id: 'kcc-2025', tag: 'intelligence', caption: "KCC 2025, poster session.", date: '2025-07', ratio: '4/5', src: '/archive/kcc-2025.webp', width: 720, height: 960 },
  { id: 'build-night', tag: 'startup', caption: "Late-night build session with the team.", date: '2025-06', ratio: '4/5', src: '/archive/build-night.webp', width: 720, height: 960 },
  { id: 'unithon-booth', tag: 'startup', caption: "Our virtual fitting booth at UNITHON.", date: '2025-06', ratio: '4/5', src: '/archive/unithon-booth.webp', width: 720, height: 960 },
  { id: 'pcb', tag: 'startup', caption: "The first Sound Bartender board.", date: '2025-06', ratio: '4/5', src: '/archive/pcb.webp', width: 720, height: 540 },
  { id: 'unithon-demo', tag: 'startup', caption: "Presenting on UNITHON demo day.", date: '2025-06', ratio: '4/5', src: '/archive/unithon-demo.webp', width: 720, height: 438 },
  { id: 'schematic', tag: 'startup', caption: "Schematic and PCB layout for the hearing aid.", date: '2025-05', ratio: '4/5', src: '/archive/schematic.webp', width: 720, height: 713 },
  { id: 'desk-setup', tag: 'etc', caption: "Floating point notes and a quiet desk.", date: '2025-04', ratio: '4/5', src: '/archive/desk-setup.webp', width: 720, height: 960 },
]
