'use client';

import Image from 'next/image';
import { useState } from 'react';
import Spinner from './Spinner';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BackgroundImage({ src, alt, className = '' }: BackgroundImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        loading="eager"
        className={`object-cover z-[-1] ${className}`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 60vw"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
} 