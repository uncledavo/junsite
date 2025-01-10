'use client';

import { useState } from 'react';

export default function WebsiteModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="font-feedback tracking-wider transition-all duration-200 text-xl block"
      >
        website
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <p className="text-2xl font-feedback tracking-wider">where do you think you are?</p>
        </div>
      )}
    </>
  );
} 