import { Pokemon } from '../pages/pokemons/pokemon-list/pokemon.model';

export interface AppState {
  pokemons: Array<Pokemon>;
  pokemon: Pokemon;
}
