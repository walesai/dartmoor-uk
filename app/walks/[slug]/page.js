import { notFound } from 'next/navigation';

const walks = {
  'haytor-hound-tor': {
    name: 'Haytor to Hound Tor Circular',
    distance: '~6.4 km / 4 miles',
    difficulty: 'Easy–Moderate',
    time: '1.5–2.5 hours',
    description: 'A classic and rewarding loop that links two of Dartmoor’s most popular granite tors. The route is well-trodden and offers excellent views. An optional short detour takes in the remains of the deserted medieval village at Hound Tor.',
    notes: 'Start at the Haytor car park. The path is clear but can be rocky underfoot. Allow extra time in poor weather. Dogs should be kept under close control near livestock.',
    img: '/images/1Kvq9.jpg',
  },
  'burrator': {
    name: 'Burrator Reservoir Circuit',
    distance: '~6–8 km depending on route',
    difficulty: 'Easy',
    time: '2–3 hours',
    description: 'A gentle, mostly flat circuit around the reservoir. Ideal for families, walkers who want an easier day, or anyone who enjoys water and woodland views. The surrounding tors make a fine backdrop.',
    notes: 'Several car parks around the reservoir. The path is generally good. Can be popular on sunny weekends.',
    img: '/images/8SXu3.jpg',
  },
  'grimspound': {
    name: 'Grimspound & Hameldown',
    distance: 'Variable (3–8 km)',
    difficulty: 'Moderate',
    time: 'Half day',
    description: 'Visit one of the best-preserved Bronze Age settlements on the moor, then climb higher onto Hameldown for wide views across Dartmoor. The combination of history and open moorland is excellent.',
    notes: 'Parking near the site is limited. The ground can be uneven. Check weather before heading onto higher ground.',
    img: '/images/LVFgq.jpg',
  },
};

export async function generateStaticParams() {
  return Object.keys(walks).map((slug) => ({ slug }));
}

export default function WalkDetail({ params }) {
  const walk = walks[params.slug];
  if (!walk) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img src={walk.img} alt={walk.name} className="w-full h-64 md:h-96 object-cover rounded-3xl mb-8 shadow-lg" />
      <h1 className="text-4xl font-extrabold text-sky-800 mb-4">{walk.name}</h1>
      <div className="flex flex-wrap gap-4 text-sm font-medium text-sky-600 mb-6">
        <span>Distance: {walk.distance}</span>
        <span>Difficulty: {walk.difficulty}</span>
        <span>Time: {walk.time}</span>
      </div>
      <p className="text-lg text-slate-700 mb-6">{walk.description}</p>
      <div className="glass rounded-3xl p-6">
        <h2 className="font-bold text-sky-800 mb-2">Practical notes</h2>
        <p className="text-slate-600">{walk.notes}</p>
      </div>
    </div>
  );
}