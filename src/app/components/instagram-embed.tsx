'use client';

import React, { useEffect } from 'react';

type InstagramEmbedProps = {
  permalink: string; // e.g., https://www.instagram.com/reel/....
};

export default function InstagramEmbed({ permalink }: InstagramEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector('script#ig-embed');
    if (!existing) {
      const s = document.createElement('script');
      s.id = 'ig-embed';
      s.async = true;
      s.src = '//www.instagram.com/embed.js';
      document.body.appendChild(s);
    } else if (window && (window as any).instgrm?.Embeds?.process) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: 3,
        boxShadow:
          '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: 540,
        minWidth: 326,
        padding: 0,
        width: '99.375%'
      }}
    >
      <a href={permalink} target="_blank" rel="noreferrer noopener">
        View this post on Instagram
      </a>
    </blockquote>
  );
}


