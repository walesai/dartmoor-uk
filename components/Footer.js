import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-moor-900 text-moor-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-white mb-3">Dartmoor.uk</h3>
          <p className="text-sm">Independent visitor guide to Dartmoor National Park. Not affiliated with the National Park Authority.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/attractions" className="hover:underline">Attractions</Link></li>
            <li><Link href="/walks" className="hover:underline">Walks</Link></li>
            <li><Link href="/about" className="hover:underline">About the Moor</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">Practical</h3>
          <p className="text-sm">Check weather, firing times and parking before you visit. Always follow the Countryside Code.</p>
        </div>
      </div>
      <div className="border-t border-moor-700 text-center text-xs py-4">
        © {new Date().getFullYear()} Dartmoor.uk – Built for visitors to Devon’s wild heart.
      </div>
    </footer>
  );
}