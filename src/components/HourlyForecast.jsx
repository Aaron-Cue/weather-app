import Carrusell from './Carrusell'

export default function HourlyForecast ({ info }) {
  const cantElems = 8
  const hourly = true

  return (
    <section id='hourly-forecast'>
      <h3>Hourly</h3>
      <Carrusell cant={cantElems} hourly={hourly} infoHourly={info} />
    </section>
  )
}
