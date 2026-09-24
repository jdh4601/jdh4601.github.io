import type { Ratio } from './archive'

export interface Look {
  number: string
  title: string
  role: string
  startedAt: string
  line: string
  composition: string
  photo: { file: string; ratio: Ratio; src?: string }
  link?: { label: string; href: string }
}

export const LOOKS: readonly Look[] = [
  {
    number: '01',
    title: 'D.one',
    role: 'Community builder',
    startedAt: '2025-10',
    line: 'An offline room for solo founders. Two locations, fifty-plus members, and a lot of late coffee in five months.',
    composition: '60% people, 25% seminars, 15% instagram reels',
    photo: { file: 'done.webp', ratio: '3/2', src: '/img/looks/done.webp' },
  },
  {
    number: '02',
    title: 'Sound Bartender',
    role: 'Product manager',
    startedAt: '2025-03',
    line: 'A hearing aid that mixes the room for you: separate the voice you care about, turn the rest down.',
    composition: '50% speech separation, 30% custom PCB, 20% stubbornness',
    photo: { file: 'sound-bartender.webp', ratio: '3/2', src: '/img/looks/sound-bartender.webp' },
  },
  {
    number: '03',
    title: 'AI Virtual Fitting',
    role: 'Frontend engineer',
    startedAt: '2025-06',
    line: 'Scan a QR, pick an avatar, try the garment on in ten seconds. Diffusion-based fitting, shipped in three days for a campus festival.',
    composition: '70% diffusion, 20% festival crowd, 10% sleepless nights',
    photo: { file: 'virtual-fitting.webp', ratio: '3/2', src: '/img/looks/virtual-fitting.webp' },
    link: {
      label: 'Presentation deck',
      href: 'https://drive.google.com/file/d/1NL2UQL1CtTqmu9Aa4tZ6k_m_L2iWd-wS/view?usp=sharing',
    },
  },
  {
    number: '04',
    title: 'Undergraduate Research',
    role: 'AI research intern',
    startedAt: '2025-03',
    line: 'Teaching a model to see the same street in colour and in heat. Cross-modal pretraining on RGB and infrared pairs.',
    composition: '70% PyTorch, 20% paper stacks, 10% sleepless nights',
    photo: { file: 'rgb-ir.webp', ratio: '3/2', src: '/img/looks/rgb-ir.webp' },
  },
]
