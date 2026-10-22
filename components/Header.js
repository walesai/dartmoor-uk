'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-moor-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Dartmoor<span className="text-moor-100">.uk</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-moor-100">Home</Link>
          <Link href="/attractions" className="hover:text-moor-100">Attractions</Link>
          <Link href="/walks" className="hover:text-moor-100">Walks</Link>
          <Link href="/about" className="hover:text-moor-100">About</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-moor-700 px-4 py-3 space-y-2">
          <Link href="/" className="block" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/attractions" className="block" onClick={() => setOpen(false)}>Attractions</Link>
          <Link href="/walks" className="block" onClick={() => setOpen(false)}>Walks</Link>
          <Link href="/about" className="block" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}