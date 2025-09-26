import Link from "next/link";
import BackgroundImage from '../components/BackgroundImage';

export default function Mixes() {
  return (
    <div className="min-h-screen p-8 pb-8 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <BackgroundImage
        src="/mixes.avif"
        alt="Background"
        className="opacity-0 animate-fade-in"
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