import Buscador from './components/Buscador'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import CurrentWeather from './components/CurrentWeather'
import useWeather from './hooks/useWeather.js'
import { useState } from 'react'

function App () {
  const [city, setCity] = useState('buenos aires')
  const { infoToday, infoDaily, infoHourly } = useWeather(city)

  if (Object.keys(infoToday).length === 0 || Object.keys(infoDaily).length === 0 || Object.keys(infoHourly).length === 0) {
    return (
      <>
        <header>
          <h1>Weather App</h1>
          <Buscador setCity={setCity} />
        </header>
        <h2 className='charge'>Cargando...</h2>
      </>
    )
  }

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
