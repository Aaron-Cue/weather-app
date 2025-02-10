import { useState, useRef } from 'react'
import '../styles/Buscador.css'

export default function Buscador () {

  const searchRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }

  return (
    <form action='get' className='buscador' onSubmit={(e) => handleSubmit(e)}>
      <input type='text' ref={searchRef} placeholder='London, Madrid, Rome' className='input-buscador' />
      <button type='submit' className='btn-buscador'>Search</button>
    </form>
  )
}
