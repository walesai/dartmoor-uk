import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-moor-700 to-moor-900 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Dartmoor National Park</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Wild moorland, granite tors, ancient history and free-roaming ponies in the heart of Devon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/attractions" className="bg-white text-moor-900 px-8 py-3 rounded-lg font-semibold hover:bg-moor-50">Explore Attractions</Link>
            <Link href="/walks" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-moor-900">Walking Routes</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-moor-900 mb-8 text-center">Why Visit Dartmoor?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Iconic Tors</h3>
            <p>Climb Haytor, Hound Tor and dozens more for panoramic views across the moor.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Ancient History</h3>
            <p>Bronze Age settlements like Grimspound, medieval villages and prehistoric stone rows.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Wild Ponies</h3>
            <p>Semi-wild Dartmoor ponies have roamed here for thousands of years – treat them with respect.</p>
          </div>
        </div>
      </section>

      <section className="bg-moor-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-moor-900 mb-8 text-center">Popular Spots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Haytor", "Hound Tor", "Burrator Reservoir", "Grimspound"].map((spot) => (
              <div key={spot} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <div className="h-40 bg-moor-600 flex items-center justify-center text-white text-lg font-medium">{spot}</div>
                <div className="p-4">
                  <h3 className="font-semibold">{spot}</h3>
                  <p className="text-sm text-gray-600 mt-1">A must-see on any Dartmoor visit.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/attractions" className="text-moor-700 font-semibold hover:underline">View all attractions →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-moor-900 mb-4">Plan Your Visit</h2>
        <p className="text-lg text-gray-700 mb-6">Around 3 million people visit Dartmoor each year. Check weather, military firing times and parking before you set out. Stick to paths where possible and leave no trace.</p>
        <Link href="/about" className="inline-block bg-moor-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-moor-900">Practical Information</Link>
      </section>
    </div>
  );
}