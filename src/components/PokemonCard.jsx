import PokemonImage from './PokemonImage'
import TypeBadge from './TypeBadge'
import { STAT_LABELS, TYPE_COLORS, formatId, getTypes } from '../utils/pokemon'

function PokemonCard({ pokemon, onSelect }) {
  const types = getTypes(pokemon)
  const mainColor = TYPE_COLORS[types[0].name]

  return (
    <button
      type="button"
      className="pokemon-card"
      style={{ '--type-color': mainColor }}
      onClick={() => onSelect(pokemon)}
    >
      <span className="pokemon-card__id">{formatId(pokemon.id)}</span>
      <div className="pokemon-card__image">
        <PokemonImage id={pokemon.id} name={pokemon.name} />
      </div>
      <h3 className="pokemon-card__name">{pokemon.name}</h3>
      <div className="pokemon-card__types">
        {types.map((type) => (
          <TypeBadge key={type.id} name={type.name} />
        ))}
      </div>
      <dl className="pokemon-card__stats">
        {Object.entries(pokemon.stats).map(([key, value]) => (
          <div key={key}>
            <dt>{STAT_LABELS[key]}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </button>
  )
}

export default PokemonCard
