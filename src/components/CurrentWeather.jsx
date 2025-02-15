import '../styles/CurrentWeather.css'

export default function CurrentWeather ({ cityName, info }) {
  return (
    <section id='current-weather'>
      <h2 className='current-weather--city'>{cityName}</h2>
      <div className='current-weather--info'>
        <div className='current-weather--icon'>
          {info.currentStateIcon}
        </div>
        <div className='temp'>
          <div className='unit-current-temp'>{info.currentTemp}° <span>C</span></div>
        </div>
      </div>
      <p className='weather-state'>{info.currentState}</p>
      <div className='info-extra'>
        <div className='info-extra--type'>
          <p>wine speed</p>
          {info.currentWine || 10} km/h
        </div>
        <div className='info-extra--type'>
          <p>humidity</p>
          {info.currentHumidity || 10}%
        </div>
        <div className='info-extra--type'>
          <p>apparent temperature</p>
          {info.currentApparentTemperature || 10} °C
        </div>
      </div>
    </section>
  )
}
