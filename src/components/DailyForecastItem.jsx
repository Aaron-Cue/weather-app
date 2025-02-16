export default function DailyForecastItem ({ infoDaily }) {
  if (!infoDaily || !infoDaily.dailyStates) return
  return (
    <>
      <p className='forecast-item--fecha'>{infoDaily.days}</p>
      <span className='forecast-item--icon'>{infoDaily.dailyStates.icon}</span>
      <p className='forecast-item--detalle'>{infoDaily.dailyStates.state}</p>
      <div className='temperaturas'>

        <div className='temp-min'>{infoDaily.minTemps}°</div> / <div className='temp-max'>{infoDaily.maxTemps}°</div>

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
      <p className='wind-speed'>{infoDaily.windSpeeds} km/h</p>
    </>
  )
}
