import { useCallback, useEffect, useState } from 'react'
import weatherInfo from '../constants/weatherCodes.js'

export default function useWeather (city) {
  const [infoToday, setInfoToday] = useState({})
  const [infoDaily, setInfoDaily] = useState({})
  const [infoHourly, setInfoHourly] = useState({})

  const fetchInfo = useCallback(async (lat, lon, cityName) => {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=America%2FSao_Paulo`)
      const data = await res.json()

      setInfoToday({
        cityName,
        currentTemp: data.current.temperature_2m,
        currentWind: data.current.wind_speed_10m,
        currentHumidity: data.current.relative_humidity_2m,
        currentApparentTemperature: data.current.apparent_temperature,
        currentState: weatherInfo[data.current.weather_code].description,
        currentStateIcon: weatherInfo[data.current.weather_code].icon
      })

      setInfoDaily({
        days: data.daily.time,
        minTemps: data.daily.temperature_2m_min,
        maxTemps: data.daily.temperature_2m_max,
        windSpeeds: data.daily.wind_speed_10m_max,
        dailyStates: data.daily.weather_code
      })

      setInfoHourly({
        hours: data.hourly.time,
        temps: data.hourly.temperature_2m,
        windSpeeds: data.hourly.wind_speed_10m,
        hourlyStates: data.hourly.weather_code
      })
    } catch (error) {
      console.error('error al obtener datos: ', error)
    }
  }, [])

  const fetchCoords = useCallback(async (ciudad) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${ciudad}&format=json`)
      const data = await res.json()

      if (!data) return

      const lat = Number(data[0].lat)
      const lon = Number(data[0].lon)
      const cityName = data[0].name
      fetchInfo(lat, lon, cityName)
    } catch (error) {
      console.error('Error al obtener coordenadas: ', error)
    }
  }, [fetchInfo])

  useEffect(() => {
    if (!city) return

    fetchCoords(city)
  }, [city, fetchCoords])

  return { infoToday, infoDaily, infoHourly }
}
