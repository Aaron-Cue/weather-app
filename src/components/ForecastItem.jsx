import '../styles/Carrusell.css'
import { getInfoByIndex } from '../utils/getInfoByIndex.js'
import DailyForecastItem from './DailyForecastItem.jsx'
import HourlyForecastItem from './HourlyForecastItem.jsx'

export default function ForecastItem ({ index, hourly, infoDaily, infoHourly, indexItem }) {
  const traslacion = {
    transform:
      index === 0
        ? 'translateX(0px)'
        : `translateX(calc(-${index * 100}% - ${index * 10}px))`
  }

  const oneInfoDaily = infoDaily ? getInfoByIndex(infoDaily, indexItem) : {}
  const oneInfoHourly = infoHourly ? getInfoByIndex(infoHourly, indexItem) : {}

  return (
    <article className='forecast-item' style={traslacion}>
      {hourly ? <HourlyForecastItem infoHourly={oneInfoHourly} /> : <DailyForecastItem infoDaily={oneInfoDaily} />}
    </article>
  )
}
