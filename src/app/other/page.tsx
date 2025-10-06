import Link from "next/link";
import BackgroundImage from '../components/BackgroundImage';
import InstagramEmbed from '../components/instagram-embed';

export default function ZJ() {
  return (
    <div className="min-h-screen p-8 pb-8 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <BackgroundImage
        src="/other.avif"
        alt="Background"
        className="opacity-0 animate-fade-in"
      />
      
      <header className="flex justify-between items-start mb-8 relative">
        <div className="flex flex-col gap-2">
          <h1 
            className="text-2xl font-feedback tracking-wider"
            style={{ viewTransitionName: 'title' }}
          >
            other mediums
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
      <p className="text-xl max-w-2xl tracking-wider">
      I occasionally dabble in amateur film photography, all photos in the background and some used in my artworks for are taken from using a Canon AEP-1.
          </p>
          <p className="text-2xl font-bold max-w-2xl tracking-wider pt-16">
          Chinese Dictionary feat. Tifenn
          </p>
          <div className="mt-8">
            <InstagramEmbed permalink="https://www.instagram.com/reel/Cpk13ScD-C7/?utm_source=ig_embed&amp;utm_campaign=loading" />
          </div>

          <p className="text-2xl font-bold max-w-2xl tracking-wider pt-16">
          In The End It Always Does (short film by Madeleine Perdrian)
          </p>
           <p className="text-sm font-normal tracking-wider">Maddy&apos;s Collarts Assessment (22/08/2024)</p>
           <p className="text-sm font-normal tracking-wider">Music Used: &quot;Sunshine Baby&quot; by The Japanese House</p>
           <iframe 
             className="mt-8 w-full max-w-3xl"
             src="https://drive.google.com/file/d/1HqNxEb8NZlCzNWYVU42NUjycSTZW6jQQ/preview"
             width="640"
             height="480"
             allow="autoplay"
           />

<p className="text-2xl font-bold max-w-2xl tracking-wider pt-16">
Capture (Re-Soundtracked)
          </p>
           <p className="text-sm font-normal tracking-wider">Collarts MPMPT3 - Sound Design: Music for Image, Assessment Task 2 – Short Film Soundtrack (22/08/2024)
           </p>
           <iframe 
             className="mt-8 w-full max-w-3xl"
             src="https://drive.google.com/file/d/1PnJi6XSfzwNtCBWWpIp-R5JfL66TlFax/preview"
             width="640"
             height="480"
             allow="autoplay"
           />

<p className="text-2xl font-bold max-w-2xl tracking-wider pt-16">
Alien: Romulus (Re-Soundtracked)
          </p>
           <p className="text-sm font-normal tracking-wider">Collarts MPMPD4 - Technology in Performance 2, Assessment 3 – Ensemble Production/Visual Assessment (04/12/2024)
           </p>
           <p className="text-sm font-normal tracking-wider">Led by Benjamin Colbourne with Aaron Clarke, Gabriel Bermeo & Nyuon Gatluak.</p>
           <iframe 
             className="mt-8 w-full max-w-3xl"
             src="https://drive.google.com/file/d/1R-YnZAcZC7LT3HOGlBKRuzWGjTohZcTK/preview"
             width="640"
             height="480"
             allow="autoplay"
           />

      </div>
    </div>
  );
} 