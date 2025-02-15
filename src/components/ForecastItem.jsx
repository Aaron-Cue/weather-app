import '../styles/Carrusell.css'

export default function ForecastItem ({ index, hourly, infoDaily, infoHourly, indexItem }) {
  const traslacion = {
    transform:
      index === 0
        ? 'translateX(0px)'
        : `translateX(calc(-${index * 100}% - ${index * 10}px))`
  }

  // GET ONE INFO
  const getOneInfo = (info, index) => {
    const oneInfo = Object.fromEntries(Object.entries(info).map(([key, value]) => [key, value[index]]))
    return oneInfo
  }

  const oneInfoDaily = infoDaily ? getOneInfo(infoDaily, indexItem) : {}

  const oneInfoHourly = infoHourly ? getOneInfo(infoHourly, indexItem) : {}

  return (
    <article className='forecast-item' style={traslacion}>
      <p className='forecast-item--fecha'>{hourly ? oneInfoHourly.hours : oneInfoDaily.days}</p>
      <span className='forecast-item--icon'>😃</span>
      <p className='forecast-item--detalle'>Soleado</p>
      <div className='temperaturas'>
        {hourly
          ? (
            <div className='temp'>{oneInfoHourly.temps}°</div>
            )
          : (
            <>
              <div className='temp-min'>{oneInfoDaily.minTemps}°</div> / <div className='temp-max'>{oneInfoDaily.maxTemps}°</div>
            </>
            )}
      </div>
      <div className='wind'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='lightblue'
          strokeLinecap='round'
          strokeLinejoin='round'
          width='24'
          height='24'
          strokeWidth='2'
        >
          <path d='M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24' />
          <path d='M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24' />
          <path d='M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24' />
        </svg>
        <span>wind</span>
      </div>
      <p className='wind-speed'>{hourly ? oneInfoHourly.windSpeeds : oneInfoDaily.windSpeeds} km/h</p>
    </article>
  )
}
