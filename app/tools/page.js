'use client';

import { useEffect, useState } from 'react';

export default function ToolsPage() {
  const [golden, setGolden] = useState(null);

  useEffect(() => {
    // Simple golden hour approximation for Princetown area (sunset ~ variable)
    const now = new Date();
    const month = now.getMonth();
    // Rough sunset hours for Devon (approximate)
    const sunsetHour = [16, 17, 18, 19, 20, 21, 21, 20, 19, 18, 16, 16][month];
    const goldenStart = sunsetHour - 1;
    setGolden(`${goldenStart}:00 – ${sunsetHour}:30 (approx)`);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Practical Tools</h1>
      <p className="text-lg text-slate-700 mb-10">Useful information before you head out onto the moor.</p>

      <div className="space-y-6">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-3">Military Firing Times</h2>
          <p className="text-slate-600 mb-4">
            Large parts of northern Dartmoor are used for military training. Always check live firing times before visiting the high moor.
          </p>
          <a
            href="https://www.dartmoor.gov.uk/enjoy-dartmoor/planning-your-visit/military-firing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-sky-700"
          >
            Check official firing times →
          </a>
        </div>

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-3">Golden Hour (approx)</h2>
          <p className="text-slate-600 mb-2">Best light for photography around Princetown today:</p>
          <p className="text-xl font-semibold text-sky-700">{golden || 'Calculating...'}</p>
          <p className="text-sm text-slate-500 mt-2">Approximate. For exact times use the Weather page sunrise/sunset.</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-3">Before You Go Checklist</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Check weather and firing times</li>
            <li>Take map, compass or offline GPS</li>
            <li>Wear layers and waterproofs</li>
            <li>Tell someone your route</li>
            <li>Leave no trace</li>
          </ul>
        </div>
      </div>
    </div>
  );
}