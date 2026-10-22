import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sun-50 to-warm-100 opacity-80" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 hero-glow bg-gradient-to-r from-sky-600 via-sky-500 to-sun-500 bg-clip-text text-transparent">
            Dartmoor National Park
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-700 max-w-2xl mx-auto">
            Wild open moorland, granite tors, ancient history and free-roaming ponies — under bright Devon skies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/attractions" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
              Explore Attractions
            </Link>
            <Link href="/walks" className="glass px-8 py-4 rounded-2xl font-semibold text-sky-700 hover:bg-white/90 transition">
              Walking Routes
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-10 text-center">Why Visit Dartmoor?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Iconic Tors', text: 'Climb Haytor, Hound Tor and dozens more for panoramic views across the moor under clear skies.' },
            { title: 'Ancient History', text: 'Bronze Age settlements like Grimspound, medieval villages and prehistoric stone rows.' },
            { title: 'Wild Ponies', text: 'Semi-wild Dartmoor ponies have roamed here for thousands of years — treat them with respect.' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-xl font-bold text-sky-700 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-10 text-center">Popular Spots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Haytor', 'Hound Tor', 'Burrator Reservoir', 'Grimspound'].map((spot) => (
              <div key={spot} className="glass rounded-3xl overflow-hidden card-hover">
                <div className="h-36 bg-gradient-to-br from-sky-400 to-sun-300 flex items-center justify-center text-white text-xl font-bold">
                  {spot}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-sky-800">{spot}</h3>
                  <p className="text-sm text-slate-600 mt-1">A must-see on any sunny Dartmoor day.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/attractions" className="text-sky-600 font-semibold hover:underline text-lg">View all attractions →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="glass rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Plan Your Visit</h2>
          <p className="text-lg text-slate-700 mb-8">Around 3 million people visit Dartmoor each year. Check the weather, military firing times and parking before you set out. Leave no trace and enjoy the open skies.</p>
          <Link href="/about" className="inline-block bg-gradient-to-r from-sun-400 to-warm-400 text-slate-900 px-8 py-4 rounded-2xl font-semibold shadow hover:shadow-lg transition">
            Practical Information
          </Link>
        </div>
      </section>
    </div>
  );
}