import Link from "next/link";
import Image from "next/image";

export default function GrossMargins() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <Image
        src="/zj.avif"
        alt="Background"
        fill
        priority
        quality={85}
        loading="eager"
        className="object-cover z-[-1] opacity-80 transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 60vw"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onLoadingComplete={(img) => {
          img.classList.remove('opacity-0');
          img.classList.add('opacity-80');
        }}
      />
      
      <header className="flex justify-between items-start mb-16 relative">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-2xl font-feedback tracking-wider"
            style={{ viewTransitionName: 'title' }}
          >
            zj☻
          </h1>
          <Link 
            href="/"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            go home
          </Link>
        </div>
        <div className="w-[200px]" />
      </header>
    </div>
  );
} 