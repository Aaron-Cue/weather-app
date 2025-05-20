import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export function useCityTrieSearch (query, trie) {
  const [results, setResults] = useState([])

  useEffect(() => {
    const search = debounce(() => {
      const trimmed = query.trim().toLowerCase()
      if (!trimmed) {
        setResults([])
        return
      }
      const matches = trie.searchPrefix(trimmed)
      setResults(matches)
    }, 300)

    search()
    return () => search.cancel()
  }, [query, trie])

  return results
}
