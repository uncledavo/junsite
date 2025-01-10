import Link from "next/link";
import Image from "next/image";
import WebsiteModal from './components/WebsiteModal';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      {/* Background Image */}
      <Image
        src="/Landing_Page.jpg"
        alt="Background"
        fill
        priority
        quality={75}
        className="object-cover z-[-1] opacity-80"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j..."
      />
      
      {/* Header */}
      <header className="flex justify-between items-start mb-16 relative">
        <Link 
          href="/about"
          className="text-2xl font-feedback tracking-wider"
          style={{ viewTransitionName: 'title' }}
        >
          hi i&apos;m jun
        </Link>
        
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
                href="/zj"
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
                mixes as journal entries
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

      <footer className="flex flex-col gap-2 items-start text-xl pl-0 relative">
        <a
          className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] block"
          href="https://www.instagram.com/zj_smiles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
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
      </footer>
    </div>
  );
}
