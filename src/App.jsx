import Buscador from './components/Buscador'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import CurrentWeather from './components/CurrentWeather'
import useWeather from './hooks/useWeather.js'
import { useState } from 'react'

function App () {
  const [city, setCity] = useState('buenos aires')
  const { infoToday, infoDaily, infoHourly } = useWeather(city)

  return (
    <>
      <header>
        <h1>Weather App</h1>
        <Buscador setCity={setCity} />
      </header>
      <CurrentWeather info={infoToday} />
      <DailyForecast info={infoDaily} />
      <HourlyForecast info={infoHourly} />
    </>
  )
}

export default App
