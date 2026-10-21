import pokeball from '../assets/pokeball.svg'

const TABS = [
  { id: 'pokedex', label: 'Pokédex' },
  { id: 'trainers', label: 'Treinadores' },
]

function Header({ activeTab, onTabChange }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <img src={pokeball} alt="" className="header__logo" />
          <div>
            <h1>Pokédex</h1>
            <p>Os 151 Pokémon da região de Kanto</p>
          </div>
        </div>

        <nav className="tabs" aria-label="Seções">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tabs__item ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
