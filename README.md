# Pokédex — React + Vite

Pokédex interativa dos 151 Pokémon de Kanto, desenvolvida para a **Atividade 03** da disciplina de Desenvolvimento e Integração de Aplicações Web.

## Funcionalidades

- Listagem de todos os Pokémon com número, nome, tipos e os seis atributos base (HP, Ataque, Defesa, Ataque Especial, Defesa Especial e Velocidade).
- Busca por **nome** ou **número** (aceita `25`, `025` ou `#25`), atualizada enquanto o usuário digita.
- Filtro por **tipo**, usando os tipos presentes no arquivo de dados.
- **Modal de detalhes** com barras de atributos, total dos atributos e os treinadores que possuem o Pokémon (fecha com `Esc`, no `×` ou clicando fora).
- Área de **Treinadores** com nome, quantidade de insígnias e Pokémon da equipe (clicar em um Pokémon abre os detalhes).
- Mensagem para quando nenhum Pokémon é encontrado, com botão para limpar os filtros.
- Layout responsivo e identidade visual própria.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)

Nenhuma biblioteca adicional foi usada; todas as dependências estão no `package.json`.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal, normalmente **http://localhost:5173**.

Outros comandos:

```bash
npm run build    # gera a versão de produção em dist/
npm run preview  # serve a versão de produção localmente
npm run lint     # verifica o código com ESLint
```

## Dados

Os dados ficam em [`src/data/pokedex-data.json`](src/data/pokedex-data.json), copiado do repositório da disciplina. O arquivo contém:

- `types`: lista de tipos (`id`, `name`)
- `pokemon`: lista de Pokémon (`id`, `name`, `stats`, `types`)
- `trainers`: lista de treinadores (`id`, `name`, `badges`, `pokemonIds`)

O JSON é importado diretamente em `App.jsx`. Pokémon sem tipo no arquivo (ex.: Mew) são exibidos como "Sem tipo".

## Imagens

As imagens dos Pokémon vêm do repositório público [PokeAPI/sprites](https://github.com/PokeAPI/sprites) no GitHub (artes oficiais), acessadas pela URL:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
```

Não há chamadas à API da PokéAPI: todos os dados vêm do JSON local. Se uma imagem não carregar (por exemplo, sem internet), a aplicação mostra uma Pokébola local no lugar e continua funcionando.

## Estrutura do projeto

```
pokedex/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── pokeball.svg            # ícone da aba
└── src/
    ├── main.jsx                # ponto de entrada
    ├── App.jsx                 # estado da aplicação, busca e filtro
    ├── index.css               # estilos globais
    ├── assets/
    │   └── pokeball.svg        # imagem usada no logo e como fallback
    ├── data/
    │   └── pokedex-data.json   # dados da Pokédex
    ├── utils/
    │   └── pokemon.js          # URL das imagens, cores e nomes dos tipos, rótulos
    └── components/
        ├── Header.jsx          # cabeçalho e abas (Pokédex / Treinadores)
        ├── SearchBar.jsx       # campo de busca
        ├── TypeFilter.jsx      # seletor de tipo
        ├── PokemonList.jsx     # grade de cards
        ├── PokemonCard.jsx     # card de um Pokémon
        ├── PokemonImage.jsx    # imagem com fallback
        ├── PokemonModal.jsx    # detalhes do Pokémon
        ├── StatBar.jsx         # barra de atributo
        ├── TypeBadge.jsx       # etiqueta colorida de tipo
        ├── TrainerList.jsx     # grade de treinadores
        ├── TrainerCard.jsx     # card de um treinador
        └── EmptyState.jsx      # mensagem de "nenhum resultado"
```

## Conceitos de React utilizados

- Componentes funcionais e `props`
- `useState` para aba ativa, busca, filtro de tipo e Pokémon selecionado
- `useMemo` para estado derivado (lista filtrada e treinadores do Pokémon selecionado)
- `useEffect` no modal para fechar com `Esc` e travar a rolagem da página
- `useCallback` para manter estável a função de fechar o modal
- `map()` para renderizar listas e `filter()` para busca e filtro
- Manipulação de eventos (`onChange`, `onClick`, `onError`, `keydown`)
- Renderização condicional (abas, modal, estado vazio, fallback de imagem)
