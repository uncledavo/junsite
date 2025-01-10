'use client';

import { useState } from 'react';

export default function WebsiteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-xl block"
      >
        website
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white/10 dark:bg-black/10 backdrop-blur-xl p-8 rounded-lg border border-white/20 dark:border-black/20 max-w-sm w-full text-center shadow-xl animate-in zoom-in-50 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-2xl font-feedback tracking-wider">where do you think you are?</p>
          </div>
        </div>
      )}
    </>
  );
} 