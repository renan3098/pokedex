import { TYPE_COLORS, TYPE_LABELS } from '../utils/pokemon'

function TypeBadge({ name }) {
  return (
    <span className="type-badge" style={{ backgroundColor: TYPE_COLORS[name] }}>
      {TYPE_LABELS[name] ?? name}
    </span>
  )
}

export default TypeBadge
