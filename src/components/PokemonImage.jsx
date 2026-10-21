import { useState } from 'react'
import pokeball from '../assets/pokeball.svg'
import { getPokemonImage } from '../utils/pokemon'

function PokemonImage({ id, name, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      className={`pokemon-image ${failed ? 'is-fallback' : ''} ${className}`}
      src={failed ? pokeball : getPokemonImage(id)}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default PokemonImage
