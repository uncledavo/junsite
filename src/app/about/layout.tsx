import Image from "next/image";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <Image
        src="/landing.avif"
        alt="Background"
        fill
        priority
        quality={85}
        loading="eager"
        className="object-cover z-[-1] opacity-30 transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 60vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        onLoadingComplete={(img) => {
          img.classList.remove('opacity-0');
          img.classList.add('opacity-30');
        }}
      />
      {children}
    </div>
  );
} 