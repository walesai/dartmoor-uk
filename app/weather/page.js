'use client';

import { useEffect, useState } from 'react';

const LAT = 50.545;
const LON = -3.994;

export default function WeatherPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset&timezone=Europe%2FLondon&forecast_days=7`;
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-600">Loading Dartmoor weather...</div>;
  if (!data) return <div className="max-w-4xl mx-auto px-4 py-16 text-center">Unable to load weather. Try again later.</div>;

  const cur = data.current;
  const codes = {
    0: 'Clear sky ☀️', 1: 'Mainly clear 🌤️', 2: 'Partly cloudy ⛅', 3: 'Overcast ☁️',
    45: 'Fog 🌫️', 51: 'Light drizzle 🌦️', 61: 'Rain 🌧️', 71: 'Snow ❄️', 95: 'Thunderstorm ⛈️'
  };
  const desc = codes[cur.weather_code] || 'Variable';

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-2">Dartmoor Weather</h1>
      <p className="text-slate-600 mb-8">Live conditions for Princetown (central Dartmoor) via Open-Meteo. Weather changes quickly on the moor — always check before heading out.</p>

      <div className="glass rounded-3xl p-8 mb-8 text-center">
        <div className="text-6xl md:text-7xl font-light text-sky-600 mb-2">{Math.round(cur.temperature_2m)}°C</div>
        <div className="text-2xl font-medium mb-4">{desc}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
          <div>Feels like {Math.round(cur.apparent_temperature)}°</div>
          <div>Wind {Math.round(cur.wind_speed_10m)} km/h</div>
          <div>Humidity {cur.relative_humidity_2m}%</div>
          <div>Precip {cur.precipitation} mm</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/1280px-Haytor%2C_May_2011_2.jpg" alt="Haytor sunny view" className="rounded-3xl w-full h-64 object-cover shadow-lg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/View_to_Sharpitor_from_Meavy.JPG/1280px-View_to_Sharpitor_from_Meavy.JPG" alt="Dartmoor landscape" className="rounded-3xl w-full h-64 object-cover shadow-lg" />
      </div>

      <h2 className="text-2xl font-bold text-sky-800 mb-4">7-Day Outlook</h2>
      <div className="space-y-3">
        {data.daily.time.slice(0, 7).map((day, i) => (
          <div key={day} className="glass rounded-2xl p-4 flex items-center justify-between">
            <span className="font-medium">{new Date(day).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
            <span>{codes[data.daily.weather_code[i]] || '—'}</span>
            <span className="font-semibold">{Math.round(data.daily.temperature_2m_min[i])}° / {Math.round(data.daily.temperature_2m_max[i])}°</span>
            <span className="text-sm text-slate-500">{data.daily.precipitation_sum[i]} mm</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-500 text-center">Data from Open-Meteo. Not a substitute for official forecasts. Check Met Office and firing times before visiting.</p>
    </div>
  );
}