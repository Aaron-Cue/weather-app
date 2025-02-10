import '../styles/Carrusell.css'

export default function ForecastItem ({ index }) {
  const traslacion = {
    transform: index === 0 ? 'translateX(0px)' : `translateX(calc(-${index * 100}% - ${index * 10}px))`
  }

  return (
    <div className='forecast-item' style={traslacion}>
      <p className='forecast-item--fecha'>28/02</p>
      <img src='../torment.png' alt='' className='forecast-item--icon' />
      <p className='forecast-item--detalle'>Soleado</p>
      <p className='temperaturas'><div className='temp-min'>20°</div><div className='temp-max'>30°</div></p>
      <div className='wind'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='lightblue' strokeLinecap='round' strokeLinejoin='round' width='24' height='24' strokeWidth='2'>
          <path d='M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24' />
          <path d='M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24' />
          <path d='M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24' />
        </svg>
        <span>wind</span>
      </div>
      <p className='wind-speed'>16km - 30km</p>
    </div>
  )
}
