import { useCallback, useMemo, useState } from 'react'
import data from './data/pokedex-data.json'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import PokemonList from './components/PokemonList'
import PokemonModal from './components/PokemonModal'
import TrainerList from './components/TrainerList'
import EmptyState from './components/EmptyState'
import { getTypes } from './utils/pokemon'

const pokemonById = new Map(data.pokemon.map((pokemon) => [pokemon.id, pokemon]))

function App() {
  const [activeTab, setActiveTab] = useState('pokedex')
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  // Estado derivado: a lista exibida é calculada a partir da busca e do filtro.
  const filteredPokemon = useMemo(() => {
    const term = search.trim().toLowerCase().replace(/^#/, '')

    return data.pokemon.filter((pokemon) => {
      const matchesSearch =
        term === '' ||
        pokemon.name.toLowerCase().includes(term) ||
        String(pokemon.id) === String(Number(term))

      const matchesType =
        typeFilter === '' || getTypes(pokemon).some((type) => type.name === typeFilter)

      return matchesSearch && matchesType
    })
  }, [search, typeFilter])

  const selectedTrainers = useMemo(() => {
    if (!selectedPokemon) return []
    return data.trainers.filter((trainer) => trainer.pokemonIds.includes(selectedPokemon.id))
  }, [selectedPokemon])

  const closeModal = useCallback(() => setSelectedPokemon(null), [])

  function resetFilters() {
    setSearch('')
    setTypeFilter('')
  }

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container">
        {activeTab === 'pokedex' ? (
          <section>
            <div className="toolbar">
              <SearchBar value={search} onChange={setSearch} />
              <TypeFilter types={data.types} value={typeFilter} onChange={setTypeFilter} />
            </div>

            <p className="result-count">
              {filteredPokemon.length} de {data.pokemon.length} Pokémon
            </p>

            {filteredPokemon.length > 0 ? (
              <PokemonList pokemon={filteredPokemon} onSelect={setSelectedPokemon} />
            ) : (
              <EmptyState onReset={resetFilters} />
            )}
          </section>
        ) : (
          <section>
            <h2 className="section-title">Treinadores</h2>
            <TrainerList
              trainers={data.trainers}
              pokemonById={pokemonById}
              onSelectPokemon={setSelectedPokemon}
            />
          </section>
        )}
      </main>

      <footer className="footer">
        Dados: pokedex-data.json · Imagens: repositório PokeAPI/sprites
      </footer>

      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} trainers={selectedTrainers} onClose={closeModal} />
      )}
    </>
  )
}

export default App
