import Link from 'next/link';

export const metadata = {
  title: 'Walks | Dartmoor.uk',
  description: 'Popular walking routes on Dartmoor National Park.',
};

const walks = [
  {
    slug: 'haytor-hound-tor',
    name: 'Haytor to Hound Tor Circular',
    distance: '~6.4 km / 4 miles',
    difficulty: 'Easy–Moderate',
    time: '1.5–2.5 hours',
    description: 'Classic loop linking two of the most popular tors, with optional detour to the medieval village.',
    img: '/images/1Kvq9.jpg',
  },
  {
    slug: 'burrator',
    name: 'Burrator Reservoir Circuit',
    distance: '~6–8 km',
    difficulty: 'Easy',
    time: '2–3 hours',
    description: 'Flat and scenic walk or cycle around the reservoir with views of surrounding tors.',
    img: '/images/8SXu3.jpg',
  },
  {
    slug: 'grimspound',
    name: 'Grimspound & Hameldown',
    distance: 'Variable',
    difficulty: 'Moderate',
    time: 'Half day',
    description: 'Combine the Bronze Age settlement with higher ground on Hameldown for wider views.',
    img: '/images/LVFgq.jpg',
  },
];

export default function Walks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Walking on Dartmoor</h1>
      <p className="text-lg text-slate-700 mb-10">From easy family strolls to longer routes. Click any walk for more detail.</p>

      <div className="space-y-8">
        {walks.map((walk) => (
          <article key={walk.slug} className="glass rounded-3xl overflow-hidden card-hover">
            <img src={walk.img} alt={walk.name} className="w-full h-48 object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-sky-700">{walk.name}</h2>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-sky-600 my-4">
                <span>Distance: {walk.distance}</span>
                <span>Difficulty: {walk.difficulty}</span>
                <span>Time: {walk.time}</span>
              </div>
              <p className="text-slate-600 mb-4">{walk.description}</p>
              <Link href={`/walks/${walk.slug}`} className="text-sky-600 font-semibold hover:underline">
                View full details →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-8 border border-sun-200">
        <h3 className="text-xl font-bold text-sun-700 mb-3">Safety Notes</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Weather can change quickly — check forecasts and be prepared.</li>
          <li>Military firing ranges operate on parts of the moor. Check times before visiting.</li>
          <li>Stick to paths where possible and keep dogs under control near livestock.</li>
        </ul>
      </div>
    </div>
  );
}