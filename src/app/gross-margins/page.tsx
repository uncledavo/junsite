import Link from "next/link";
import BackgroundImage from '../components/BackgroundImage';

export default function GrossMargins() {
  return (
    <div className="min-h-screen p-8 pb-8 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col relative">
      <BackgroundImage
        src="/gross.avif"
        alt="Background"
        className="opacity-0 animate-fade-in"
      />
      
      <header className="flex justify-between items-start mb-8 relative">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-2xl font-feedback tracking-wider"
            style={{ viewTransitionName: 'title' }}
          >
            gross margins
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
      <div className="text-white">
          <p className="text-base/7 font-semibold">
            coming soon
          </p>
      </div>
    </div>
  );
} 