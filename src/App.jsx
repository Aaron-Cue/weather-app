import Buscador from './components/Buscador'
import DailyForecast from './components/DailyForecast'
import HourlyForecast from './components/HourlyForecast'
import CurrentWeather from './components/CurrentWeather'

function App () {
  return (
    <>
      <header>
        <h1>Weather App</h1>
        <Buscador />
      </header>
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </>
  )
}

export default App
