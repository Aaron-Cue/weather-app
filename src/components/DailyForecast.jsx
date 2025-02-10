import Carrusell from './Carrusell'

export default function DailyForecast () {
  const cantElems = 7

  return (
    <section id='daily-forecast'>
      <h3>Daily</h3>
      <Carrusell cant={cantElems} />
    </section>
  )
}
