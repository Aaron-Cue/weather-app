import Carrusell from './Carrusell'

export default function DailyForecast ({ info }) {
  return (
    <section id='daily-forecast'>
      <h3>Daily</h3>
      <Carrusell cant={7} hourly={false} infoDaily={info} />
    </section>
  )
}
