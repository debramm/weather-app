const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export async function fetchCurrentWeather(city) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  if (!apiKey) throw new Error('Missing API key')

  const url = `${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`
  const res = await fetch(url)
  const data = await res.json()

  if (!res.ok) throw new Error(data.message || 'City not found')

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  }
}
