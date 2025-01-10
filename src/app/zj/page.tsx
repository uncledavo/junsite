import Link from "next/link";
import BackgroundImage from '../components/BackgroundImage';

export default function ZJ() {
  return (
    <div className="min-h-screen p-8 pb-8 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <BackgroundImage
        src="/zj.avif"
        alt="Background"
        className="opacity-0 animate-fade-in"
      />
      
      <header className="flex justify-between items-start mb-8 relative">
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
      <div className="text-white">
          <p className="text-2xl font-bold max-w-2xl tracking-wider">
            Play, Though? 
          </p>
          <p className="text-sm font-normal">EP to be released 25/01/2025</p>

          <p className="mt-6 text-l italic max-w-2xl tracking-wider">
          I foraged in the forest of Gott, but <br />
          in excess, the Leftover Salad lay. <br />
          Rushed to leave in glut, the bowl Tilt-ed, <br />  
          slowly falling onto the ground, I Gasp.<br />
          </p>
      </div>
      <div className="text-white mt-16">
          <Link href="https://findmerecords.bandcamp.com/album/concrete-jungle" className="text-2xl font-bold max-w-2xl tracking-wider">
            Concrete Jungle
          </Link>
          <p className="text-sm font-normal tracking-wider">EP, released 23/03/2024</p>
          <p className="mt-6 text-l tracking-wider max-w-2xl font-normal">
          After spending my formative years in the UK, I returned to Hong Kong as an auditor, only to discover my 10-year-old memories serve me. This EP is my memoir of the Yellow Umbrella movement protests, COVID-19, quitting my first corporate job, and saying goodbye to my childhood home.
          </p>
          <iframe 
            className="mt-6" 
            style={{ border: 0, width: '280px', height: '280px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=3342620367/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" 
            seamless
          />
      </div>
    </div>
  );
} 