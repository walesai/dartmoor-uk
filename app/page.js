import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="relative py-20 md:py-28 px-4 text-center overflow-hidden">
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
            <Link href="/weather" className="glass px-8 py-4 rounded-2xl font-semibold text-sky-700 hover:bg-white/90 transition">
              Local Weather
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/1280px-Haytor%2C_May_2011_2.jpg" alt="Haytor Rocks" className="rounded-3xl h-56 w-full object-cover shadow-xl" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dartmoor_Hound_Tor.jpg/1280px-Dartmoor_Hound_Tor.jpg" alt="Hound Tor" className="rounded-3xl h-56 w-full object-cover shadow-xl" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dartmoor_ponies._%2843613314294%29.jpg/960px-Dartmoor_ponies._%2843613314294%29.jpg" alt="Dartmoor ponies" className="rounded-3xl h-56 w-full object-cover shadow-xl" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-10 text-center">Activities & Views</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Haytor', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/800px-Haytor%2C_May_2011_2.jpg' },
              { name: 'Walking', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/On_Dartmoor.jpg/800px-On_Dartmoor.jpg' },
              { name: 'Burrator', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Burrator_Reservoir_from_Sheeps_Tor_Dam_-_geograph.org.uk_-_4633766.jpg/800px-Burrator_Reservoir_from_Sheeps_Tor_Dam_-_geograph.org.uk_-_4633766.jpg' },
              { name: 'Ponies', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dartmoor_ponies._%2843613314294%29.jpg/800px-Dartmoor_ponies._%2843613314294%29.jpg' },
            ].map((spot) => (
              <div key={spot.name} className="glass rounded-3xl overflow-hidden card-hover">
                <img src={spot.img} alt={spot.name} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-sky-800">{spot.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">Classic Dartmoor experience.</p>
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
          <p className="text-lg text-slate-700 mb-8">Check the local weather, military firing times and parking before you set out. Leave no trace and enjoy the open skies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/weather" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-2xl font-semibold">Live Weather</Link>
            <Link href="/about" className="glass px-8 py-3 rounded-2xl font-semibold text-sky-700">Practical Info</Link>
          </div>
        </div>
      </section>
    </div>
  );
}