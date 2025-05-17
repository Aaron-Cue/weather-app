class TrieNode {
  constructor () {
    this.children = new Map()
    this.cities = []
    this.isEndOfWord = false
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode()
  }

  insert (city) {
    let node = this.root
    const name = city.name.toLowerCase()

    for (const char of name) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char)
      node.cities.push(city)
    }

    node.isEndOfWord = true
  }

  searchPrefix (prefix) {
    let node = this.root
    prefix = prefix.toLowerCase()

    for (const char of prefix) {
      if (!node.children.has(char)) return []
      node = node.children.get(char)
    }

    return node.cities
  }
}

export default Trie
