'use client';

import { useState } from 'react';

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-2xl font-feedback tracking-wider"
        style={{ viewTransitionName: 'title' }}
      >
        hi i&apos;m jun
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-2xl text-center space-y-4">
            <p className="text-2xl font-feedback tracking-wider">
              slow is smooth, smooth is fast
            </p>
          </div>
        </div>
      )}
    </>
  );
}

