import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import CursorWrapper from './components/cursor-wrapper';

const feedbackFont = localFont({
  src: '../../public/fonts/feedback.otf',
  variable: '--font-feedback',
  preload: true,
  display: 'swap', // Optimize font loading
})

export const metadata: Metadata = {
  title: "jun",
  description: "jun's website - dj and producer also known as zj smiles / grossmargins",
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
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}
