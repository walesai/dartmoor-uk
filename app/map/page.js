'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../../components/MapView'), { ssr: false });

const places = [
  { name: 'Haytor', lat: 50.577, lng: -3.756, type: 'Tor', desc: 'Iconic granite tor with panoramic views' },
  { name: 'Hound Tor', lat: 50.593, lng: -3.779, type: 'Tor', desc: 'Dramatic rocks and medieval village remains' },
  { name: 'Burrator Reservoir', lat: 50.495, lng: -4.000, type: 'Reservoir', desc: 'Scenic walks and cycling' },
  { name: 'Grimspound', lat: 50.612, lng: -3.832, type: 'History', desc: 'Bronze Age settlement' },
  { name: 'Princetown', lat: 50.545, lng: -3.994, type: 'Village', desc: 'Visitor centre and highest town in England' },
  { name: 'Widecombe-in-the-Moor', lat: 50.578, lng: -3.812, type: 'Village', desc: 'Cathedral of the Moor' },
  { name: 'Postbridge', lat: 50.613, lng: -3.905, type: 'Village', desc: 'Clapper bridge and central moor gateway' },
  { name: 'Bellever Tor', lat: 50.588, lng: -3.912, type: 'Tor', desc: 'Wooded tor with fine views' },
  { name: 'Sharpitor', lat: 50.508, lng: -4.040, type: 'Tor', desc: 'Dramatic western edge views' },
  { name: 'Wistman’s Wood', lat: 50.578, lng: -3.963, type: 'Woodland', desc: 'Ancient stunted oak woodland' },
  { name: 'Two Bridges', lat: 50.553, lng: -3.963, type: 'Village', desc: 'Crossroads and historic hotel' },
  { name: 'Hexworthy', lat: 50.535, lng: -3.895, type: 'Village', desc: 'Quiet southern moor village' },
  { name: 'Dartmeet', lat: 50.558, lng: -3.878, type: 'Viewpoint', desc: 'Where East and West Dart meet' },
  { name: 'Vixen Tor', lat: 50.542, lng: -4.078, type: 'Tor', desc: 'Distinctive western tor' },
];

export default function MapPage() {
  const [hours, setHours] = useState('half');
  const [interest, setInterest] = useState('views');
  const [suggestion, setSuggestion] = useState('');

  const generateItinerary = () => {
    const options = {
      'half-views': 'Morning at Haytor (climb the tor), short walk to Hound Tor and the medieval village ruins, then back. About 2.5–3 hours. Excellent light on the granite.',
      'half-history': 'Drive to Grimspound, explore the Bronze Age huts (45–60 min), then continue to Widecombe for the church and a coffee. Half-day history focus.',
      'half-easy': 'Burrator Reservoir full circuit (flat paths, 2–3 hours). Stop at the dam for photos. Ideal with children or for a relaxed pace.',
      'half-mixed': 'Haytor in the morning, then a short drive to Burrator for an afternoon lakeside walk. Best of tors and water.',
      'full-views': 'Start at Haytor → Hound Tor → drive to Bellever Tor → finish at Postbridge clapper bridge. Full day of classic tors and open moor.',
      'full-history': 'Princetown Visitor Centre first, then Grimspound, then Wistman’s Wood (ancient oaks), ending at Two Bridges. Deep history day.',
      'full-easy': 'Burrator in the morning, picnic, then a gentle loop near Princetown or Widecombe. Keep it low-stress with plenty of stops.',
      'full-mixed': 'Haytor and Hound Tor morning, lunch in Widecombe, afternoon at Burrator or Dartmeet. Balanced and scenic.',
    };
    const key = `${hours}-${interest}`;
    setSuggestion(options[key] || options['half-mixed']);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-4">Interactive Map</h1>
      <p className="text-lg text-slate-700 mb-8">Explore more of Dartmoor — tors, villages, reservoirs and ancient sites. Click markers for details.</p>

      <div className="glass rounded-3xl overflow-hidden mb-10" style={{ height: '520px' }}>
        <MapView places={places} />
      </div>

      <div className="glass rounded-3xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-sky-800 mb-4">Itinerary Builder</h2>
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
          <div className="bg-sky-50 rounded-2xl p-5 text-slate-700 leading-relaxed">
            <strong>Suggested itinerary:</strong><br />{suggestion}
          </div>
        )}
      </div>
    </div>
  );
}