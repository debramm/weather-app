import { useWeatherStore } from '../store/weatherStore'

export default function RefreshButton() {
  const { city, fetchWeather, loading } = useWeatherStore()

  if (!city) return null

  return (
    <button
      onClick={() => fetchWeather(city)}
      disabled={loading}
      className="mt-4 px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
    >
      🔄 Refresh
    </button>
  )
}
