export type BioPart = string | { text: string; href: string }

export const PROFILE = {
  name: 'Donghyun Jeong',
  tagline: 'Some of my work is cut from fabric, some is trained from data.',
  descriptor: 'Fashion x AI / based in Seoul',
  email: 'donghyun.jeong.main@gmail.com',
  photo: '/img/profile.webp',
  lede: 'Two kinds of patterns.',
  bio: [
    [
      'I grew up loving clothes and learned fashion on the shop floor. At eighteen, I started working the floors at ',
      { text: 'Nike', href: 'https://www.nike.com' },
      ', ',
      { text: 'Zara', href: 'https://www.zara.com' },
      ' and ',
      { text: 'Decathlon', href: 'https://www.decathlon.com' },
      ', folding the same shirts every night and watching which ones people actually took home. I went on to study computer science at ',
      { text: 'Incheon National University', href: 'https://www.inu.ac.kr' },
      ', and at twenty-two I joined a computer vision lab. For a while, I thought a PhD in computer vision was my future. Reading papers and training models, I learned to think in data.',
    ],
    [
      'Then I realised I cared more about real people than benchmarks, so I left to build an AI hearing aid. A hearing aid, it turns out, is fitted like a garment. Designing a wearable device and building ',
      { text: 'D.one', href: 'https://www.instagram.com/wearedone.kr/' },
      ', a community for founders, I learned how slowly trust is earned.',
    ],
    [
      'Now I am coming back to fashion, this time as a student of it. In a world filling up with generated images, taste is becoming the scarcest thing we have. Designers hold it. I want to build the tools for them, so talented designers and small Korean labels can grow without giving up what makes them theirs.',
    ],
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/jdh4601', icon: '/icons/github.svg' },
    { label: 'Substack', href: 'https://hynfinity.substack.com/', icon: '/icons/substack.svg' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/donghyun10/', icon: '/icons/linkedin.svg' },
    { label: 'Mail', href: 'mailto:donghyun.jeong.main@gmail.com', icon: '/icons/gmail.svg' },
  ],
  careLabel: ['100% Curiosity', 'Made in Seoul', 'Train at 80°C', 'Do not tumble dry the ideas'],
} as const
