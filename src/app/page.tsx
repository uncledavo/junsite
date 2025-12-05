import Link from "next/link";
import WebsiteModal from './components/WebsiteModal';
import ContactModal from './components/ContactModal';
import AboutModal from './components/AboutModal';
import BackgroundImage from './components/BackgroundImage';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <BackgroundImage
        src="/landing.avif"
        alt="Background"
        className="opacity-0 animate-fade-in"
      />
      
      {/* Header */}
      <header className="flex justify-between items-start mb-16 relative">
        <AboutModal />
        
        <nav>
          <ul className="flex flex-col gap-2 text-xl">
            <li>
              <Link 
                href="/gross-margins"
                className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-right block"
              >
                gross margins
              </Link>
            </li>
            <li>
              <Link 
                href="/zjsmiles"
                className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-right block"
              >
                zj☻
              </Link>
            </li>
            <li>
              <Link 
                href="/mixes"
                className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-right block"
              >
                journal entries
              </Link>
            </li>
            <li>
              <Link 
                href="/other"
                className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-right block"
              >
                other mediums
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <footer className="flex justify-between items-end w-full relative">
        <div className="flex flex-col gap-2 items-start text-xl pl-0">
          <a
            className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] block"
            href="https://www.instagram.com/gross_margins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <a
            className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] block"
            href="https://www.instagram.com/gravitate_au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gravitate
          </a>
          <a
            className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] block"
            href="https://soundcloud.com/zjsmiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            soundcloud
          </a>
          <WebsiteModal />
        </div>
        <div className="flex flex-col gap-2 items-end text-xl">
          <div className="font-feedback tracking-wider block invisible">instagram</div>
          <div className="font-feedback tracking-wider block invisible">gravitate</div>
          <a
            className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] block"
            href="https://www.linkedin.com/in/jun-ong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bookkeeping
          </a>
          <ContactModal />
        </div>
      </footer>
    </div>
  );
}
