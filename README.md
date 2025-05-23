# 🌤️ Weather App

A React weather app that lets users search for a city and view current weather, daily, and hourly forecasts.

## 🚀 Features

- City search with **autocomplete** using a **Trie** built from a local `cities.json`
- **Debounced** search with animated results via **Framer Motion**.
- Fetches current, daily, and hourly weather using **custom hooks**.

## 🧩 Custom Hooks

- `useCitySearch`: Debounced search in Trie, returns matching cities.
- `useWeatherData`: Fetches and formats weather data based on the city name using `useCallback`.

## 📡 APIs Used

- **Geocoding API** – converts city names to coordinates.
- **Weather API** – returns current weather and forecasts.