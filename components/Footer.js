import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-slate-700">
        <div>
          <h3 className="font-bold text-sky-700 mb-3">Dartmoor.uk</h3>
          <p className="text-sm">Bright independent visitor guide to Dartmoor National Park. Not affiliated with the National Park Authority.</p>
        </div>
        <div>
          <h3 className="font-bold text-sky-700 mb-3">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/attractions" className="hover:text-sky-600">Attractions</Link></li>
            <li><Link href="/walks" className="hover:text-sky-600">Walks</Link></li>
            <li><Link href="/about" className="hover:text-sky-600">About the Moor</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-sky-700 mb-3">Visit</h3>
          <p className="text-sm">Check weather, firing times and parking. Leave no trace and enjoy the moor.</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} Dartmoor.uk – Made for sunny days on the moor ☀️
      </div>
    </footer>
  );
}