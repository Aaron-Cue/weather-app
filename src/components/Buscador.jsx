import { useRef } from 'react'
import '../styles/Buscador.css'

export default function Buscador ({ setCity }) {
  const searchRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(searchRef.current.value)
  }

  return (
    <form action='get' className='buscador' onSubmit={(e) => handleSubmit(e)}>
      <input type='text' ref={searchRef} placeholder='London, Paris, Rome' className='input-buscador' />
      <button type='submit' className='btn-buscador'>Search</button>
    </form>
  )
}
