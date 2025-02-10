import Carrusell from './Carrusell'

export default function HourlyForecast () {
  const cantElems = 8

  return (
    <section id='hourly-forecast'>
      <h3>Hourly</h3>
      <Carrusell cant={cantElems} />
    </section>
  )
}
