// Imagens oficiais hospedadas no repositório público PokeAPI/sprites (GitHub).
// Se a imagem não carregar, os componentes exibem uma Pokébola local no lugar.
export function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export function formatId(id) {
  return `#${String(id).padStart(3, '0')}`
}

export const STAT_LABELS = {
  hp: 'HP',
  attack: 'Ataque',
  defense: 'Defesa',
  specialAttack: 'Ataque Esp.',
  specialDefense: 'Defesa Esp.',
  speed: 'Velocidade',
}

// Maior valor possível de um atributo base, usado para escalar as barras.
export const MAX_STAT = 255

export const TYPE_COLORS = {
  Typeless: '#9e9e9e',
  Normal: '#a8a77a',
  Fire: '#ee8130',
  Water: '#6390f0',
  Grass: '#7ac74c',
  Electric: '#f7d02c',
  Ice: '#96d9d6',
  Fighting: '#c22e28',
  Poison: '#a33ea1',
  Ground: '#e2bf65',
  Flying: '#a98ff3',
  Psychic: '#f95587',
  Bug: '#a6b91a',
  Rock: '#b6a136',
  Ghost: '#735797',
  Dark: '#705746',
  Dragon: '#6f35fc',
  Steel: '#b7b7ce',
}

export const TYPE_LABELS = {
  Typeless: 'Sem tipo',
  Normal: 'Normal',
  Fire: 'Fogo',
  Water: 'Água',
  Grass: 'Planta',
  Electric: 'Elétrico',
  Ice: 'Gelo',
  Fighting: 'Lutador',
  Poison: 'Venenoso',
  Ground: 'Terra',
  Flying: 'Voador',
  Psychic: 'Psíquico',
  Bug: 'Inseto',
  Rock: 'Pedra',
  Ghost: 'Fantasma',
  Dark: 'Sombrio',
  Dragon: 'Dragão',
  Steel: 'Aço',
}

// Pokémon sem tipos no JSON (ex.: Mew) são tratados como "Typeless".
export function getTypes(pokemon) {
  return pokemon.types.length > 0 ? pokemon.types : [{ id: 0, name: 'Typeless' }]
}

export function getTotalStats(stats) {
  return Object.values(stats).reduce((sum, value) => sum + value, 0)
}
