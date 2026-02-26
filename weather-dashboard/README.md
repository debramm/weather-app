
#  Weather Dashboard

A responsive and interactive Weather Dashboard built with React JS, Zustand , Axios, and Tailwind CSS.  
The application allows users to search for real-time weather conditions in various cities using the OpenWeatherMap API.


##  Project Structure
weather-dashboard/
│
├── index.html
├── vite.config.js
├── package.json
├── .env
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Loading.jsx
│   │   └── RefreshButton.jsx
│
│   ├── store/
│   │   └── weatherStore.js
│
│   └── services/
│       └── weatherAPI.js
## Features

###  City Search
- Search for any city worldwide.
- Fetch and display real-time weather data.

### Weather Information Displayed
- Current Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)
- Weather Condition Icon

###  Loading State
- Displays a loading message while fetching data.

###  Error Handling
- User-friendly error messages for:
  - Invalid city names
  - Network errors
  - API issues

###  Responsive Design
- Mobile-first layout
- Optimized for tablet and desktop screens
- Built with Tailwind CSS
- Smooth hover and transition effects

###  Real-Time Updates
- Automatically refreshes weather data every few minutes.
- Optional manual refresh functionality.

---

## Tech Stack

- React JS (Vite)
- Zustand (State Management)
- Axios (API Requests)
- Tailwind CSS (Styling)
- OpenWeatherMap API

##  Author

Debra Mugwe
Frontend  
Capstone Project – Weather Dashboard