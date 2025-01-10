import BackgroundImage from '../components/BackgroundImage';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <BackgroundImage
        src="/landing.avif"
        alt="Background"
        className="opacity-0 animate-fade-in-light"
      />
      {children}
    </div>
  );
} 