'use client';

import Image from 'next/image';
import { useState } from 'react';
import Spinner from './Spinner';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  /**
   * viewport: background is fixed to the viewport and won't resize when content height changes
   * container: background fills the nearest positioned container (current behavior)
   */
  mode?: 'viewport' | 'container';
}

export default function BackgroundImage({ src, alt, className = '', mode = 'container' }: BackgroundImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      {mode === 'viewport' ? (
        <div className={`fixed inset-0 -z-10 pointer-events-none`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            quality={85}
            loading="eager"
            className={`object-cover ${className}`}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      ) : (
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
      )}
    </>
  );
} 