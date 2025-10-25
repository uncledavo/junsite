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
          Backpocket Slammers: Volume 4
          </p>
          <p className="text-sm font-normal">Various Artists, released 05/11/2025</p>

          {/* <p className="mt-6 text-sm italic max-w-2xl tracking-wider">
          I foraged in the forest of Gott, but <br />
          in excess, the Leftover Salad lay. <br />
          Rushed to leave in glut, the bowl Tilt-ed, <br />  
          slowly falling onto the ground, I Gasp.<br />
          </p> */}
          <iframe 
            className="mt-6"
            style={{ border: 0, width: '280px', height: '280px' }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=2839537834/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" 
            seamless
          />
      </div>
    </div>
  );
} 