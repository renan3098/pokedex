import { useEffect } from 'react'
import PokemonImage from './PokemonImage'
import StatBar from './StatBar'
import TypeBadge from './TypeBadge'
import { STAT_LABELS, TYPE_COLORS, formatId, getTotalStats, getTypes } from '../utils/pokemon'

function PokemonModal({ pokemon, trainers, onClose }) {
  const types = getTypes(pokemon)
  const mainColor = TYPE_COLORS[types[0].name]

  // Fecha com a tecla Esc e trava a rolagem da página enquanto o modal está aberto.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ '--type-color': mainColor }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className="modal__hero">
          <PokemonImage id={pokemon.id} name={pokemon.name} className="modal__image" />
        </div>

        <div className="modal__body">
          <span className="modal__id">{formatId(pokemon.id)}</span>
          <h2 id="modal-title" className="modal__name">{pokemon.name}</h2>
          <div className="pokemon-card__types">
            {types.map((type) => (
              <TypeBadge key={type.id} name={type.name} />
            ))}
          </div>

          <h3 className="modal__section-title">Atributos base</h3>
          <div className="modal__stats">
            {Object.entries(pokemon.stats).map(([key, value]) => (
              <StatBar key={key} label={STAT_LABELS[key]} value={value} color={mainColor} />
            ))}
          </div>
          <p className="modal__total">
            Total: <strong>{getTotalStats(pokemon.stats)}</strong>
          </p>

          <h3 className="modal__section-title">Treinadores</h3>
          {trainers.length > 0 ? (
            <ul className="modal__trainers">
              {trainers.map((trainer) => (
                <li key={trainer.id}>{trainer.name}</li>
              ))}
            </ul>
          ) : (
            <p className="muted">Nenhum treinador possui este Pokémon.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PokemonModal
