import { useEffect, useState } from 'react'
import '../styles/Carrusell.css'
import ForecastItem from './ForecastItem'

export default function Carrusell ({ cant }) {
  // devuelve la cantidad de elementos visibles en el carrusell dependiendo del ancho de la pantalla
  const getVisibleElems = (width) => {
    if (width <= 600) return 1
    if (width <= 705) return 2
    if (width <= 1055) return 3
    if (width <= 1305) return 4
    return 5
  }

  const [visibleElems, setVisibleElems] = useState(getVisibleElems(window.innerWidth))
  const maxIndex = cant - visibleElems

  const [indexItem, setIndexItem] = useState(0)

  const handlePrevClick = () => {
    if (indexItem > 0) setIndexItem(indexItem - 1)
  }
  const handleNextClick = () => {
    if (indexItem < maxIndex) setIndexItem(indexItem + 1)
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleElems(getVisibleElems(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='carrusell'>
      <button className='btn-prev' onClick={handlePrevClick} />
      <div className='carrusell-content'>
        {Array.from({ length: cant }, (_, i) => (
          <ForecastItem key={i} index={indexItem} />
        ))}
      </div>
      <button className='btn-next' onClick={handleNextClick} />
    </div>
  )
}
