export const metadata = {
  title: 'Activities | Dartmoor.uk',
  description: 'Walking, cycling, horse riding, climbing and more activities on Dartmoor.',
};

const activities = [
  {
    name: 'Walking & Hiking',
    description: 'Hundreds of miles of paths and open access land. From easy reservoir circuits to challenging multi-day routes across the high moor. Always check weather and firing times.',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cycling',
    description: 'Quiet lanes, reservoir tracks and the Granite Way. Burrator and the edge of the moor are popular. Respect the National Park code and give way to walkers and horses.',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066027b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Horse Riding',
    description: 'Many bridleways and open moorland. Local stables offer treks. Dartmoor ponies are semi-wild — give them space and never feed them.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Climbing & Scrambling',
    description: 'Granite tors such as Haytor, Hound Tor and Dewerstone offer excellent scrambling and traditional climbing. Check conditions and access.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Wildlife Watching',
    description: 'Look for Dartmoor ponies, birds of prey, skylarks and, in the right season, rare butterflies. Early morning and late evening are best.',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Photography',
    description: 'Iconic tors, reservoirs, ancient sites and dramatic light. Sunrise and sunset on the moor are spectacular. Leave no trace.',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Activities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Activities</h1>
      <p className="text-lg text-slate-700 mb-10">Everything you can do on Dartmoor — from gentle walks to full-day adventures across the granite tors and open moor.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {activities.map((item) => (
          <article key={item.name} className="glass rounded-3xl overflow-hidden card-hover">
            <img src={item.img} alt={item.name} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sky-700 mb-3">{item.name}</h2>
              <p className="text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-8">
        <h3 className="text-xl font-bold text-sky-700 mb-2">Before you go</h3>
        <ul className="text-slate-600 space-y-1 list-disc list-inside">
          <li>Check the weather and military firing times</li>
          <li>Take a map, compass or GPS and suitable clothing</li>
          <li>Leave no trace and respect livestock and wildlife</li>
          <li>Parking can be limited — arrive early in peak season</li>
        </ul>
      </div>
    </div>
  );
}