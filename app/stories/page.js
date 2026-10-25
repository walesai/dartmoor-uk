export const metadata = {
  title: 'Stories | Dartmoor.uk',
  description: 'Stories, history and wildlife of Dartmoor National Park.',
};

const stories = [
  {
    title: 'The Ponies of the Moor',
    excerpt: 'Semi-wild Dartmoor ponies have lived here for thousands of years. Hardy, sure-footed and iconic, they roam freely across the open moorland.',
    body: 'Dartmoor ponies are one of the most recognisable sights on the moor. Descended from ancient stock, they are tough enough to survive harsh winters and summers on the exposed granite landscape. Visitors are asked never to feed them and to give them plenty of space.',
  },
  {
    title: 'Bronze Age Settlements',
    excerpt: 'Sites like Grimspound show that people have lived and farmed on Dartmoor for over 3,000 years.',
    body: 'The high moor is dotted with hut circles, stone rows and enclosures. Grimspound is one of the best preserved — a large circular enclosure with the remains of about 24 roundhouses. Standing among the stones on a clear day gives a powerful sense of deep history.',
  },
  {
    title: 'Princetown and the Prison',
    excerpt: 'The highest town in England grew up around the prison built for French prisoners during the Napoleonic Wars.',
    body: 'Princetown sits at over 1,400 feet. The prison, still in use, dominates the town. The National Park Visitor Centre is based here and is an excellent starting point for understanding the landscape, wildlife and history of Dartmoor.',
  },
  {
    title: 'Wistman’s Wood',
    excerpt: 'A small, ancient oak woodland that feels almost otherworldly.',
    body: 'Wistman’s Wood is a rare fragment of high-altitude oak woodland. The stunted, moss-covered trees grow among granite boulders and have long been associated with folklore. It is a short walk from the road near Two Bridges and well worth the detour on a still day.',
  },
  {
    title: 'The Clapper Bridges',
    excerpt: 'Simple stone bridges that have crossed the Dart for centuries.',
    body: 'Postbridge has the best-known clapper bridge — huge granite slabs laid across the river. These ancient structures once carried packhorses and people across the moor. Standing on or beside them is a quiet reminder of how people moved through this landscape long before modern roads.',
  },
  {
    title: 'Military Training on the Moor',
    excerpt: 'Large areas of northern Dartmoor are still used for live firing.',
    body: 'The Ministry of Defence has trained on Dartmoor for generations. Red flags fly when ranges are active, and certain areas are closed. Always check the official firing times before heading onto the high moor — it keeps both visitors and training safe.',
  },
];

export default function Stories() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Dartmoor Stories</h1>
      <p className="text-lg text-slate-700 mb-10">More depth behind the places, wildlife and history of the moor.</p>

      <div className="space-y-8">
        {stories.map((s) => (
          <article key={s.title} className="glass rounded-3xl p-8 card-hover">
            <h2 className="text-2xl font-bold text-sky-800 mb-2">{s.title}</h2>
            <p className="text-slate-600 italic mb-4">{s.excerpt}</p>
            <p className="text-slate-700">{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}