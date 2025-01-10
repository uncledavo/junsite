import Link from "next/link";
import Image from "next/image";

export default function Mixes() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <Image
        src="/journal.webp"
        alt="Background"
        fill
        priority
        quality={75}
        className="object-cover z-[-1] opacity-80"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j..."
      />
      
      <header className="flex justify-between items-start mb-16 relative">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-2xl font-feedback tracking-wider whitespace-nowrap"
            style={{ viewTransitionName: 'title' }}
          >
            mixes as journal entries
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