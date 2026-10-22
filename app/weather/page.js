'use client';

import { useEffect, useState } from 'react';

const LAT = 50.545;
const LON = -3.994;

const weatherCodes = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};

export default function WeatherPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,is_day&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,uv_index_max&timezone=Europe%2FLondon&forecast_days=7`;
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
  const desc = weatherCodes[cur.weather_code] || 'Variable';

  const windDir = (deg) => {
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return dirs[Math.round(deg / 45) % 8];
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-600 to-sun-500 bg-clip-text text-transparent mb-2">Dartmoor Weather</h1>
      <p className="text-slate-600 mb-8">Live conditions for Princetown (central Dartmoor). Weather changes quickly on the moor — always check before heading out and allow extra time.</p>

      <div className="glass rounded-3xl p-8 mb-8 text-center">
        <div className="text-6xl md:text-7xl font-light text-sky-600 mb-2">{Math.round(cur.temperature_2m)}°C</div>
        <div className="text-2xl font-medium mb-1">{desc}</div>
        <div className="text-sm text-slate-500 mb-6">{cur.is_day ? 'Daytime' : 'Nighttime'}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
          <div>Feels like {Math.round(cur.apparent_temperature)}°</div>
          <div>Wind {Math.round(cur.wind_speed_10m)} km/h {windDir(cur.wind_direction_10m)}</div>
          <div>Humidity {cur.relative_humidity_2m}%</div>
          <div>Precip {cur.precipitation} mm</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Haytor%2C_May_2011_2.jpg/1280px-Haytor%2C_May_2011_2.jpg" alt="Haytor on a clear day" className="rounded-3xl w-full h-64 object-cover shadow-lg" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dartmoor_Hound_Tor.jpg/1280px-Dartmoor_Hound_Tor.jpg" alt="Hound Tor landscape" className="rounded-3xl w-full h-64 object-cover shadow-lg" />
      </div>

      <h2 className="text-2xl font-bold text-sky-800 mb-4">Today’s Hourly</h2>
      <div className="overflow-x-auto mb-10">
        <div className="flex gap-3 pb-2">
          {data.hourly.time.slice(0, 12).map((t, i) => (
            <div key={t} className="glass rounded-2xl p-3 min-w-[90px] text-center text-sm">
              <div className="font-medium">{new Date(t).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</div>
              <div className="my-1">{Math.round(data.hourly.temperature_2m[i])}°</div>
              <div className="text-xs text-slate-500">{data.hourly.precipitation_probability[i]}% rain</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-sky-800 mb-4">7-Day Outlook</h2>
      <div className="space-y-3">
        {data.daily.time.slice(0, 7).map((day, i) => (
          <div key={day} className="glass rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="font-medium w-32">{new Date(day).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</span>
            <span className="flex-1">{weatherCodes[data.daily.weather_code[i]] || '—'}</span>
            <span className="font-semibold">{Math.round(data.daily.temperature_2m_min[i])}° / {Math.round(data.daily.temperature_2m_max[i])}°</span>
            <span className="text-sm text-slate-500">{data.daily.precipitation_sum[i]} mm</span>
            <span className="text-xs text-slate-400">UV {Math.round(data.daily.uv_index_max[i] || 0)}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 glass rounded-3xl p-6">
        <h3 className="font-bold text-sky-800 mb-2">Sunrise & Sunset (today)</h3>
        <p className="text-slate-600">Sunrise: {new Date(data.daily.sunrise[0]).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} · Sunset: {new Date(data.daily.sunset[0]).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
        <p className="mt-3 text-sm text-slate-500">Data from Open-Meteo. Always cross-check with the Met Office and check military firing times before visiting the moor.</p>
      </div>
    </div>
  );
}