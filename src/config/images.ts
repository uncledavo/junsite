import { ImageResponse } from 'next/og';

export const images = {
  landing: {
    src: '/Landing_Page.webp',
    blurDataURL: 'data:image/webp;base64,...', // We'll generate this
    sizes: '100vw',
  },
  grossMargins: {
    src: '/gross_margins.webp',
    blurDataURL: 'data:image/webp;base64,...',
    sizes: '100vw',
  },
  journalEntries: {
    src: '/journal_entries.webp',
    blurDataURL: 'data:image/webp;base64,...',
    sizes: '100vw',
  },
  otherMediums: {
    src: '/other_mediums.webp',
    blurDataURL: 'data:image/webp;base64,...',
    sizes: '100vw',
  },
  zj: {
    src: '/zjo.webp',
    blurDataURL: 'data:image/webp;base64,...',
    sizes: '100vw',
  },
} as const; 