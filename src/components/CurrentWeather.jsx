import '../styles/CurrentWeather.css'

export default function CurrentWeather ({ info }) {
  return (
    <section id='current-weather'>
      <h2 className='current-weather--city'>{info.cityName}</h2>
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
          {info.currentWind} km/h
        </div>
        <div className='info-extra--type'>
          <p>humidity</p>
          {info.currentHumidity}%
        </div>
        <div className='info-extra--type'>
          <p>apparent temp</p>
          {info.currentApparentTemperature} °C
        </div>
      </div>
    </section>
  )
}
