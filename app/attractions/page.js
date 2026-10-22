export const metadata = {
  title: 'Attractions | Dartmoor.uk',
  description: 'Top attractions and places to visit in Dartmoor National Park.',
};

const attractions = [
  {
    name: 'Haytor',
    description: 'The most famous granite tor on Dartmoor. Spectacular views, short walks from the car park, nearby visitor centre and the historic granite tramway.',
    location: 'Eastern edge, near Bovey Tracey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/800px-Haytor%2C_May_2011_2.jpg',
  },
  {
    name: 'Hound Tor',
    description: 'Dramatic rock formations and the well-preserved remains of a deserted medieval village. Popular with walkers and climbers.',
    location: 'Near Manaton / Haytor area',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hound_Tor%2C_Manaton_%284148%29.jpg/800px-Hound_Tor%2C_Manaton_%284148%29.jpg',
  },
  {
    name: 'Burrator Reservoir',
    description: 'Beautiful reservoir with easy walks, cycling and views of surrounding tors. Completed in 1898 to supply Plymouth.',
    location: 'South-west Dartmoor, near Yelverton',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Burrator_Reservoir.jpg/800px-Burrator_Reservoir.jpg',
  },
  {
    name: 'Grimspound',
    description: 'Impressive Bronze Age settlement with around 24 hut circles enclosed by a stone wall. One of the best-preserved on the moor.',
    location: 'Near Widecombe-in-the-Moor',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Grimspound.jpg/800px-Grimspound.jpg',
  },
  {
    name: 'Princetown',
    description: 'Highest town in England, home to Dartmoor Prison and the main National Park Visitor Centre with exhibitions and history.',
    location: 'Central Dartmoor',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/North_Hessary.jpg/800px-North_Hessary.jpg',
  },
  {
    name: 'Widecombe-in-the-Moor',
    description: 'Pretty village with the famous church known as the Cathedral of the Moor, pubs and traditional markets.',
    location: 'Eastern Dartmoor',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Widecombe-in-the-Moor.jpg/800px-Widecombe-in-the-Moor.jpg',
  },
];

export default function Attractions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Attractions</h1>
      <p className="text-lg text-slate-700 mb-10">Discover the tors, villages, reservoirs and ancient sites that make Dartmoor unique under bright skies.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {attractions.map((item) => (
          <article key={item.name} className="glass rounded-3xl overflow-hidden card-hover">
            <img src={item.img} alt={item.name} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sky-700 mb-3">{item.name}</h2>
              <p className="text-slate-600 mb-4">{item.description}</p>
              <p className="text-sm font-medium text-sky-600">Location: {item.location}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-8">
        <h3 className="text-xl font-bold text-sky-700 mb-2">Visitor Centres</h3>
        <p className="text-slate-600">Main centres at Princetown, Haytor and Postbridge offer maps, advice and exhibitions. Opening times vary seasonally — check dartmoor.gov.uk for the latest details.</p>
      </div>
    </div>
  );
}