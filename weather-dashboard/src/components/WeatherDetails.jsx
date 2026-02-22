export default function WeatherDetails({ data }) {
  if (!data) return null

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-white p-4 rounded-xl shadow">💧 {data.humidity}%</div>
      <div className="bg-white p-4 rounded-xl shadow">🌬 {data.windSpeed} m/s</div>
    </div>
  )
}
