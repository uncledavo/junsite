import Link from "next/link";

export default function About() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div 
        className="max-w-2xl text-center space-y-4"
        style={{ viewTransitionName: 'content' }}
      >
        <p className="text-lg">
        slow is smooth, smooth is fast
          {/* Add your text content here */}
        </p>
        <Link 
          href="/"
          className="text-sm underline transition-all duration-200 hover:blur-[2px]"
        >
          back
        </Link>
      </div>
    </div>
  );
} 