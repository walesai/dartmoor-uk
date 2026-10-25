export const metadata = {
  title: 'Wildlife | Dartmoor.uk',
  description: 'Dartmoor animal life — ponies, birds, deer and more.',
};

const animals = [
  {
    name: 'Dartmoor Ponies',
    desc: 'The most iconic animals on the moor. Semi-wild herds roam freely year-round. Hardy, sure-footed and adapted to the harsh landscape. Never feed them and always give them space.',
    where: 'Widespread across open moorland, especially around Haytor, Princetown and the high moor.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dartmoor_Ponys.jpg',
  },
  {
    name: 'Birds of Prey',
    desc: 'Buzzards are common and often seen soaring. You may also spot kestrels, peregrines and, in the right season, hen harriers or merlins over the high ground.',
    where: 'Open moor and tors. Early morning or late afternoon is best.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/%D0%A1ommon_buzzard_%28Buteo_buteo%29_in_flight.jpg',
  },
  {
    name: 'Red Deer',
    desc: 'The largest land mammal in Britain. Small numbers live on Dartmoor. Best seen at dawn or dusk in quieter areas of the high moor.',
    where: 'Remote northern and central moor. Stay quiet and keep your distance.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red_Deer_Cervus_Elaphus_Richmond_Park_2025_01.jpg/960px-Red_Deer_Cervus_Elaphus_Richmond_Park_2025_01.jpg',
  },
  {
    name: 'Skylarks & Meadow Birds',
    desc: 'In spring and summer the moor is alive with skylarks singing high above the heather. Also look for meadow pipits, stonechats and wheatears.',
    where: 'Heather and grassland areas, especially on clear sunny days.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/58/S%C3%A5ngl%C3%A4rka%2C_Alauda_arvensis%2C_Eurasian_skylark.jpg',
  },
  {
    name: 'Butterflies & Insects',
    desc: 'Dartmoor is important for rare butterflies such as the high brown fritillary and pearl-bordered fritillary. Summer is the best time.',
    where: 'Bracken slopes, woodland edges and flower-rich grasslands.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pearl-bordered_Fritillary.jpg/800px-Pearl-bordered_Fritillary.jpg',
  },
];

export default function Wildlife() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Dartmoor Wildlife</h1>
      <p className="text-lg text-slate-700 mb-10">From free-roaming ponies to soaring buzzards and rare butterflies — the moor is full of life. Images are real photographs.</p>

      <div className="space-y-8">
        {animals.map((a) => (
          <article key={a.name} className="glass rounded-3xl overflow-hidden card-hover">
            <div className="bg-slate-100 flex items-center justify-center">
              <img src={a.img} alt={a.name} className="w-full max-h-96 object-contain" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-sky-700 mb-2">{a.name}</h2>
              <p className="text-slate-600 mb-3">{a.desc}</p>
              <p className="text-sm font-medium text-sky-600">Where to look: {a.where}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-8">
        <h3 className="text-xl font-bold text-sky-800 mb-2">Wildlife watching tips</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Early morning and late evening are best</li>
          <li>Move quietly and keep your distance</li>
          <li>Never feed the ponies</li>
          <li>Binoculars help for birds and deer</li>
          <li>Check the weather — wildlife is more active on calmer days</li>
        </ul>
      </div>
    </div>
  );
}