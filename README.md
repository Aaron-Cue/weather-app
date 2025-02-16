# Weather App 🌤️  

A weather application built with React that allows searching for a city and retrieving its current weather, the daily forecast for the week, and the hourly forecast for the day.  

## 🚀 Features  

- Retrieves coordinates based on the city name.  
- Fetches current weather and forecasts using coordinates.  
- Uses a custom hook for API calls and response management.  
- Optimized with `useCallback` and `useMemo` to prevent unnecessary renders.  

## 📡 APIs Used  

- **Coordinates API**: Converts a city name into latitude and longitude.  
- **Weather API**: Retrieves current weather and forecasts based on coordinates.