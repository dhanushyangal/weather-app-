import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const cities = {
    tirupathi: { name: 'Tirupathi', temp: 28, desc: 'Partly cloudy', hum: 65, wind: 3.5 },
    tirupati: { name: 'Tirupati', temp: 28, desc: 'Partly cloudy', hum: 65, wind: 3.5 },
    delhi: { name: 'Delhi', temp: 35, desc: 'Clear sky', hum: 45, wind: 4.2 },
    mumbai: { name: 'Mumbai', temp: 30, desc: 'Humid', hum: 80, wind: 5.1 },
    bangalore: { name: 'Bangalore', temp: 25, desc: 'Pleasant', hum: 60, wind: 2.8 },
  };

  const getWeather = () => {
    if (!city) return;
    setWeather(cities[city.toLowerCase()] || { name: city, temp: 25, desc: 'Sunny', hum: 50, wind: 3 });
  };

  return (
    <div className="app">
      <h1>🌈 Weather App</h1>
      <div className="box">
        <input
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
        />
        <button onClick={getWeather}>GO</button>
      </div>

      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <div className="temp">{weather.temp}°</div>
          <p>{weather.desc}</p>
          <div className="info">
            <span>💧 {weather.hum}%</span>
            <span>💨 {weather.wind} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
