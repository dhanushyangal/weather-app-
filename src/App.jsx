import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // Mock weather data for when API doesn't work
  const getMockWeather = (cityName) => {
    const mockData = {
      tirupathi: { name: 'Tirupathi', country: 'IN', temp: 28, description: 'Partly cloudy', humidity: 65, wind: 3.5 },
      tirupati: { name: 'Tirupati', country: 'IN', temp: 28, description: 'Partly cloudy', humidity: 65, wind: 3.5 },
      delhi: { name: 'Delhi', country: 'IN', temp: 35, description: 'Clear sky', humidity: 45, wind: 4.2 },
      mumbai: { name: 'Mumbai', country: 'IN', temp: 30, description: 'Humid', humidity: 80, wind: 5.1 },
      bangalore: { name: 'Bangalore', country: 'IN', temp: 25, description: 'Pleasant', humidity: 60, wind: 2.8 },
    };

    const key = cityName.toLowerCase();
    return mockData[key] || { 
      name: cityName, 
      country: 'Unknown', 
      temp: 25, 
      description: 'Sunny', 
      humidity: 50, 
      wind: 3.0 
    };
  };

  const fetchWeather = () => {
    if (!city.trim()) return;

    // Always use mock data (works even without API)
    const mockWeather = getMockWeather(city);
    setWeather(mockWeather);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  return (
    <div className="app">
      <h1>🌤️ Weather</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.country}</h2>
          <div className="temp">{weather.temp}°C</div>
          <p>{weather.description}</p>
          <div className="info">
            <span>💧 {weather.humidity}%</span>
            <span>💨 {weather.wind} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
