import { useState } from 'react'
import '../styles/Buscador.css'
import { useCityTrieSearch } from '../hooks/useCitieTrieSearch'

export default function Buscador ({ setCity, trie }) {
  const [query, setQuery] = useState('')

  const results = useCityTrieSearch(query, trie)

  const handleSubmit = e => {
    e.preventDefault()
    setCity(query)
  }

  return (
    <form action='get' className='buscador' onSubmit={e => handleSubmit(e)}>
      <div>
        <input
          type='text'
          onChange={e => setQuery(e.target.value)}
          placeholder='London, Paris, Rome'
          className='input-buscador'
        />
        <button type='submit' className='btn-buscador'>
          Search
        </button>
      </div>
      <ul>
        {results.slice(0, 6).map((city, idx) => (
          <li key={idx} onClick={e => setCity(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
    </form>
  )
}
