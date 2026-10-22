'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent">
          Dartmoor.uk
        </Link>
        <nav className="hidden md:flex space-x-8 font-medium text-slate-700">
          <Link href="/" className="hover:text-sky-600 transition">Home</Link>
          <Link href="/attractions" className="hover:text-sky-600 transition">Attractions</Link>
          <Link href="/walks" className="hover:text-sky-600 transition">Walks</Link>
          <Link href="/about" className="hover:text-sky-600 transition">About</Link>
        </nav>
        <button className="md:hidden text-2xl text-sky-700" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t px-4 py-3 space-y-2 text-slate-700">
          <Link href="/" className="block py-1" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/attractions" className="block py-1" onClick={() => setOpen(false)}>Attractions</Link>
          <Link href="/walks" className="block py-1" onClick={() => setOpen(false)}>Walks</Link>
          <Link href="/about" className="block py-1" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
}