import '../styles/CurrentWeather.css'

export default function CurrentWeather () {
  return (
    <section id='current-weather'>
      <h2 className='current-weather--city'>name city <span>pais</span></h2>
      <div className='current-weather--info'>
        <img src='../torment.png' alt='icon current weather' />
        <div className='temp'>28 <div>°</div></div>
      </div>
      <p className='weather-state'>Clear</p>
      <div className='info-extra'><div className='info-extra--type'>info-extra</div>
        <div className='info-extra--type'>info-extra</div>
        <div className='info-extra--type'>info-extra</div>
      </div>
    </section>
  )
}
