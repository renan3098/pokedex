import { MAX_STAT } from '../utils/pokemon'

function StatBar({ label, value, color }) {
  const percent = Math.min((value / MAX_STAT) * 100, 100)

  return (
    <div className="stat-bar">
      <span className="stat-bar__label">{label}</span>
      <span className="stat-bar__value">{value}</span>
      <div className="stat-bar__track">
        <div className="stat-bar__fill" style={{ width: `${percent}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}

export default StatBar
