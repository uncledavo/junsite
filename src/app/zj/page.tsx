import Link from "next/link";
import Image from "next/image";

export default function ZJ() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <Image
        src="/zjo.wepb"
        alt="Background"
        fill
        priority
        quality={75}
        className="object-cover z-[-1] opacity-80"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j..."
      />
      
      <header className="flex flex-col items-start gap-2">
        <Link 
          href="/"
          className="text-sm hover:opacity-60 transition-opacity font-sans"
        >
          go home
        </Link>
        <h1 
          className="text-2xl font-feedback tracking-wider"
          style={{ viewTransitionName: 'title' }}
        >
          zj☻
        </h1>
      </header>
    </div>
  );
} 