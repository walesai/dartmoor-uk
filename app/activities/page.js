export const metadata = {
  title: 'Activities | Dartmoor.uk',
  description: 'Walking, cycling, horse riding, climbing and more activities on Dartmoor.',
};

const activities = [
  {
    name: 'Walking & Hiking',
    description: 'Hundreds of miles of paths and open access land. From easy reservoir circuits to challenging multi-day routes across the high moor. Always check weather and firing times.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/On_Dartmoor.jpg/800px-On_Dartmoor.jpg',
  },
  {
    name: 'Cycling',
    description: 'Quiet lanes, reservoir tracks and the Granite Way. Burrator and the edge of the moor are popular. Respect the National Park code and give way to walkers and horses.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Burrator_Reservoir_from_Sheeps_Tor_Dam_-_geograph.org.uk_-_4633766.jpg/800px-Burrator_Reservoir_from_Sheeps_Tor_Dam_-_geograph.org.uk_-_4633766.jpg',
  },
  {
    name: 'Horse Riding',
    description: 'Many bridleways and open moorland. Local stables offer treks. Dartmoor ponies are semi-wild — give them space and never feed them.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dartmoor_ponies._%2843613314294%29.jpg/800px-Dartmoor_ponies._%2843613314294%29.jpg',
  },
  {
    name: 'Climbing & Scrambling',
    description: 'Granite tors such as Haytor, Hound Tor and Dewerstone offer excellent scrambling and traditional climbing. Check conditions and access.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/800px-Haytor%2C_May_2011_2.jpg',
  },
  {
    name: 'Wildlife Watching',
    description: 'Look for Dartmoor ponies, birds of prey, skylarks and, in the right season, rare butterflies. Early morning and late evening are best.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dartmoor_Hound_Tor.jpg/800px-Dartmoor_Hound_Tor.jpg',
  },
  {
    name: 'Photography',
    description: 'Iconic tors, reservoirs, ancient sites and dramatic light. Sunrise and sunset on the moor are spectacular. Leave no trace.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Holwell_Tor_and_Hay_Tor_from_Hound_Tor.jpg/800px-Holwell_Tor_and_Hay_Tor_from_Hound_Tor.jpg',
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