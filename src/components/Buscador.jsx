import { useState } from 'react'
import '../styles/Buscador.css'
import { useCityTrieSearch } from '../hooks/useCitieTrieSearch'
import { AnimatePresence, motion } from 'framer-motion'

export default function Buscador ({ setCity, trie }) {
  const [query, setQuery] = useState('')

  const results = useCityTrieSearch(query, trie)

  const handleSubmit = e => {
    e.preventDefault()
    setCity(query)
  }

  const handleClickResult = city => {
    setCity(city.name)
    setQuery('')
  }

  return (
    <form action='get' className='buscador' onSubmit={e => handleSubmit(e)}>
      <div className='buscador-container'>
        <input
          type='text'
          onChange={e => setQuery(e.target.value)}
          placeholder='London, Paris, Rome'
          className='input-buscador'
          value={query}
        />
        <button type='submit' className='btn-buscador'>
          Search
        </button>
      </div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.ul
            className='results'
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 350 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.4 }}
          >
            {results.slice(0, 6).map((city, idx) => (
              <motion.li
                key={idx}
                onClick={() => handleClickResult(city)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {city.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </form>
  )
}
