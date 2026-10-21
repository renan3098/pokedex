import PokemonImage from './PokemonImage'
import { formatId } from '../utils/pokemon'

function TrainerCard({ trainer, pokemonById, onSelectPokemon }) {
  return (
    <article className="trainer-card">
      <header className="trainer-card__header">
        <h3>{trainer.name}</h3>
        <span className="trainer-card__badges" title="Insígnias">
          🏅 {trainer.badges} {trainer.badges === 1 ? 'insígnia' : 'insígnias'}
        </span>
      </header>

      <p className="muted">{trainer.pokemonIds.length} Pokémon na equipe</p>

      <ul className="trainer-card__team">
        {/* Um treinador pode ter o mesmo Pokémon repetido, por isso a key inclui o índice. */}
        {trainer.pokemonIds.map((id, index) => {
          const pokemon = pokemonById.get(id)
          if (!pokemon) return null
          return (
            <li key={`${id}-${index}`}>
              <button type="button" className="team-member" onClick={() => onSelectPokemon(pokemon)}>
                <PokemonImage id={pokemon.id} name={pokemon.name} />
                <span className="team-member__name">{pokemon.name}</span>
                <span className="team-member__id">{formatId(pokemon.id)}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default TrainerCard
