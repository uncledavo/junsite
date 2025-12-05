'use client';

import { useState } from 'react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="font-feedback tracking-wider transition-all duration-200 hover:blur-[2px] text-xl block"
      >
        contact
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="text-2xl font-feedback tracking-wider">
            <p>junandgames@gmail.com</p>
            <p className="text-center">
              <a 
                href="https://www.linkedin.com/in/jun-ong/" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

