export const metadata = {
  title: 'Walks | Dartmoor.uk',
  description: 'Popular walking routes on Dartmoor National Park.',
};

const walks = [
  {
    name: 'Haytor to Hound Tor Circular',
    distance: '~6.4 km / 4 miles',
    difficulty: 'Easy–Moderate',
    time: '1.5–2.5 hours',
    description: 'Classic loop linking two of the most popular tors, with optional detour to the medieval village. Follows moorland tracks and granite paths.',
  },
  {
    name: 'Burrator Reservoir Circuit',
    distance: '~6–8 km depending on route',
    difficulty: 'Easy',
    time: '2–3 hours',
    description: 'Flat and scenic walk or cycle around the reservoir with views of surrounding tors. Suitable for families.',
  },
  {
    name: 'Grimspound & Hameldown',
    distance: 'Variable',
    difficulty: 'Moderate',
    time: 'Half day',
    description: 'Combine the Bronze Age settlement with higher ground on Hameldown for wider views.',
  },
];

export default function Walks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-moor-900 mb-4">Walking on Dartmoor</h1>
      <p className="text-lg text-gray-700 mb-10">Dartmoor offers everything from easy family strolls to challenging long-distance routes. Always check weather and carry a map.</p>

      <div className="space-y-8">
        {walks.map((walk) => (
          <article key={walk.name} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-moor-800">{walk.name}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-moor-600 my-3">
              <span>Distance: {walk.distance}</span>
              <span>Difficulty: {walk.difficulty}</span>
              <span>Time: {walk.time}</span>
            </div>
            <p className="text-gray-700">{walk.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 border border-amber-200 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">Safety Notes</h3>
        <ul className="list-disc pl-5 space-y-1 text-amber-900">
          <li>Weather can change quickly – check forecasts and be prepared.</li>
          <li>Military firing ranges operate on parts of the moor. Check times before visiting.</li>
          <li>Stick to paths where possible and keep dogs under control near livestock.</li>
          <li>Wild camping is permitted in certain areas – follow the Dartmoor camping map rules.</li>
        </ul>
      </div>
    </div>
  );
}