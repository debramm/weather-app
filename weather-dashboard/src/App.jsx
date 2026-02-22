import { useEffect } from 'react'
import { useWeatherStore } from './store/weatherStore.js'
import SearchBar from './components/SearchBar.jsx'
import './App.css'

export default function App() {
  const { weather, loading, error, city, fetchWeather } = useWeatherStore()

  useEffect(() => {
    if (!city) return
    const interval = setInterval(() => {
      fetchWeather(city).catch(() => {})
    }, 300000)
    return () => clearInterval(interval)
  }, [city, fetchWeather])

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-50 px-4 pt-20">
      <div className="flex flex-col items-center mb-12">
        <span className="text-5xl mb-2">🌤</span>
        <h1 className="text-4xl font-bold mb-1">Weather Buddy</h1>
        <p className="text-gray-600 italic text-sm">
          your friendly weather companion ☁️
        </p>
      </div>

      <SearchBar />
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
      <RefreshButton />
    </div>
  )
}
