import PokemonCard from './PokemonCard'

function PokemonList({ pokemon, onSelect }) {
  return (
    <div className="pokemon-grid">
      {pokemon.map((item) => (
        <PokemonCard key={item.id} pokemon={item} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default PokemonList
