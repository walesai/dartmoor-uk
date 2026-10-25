'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../../components/MapView'), { ssr: false });

const places = [
  { name: 'Haytor', lat: 50.577, lng: -3.756, type: 'Tor', desc: 'Iconic granite tor with panoramic views' },
  { name: 'Hound Tor', lat: 50.593, lng: -3.779, type: 'Tor', desc: 'Dramatic rocks and medieval village remains' },
  { name: 'Burrator Reservoir', lat: 50.495, lng: -4.000, type: 'Reservoir', desc: 'Scenic walks and cycling' },
  { name: 'Grimspound', lat: 50.612, lng: -3.832, type: 'History', desc: 'Bronze Age settlement' },
  { name: 'Princetown', lat: 50.545, lng: -3.994, type: 'Village', desc: 'Visitor centre and highest town in England' },
  { name: 'Widecombe-in-the-Moor', lat: 50.578, lng: -3.812, type: 'Village', desc: 'Cathedral of the Moor' },
];

export default function MapPage() {
  const [hours, setHours] = useState('half');
  const [interest, setInterest] = useState('views');
  const [suggestion, setSuggestion] = useState('');

  const generateItinerary = () => {
    if (hours === 'half' && interest === 'views') {
      setSuggestion('Haytor → Hound Tor circular (about 2–3 hours). Start at Haytor car park, enjoy the tor, walk to Hound Tor for the medieval village, return via moorland tracks.');
    } else if (hours === 'full' && interest === 'history') {
      setSuggestion('Princetown visitor centre → Grimspound → Widecombe. Full day exploring ancient sites and villages with lunch in Widecombe.');
    } else if (interest === 'easy') {
      setSuggestion('Burrator Reservoir circuit (flat and scenic, 2–3 hours). Perfect for families or a relaxed day.');
    } else {
      setSuggestion('Haytor area in the morning, then Burrator in the afternoon. Mix of classic tors and water views.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Interactive Map</h1>
      <p className="text-lg text-slate-700 mb-8">Explore key places on Dartmoor. Click markers for details.</p>

      <div className="glass rounded-3xl overflow-hidden mb-10" style={{ height: '500px' }}>
        <MapView places={places} />
      </div>

      <div className="glass rounded-3xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Simple Itinerary Builder</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Time available</label>
            <select value={hours} onChange={(e) => setHours(e.target.value)} className="w-full p-3 rounded-2xl border">
              <option value="half">Half day</option>
              <option value="full">Full day</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Main interest</label>
            <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full p-3 rounded-2xl border">
              <option value="views">Scenic views / tors</option>
              <option value="history">History & ancient sites</option>
              <option value="easy">Easy / family friendly</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button onClick={generateItinerary} className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 rounded-2xl font-semibold">
              Suggest route
            </button>
          </div>
        </div>
        {suggestion && (
          <div className="bg-sky-50 rounded-2xl p-4 text-slate-700">
            <strong>Suggestion:</strong> {suggestion}
          </div>
        )}
      </div>
    </div>
  );
}