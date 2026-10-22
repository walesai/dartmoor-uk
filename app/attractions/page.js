export const metadata = {
  title: 'Attractions | Dartmoor.uk',
  description: 'Top attractions and places to visit in Dartmoor National Park.',
};

const attractions = [
  {
    name: 'Haytor',
    description: 'The most famous granite tor on Dartmoor. Spectacular views, short walks from the car park, nearby visitor centre and the historic granite tramway.',
    location: 'Eastern edge, near Bovey Tracey',
  },
  {
    name: 'Hound Tor',
    description: 'Dramatic rock formations and the well-preserved remains of a deserted medieval village. Popular with walkers and climbers.',
    location: 'Near Manaton / Haytor area',
  },
  {
    name: 'Burrator Reservoir',
    description: 'Beautiful reservoir with easy walks, cycling and views of surrounding tors. Completed in 1898 to supply Plymouth.',
    location: 'South-west Dartmoor, near Yelverton',
  },
  {
    name: 'Grimspound',
    description: 'Impressive Bronze Age settlement with around 24 hut circles enclosed by a stone wall. One of the best-preserved on the moor.',
    location: 'Near Widecombe-in-the-Moor',
  },
  {
    name: 'Princetown',
    description: 'Highest town in England, home to Dartmoor Prison and the main National Park Visitor Centre with exhibitions and history.',
    location: 'Central Dartmoor',
  },
  {
    name: 'Widecombe-in-the-Moor',
    description: 'Pretty village with the famous church known as the Cathedral of the Moor, pubs and traditional markets.',
    location: 'Eastern Dartmoor',
  },
];

export default function Attractions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-moor-900 mb-4">Attractions</h1>
      <p className="text-lg text-gray-700 mb-10">Discover the tors, villages, reservoirs and ancient sites that make Dartmoor unique.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {attractions.map((item) => (
          <article key={item.name} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-moor-800 mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-3">{item.description}</p>
            <p className="text-sm text-moor-600 font-medium">Location: {item.location}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-moor-100 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Visitor Centres</h3>
        <p>Main centres at Princetown, Haytor and Postbridge offer maps, advice and exhibitions. Opening times vary seasonally – check dartmoor.gov.uk for latest details.</p>
      </div>
    </div>
  );
}