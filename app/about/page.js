export const metadata = {
  title: 'About Dartmoor | Dartmoor.uk',
  description: 'About Dartmoor National Park – facts, history and practical visitor information.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-6">About Dartmoor</h1>

      <div className="glass rounded-3xl p-8 md:p-10 space-y-6 text-slate-700">
        <p className="text-lg">Dartmoor National Park covers 954 km² (368 square miles) of southern Devon. Designated in 1951, it is the largest open space in southern England and features the highest upland in the region.</p>

        <h2 className="text-2xl font-bold text-sky-700">Key Facts</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Highest point: High Willhays at 621 m (2,039 ft)</li>
          <li>Around 34,500 people live within the park</li>
          <li>Approximately 90% of the land is used for farming</li>
          <li>Semi-wild ponies have been present for thousands of years</li>
          <li>Visitor numbers typically around 3 million per year with significant economic contribution</li>
        </ul>

        <h2 className="text-2xl font-bold text-sky-700">Practical Information</h2>
        <p>The official National Park Authority website is dartmoor.gov.uk — use it for the latest on parking, visitor centres, camping maps and conservation work.</p>
        <p>This site (Dartmoor.uk) is an independent guide aimed at helping visitors plan trips, discover attractions and understand the landscape.</p>

        <h2 className="text-2xl font-bold text-sky-700">Getting There</h2>
        <p>Dartmoor is easily reached from Exeter (about 30–40 minutes) and Plymouth. The A30 and A38 provide main access. Public transport options exist but a car is most convenient for exploring remote areas.</p>

        <h2 className="text-2xl font-bold text-sky-700">Countryside Code</h2>
        <p>Respect the environment, close gates, keep dogs under control, take litter home and leave no trace. The moor is a working landscape of farms, commons and conservation areas.</p>
      </div>
    </div>
  );
}