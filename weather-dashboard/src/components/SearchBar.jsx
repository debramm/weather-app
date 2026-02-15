import { useState } from 'react'
import { useWeatherStore } from '../store/weatherStore.js'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const { fetchWeather, setCity, clearError, loading } = useWeatherStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    clearError()
    setCity(input)
    fetchWeather(input)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md bg-white shadow-lg rounded-full overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search any city ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-6 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-sky-300 text-white px-6 py-4 hover:bg-sky-100"
        disabled={loading}
      >
        Search 🔍
      </button>
    </form>
  )
}
