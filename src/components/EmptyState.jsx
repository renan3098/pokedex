import pokeball from '../assets/pokeball.svg'

function EmptyState({ onReset }) {
  return (
    <div className="empty-state">
      <img src={pokeball} alt="" className="empty-state__icon" />
      <h2>Nenhum Pokémon encontrado</h2>
      <p>Tente buscar por outro nome, número ou tipo.</p>
      <button type="button" className="button" onClick={onReset}>
        Limpar filtros
      </button>
    </div>
  )
}

export default EmptyState
