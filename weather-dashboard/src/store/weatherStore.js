import { create } from 'zustand'
import { fetchCurrentWeather } from '../services/weatherAPI.js'

export const useWeatherStore = create((set, get) => ({
  city: '',
  weather: null,
  loading: false,
  error: null,
  lastUpdated: null,

  setCity: (city) => set({ city }),

  fetchWeather: async (cityName) => {
    const city = cityName || get().city
    if (!city) return
    set({ loading: true, error: null })
    try {
      const data = await fetchCurrentWeather(city)
      set({ weather: data, city: data.city, lastUpdated: new Date() })
    } catch (err) {
      set({ error: err.message })
    } finally {
      set({ loading: false })
    }
  },

  clearError: () => set({ error: null }),
}))
