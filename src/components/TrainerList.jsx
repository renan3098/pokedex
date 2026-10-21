import TrainerCard from './TrainerCard'

function TrainerList({ trainers, pokemonById, onSelectPokemon }) {
  return (
    <div className="trainer-grid">
      {trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          trainer={trainer}
          pokemonById={pokemonById}
          onSelectPokemon={onSelectPokemon}
        />
      ))}
    </div>
  )
}

export default TrainerList
