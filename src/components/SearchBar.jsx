function SearchBar({ value, onChange }) {
  return (
    <label className="field">
      <span className="field__label">Buscar</span>
      <input
        type="search"
        className="field__input"
        placeholder="Nome ou número (ex.: Pikachu ou 25)"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default SearchBar
