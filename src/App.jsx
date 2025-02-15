import Buscador from './components/Buscador'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import CurrentWeather from './components/CurrentWeather'
import { useEffect, useState } from 'react'
import weatherInfo from './constants/weatherCodes.js'

function App () {
  const [city, setCity] = useState('')
  const [cityName, setCityName] = useState('')
  const [infoToday, setInfoToday] = useState({})

  useEffect(() => {
    if (!city) return

    fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`)
      .then(res => res.json())
      .then(data => {
        const lat = Number(data[0].lat)
        const lon = Number(data[0].lon)
        setCityName(data[0].name)

        // separar
        // codigo estado(para estado e icon) actual, temp actual, extras: velocidad viento actual, humedad, precipitacion, sensacion termica todo actual
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=America%2FSao_Paulo`)
          .then(res => res.json())
          .then(data => {

            const weatherCode = data.current.weather_code

            const currentInfo = {
              currentTemp: data.current.temperature_2m,
              currentWine: data.current.wind_speed_10m,
              currentHumidity: data.current.relative_humidity_2m,
              currentApparentTemperature: data.current.apparent_temperature,
              currentState: weatherInfo.weatherCode.description,
              currentStateIcon: weatherInfo.weatherCode.icon
            }
            setInfoToday(currentInfo)
          })
      })
  }, [city])

  // console.log(lat)

  return (
    <>
      <header>
        <h1>Weather App</h1>
        <Buscador setCity={setCity} />
      </header>
      <CurrentWeather cityName={cityName} info={infoToday} />
      <DailyForecast />
      <HourlyForecast />
    </>
  )
}

export default App
