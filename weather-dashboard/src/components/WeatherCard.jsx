export default function WeatherCard({ weather }) {
  if (!weather) return null

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 text-center w-full max-w-xl mt-6">
      <h2 className="text-2xl font-bold">
        {weather.city}, {weather.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.condition}
        className="mx-auto"
      />

      <p className="text-5xl font-bold">{Math.round(weather.temperature)}°C</p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>🌬 Wind: {weather.windSpeed} km/h</p>
      </div>
    </div>
  )
}

