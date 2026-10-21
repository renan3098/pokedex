import { TYPE_LABELS } from '../utils/pokemon'

function TypeFilter({ types, value, onChange }) {
  return (
    <label className="field">
      <span className="field__label">Tipo</span>
      <select
        className="field__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Todos os tipos</option>
        {types.map((type) => (
          <option key={type.id} value={type.name}>
            {TYPE_LABELS[type.name] ?? type.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default TypeFilter
