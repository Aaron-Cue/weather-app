import { useCallback, useEffect, useState } from 'react'
import weatherInfo from '../constants/weatherCodes.js'

export default function useWeather (city) {
  const [infoToday, setInfoToday] = useState({})
  const [infoDaily, setInfoDaily] = useState({})
  const [infoHourly, setInfoHourly] = useState({})

  // funciones para formatear los datos
  const formatDailyData = (daily) => {
    return {
      days: daily.time.map(day => day.slice(5)), // Extrae solo la fecha
      minTemps: daily.temperature_2m_min,
      maxTemps: daily.temperature_2m_max,
      windSpeeds: daily.wind_speed_10m_max,
      dailyStates: daily.weather_code.map(code => ({
        state: weatherInfo[code].description,
        icon: weatherInfo[code].icon
      }))
    }
  }

  const formatHourlyData = (hourly) => {
    const hoursFiltered = hourly.time
      .map(hour => hour.slice(11)) // Extrae solo la hora
      .filter((_, index) => index % 3 === 0) // Cada 3 horas
      .slice(0, 9) // Solo 9 valores

    return {
      hours: hoursFiltered,
      temps: hourly.temperature_2m,
      windSpeeds: hourly.wind_speed_10m,
      // array de objetos con los valores segun weather_code
      hourlyStates: hourly.weather_code.map(code => ({
        state: weatherInfo[code].description,
        icon: weatherInfo[code].icon
      }))
    }
  }

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

      setInfoDaily(formatDailyData(data.daily))
      setInfoHourly(formatHourlyData(data.hourly))
    } catch (error) {
      console.error('error al obtener datos: ', error)
    }
  }, [])

  const fetchCoords = useCallback(async (ciudad) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${ciudad}&format=json`)
      const data = await res.json()

      if (data.length === 0) return

      const { lat, lon, name: cityName } = data[0]
      fetchInfo(Number(lat), Number(lon), cityName)
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
