import type { Metadata } from "next";
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import "./globals.css";

// Dynamically import CustomCursor with loading disabled to defer its loading
const CustomCursor = dynamic(() => import('./components/CustomCursor'), {
  ssr: false, // Disable server-side rendering since cursor is client-side only
  loading: () => null // No loading state needed for cursor
})

const feedbackFont = localFont({
  src: '../../public/fonts/feedback.otf',
  variable: '--font-feedback',
  preload: true,
  display: 'swap', // Optimize font loading
})

export const metadata: Metadata = {
  title: "jun",
  description: "jun's website - also known as zj smiles / grossmargins",
};

// Add view transitions metadata
export const viewport = {
  themeColor: 'light',
  viewTransitionName: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={feedbackFont.variable}>
      <body className="font-feedback">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
