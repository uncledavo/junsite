import Image from "next/image";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col justify-between relative">
      <Image
        src="/landing.jpg"
        alt="Background"
        fill
        priority
        quality={75}
        className="object-cover z-[-1] opacity-30 transition-opacity duration-500"
        sizes="(max-width: 640px) calc(100vw - 4rem), calc(100vw - 10rem)"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      {children}
    </div>
  );
} 