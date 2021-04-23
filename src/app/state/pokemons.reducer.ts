import { createReducer, on, Action } from '@ngrx/store';
import { Pokemon, PokemonModel } from '../pages/pokemons/pokemon-list/pokemon.model';
import { retrievedPokemonList, selectedPokemon, researchPokemonList, emptyPokemonList } from './pokemons.actions';

export const initialState: Array<Pokemon> = [];
export const initialPokemonState: Pokemon = new PokemonModel(0, '', 0, 0, false, 0, '', null, null, null, null, 0, null, '');

// tslint:disable: no-shadowed-variable
export const pokemonListReducer = createReducer(
  initialState,
  on(retrievedPokemonList, (state, { pokemon }): Array<Pokemon> => {
    const idx = state.findIndex(poke => poke.name === pokemon.name);
    if (idx < 0) {
      return state.concat(pokemon);
    }
    return state;
  }),
  on(researchPokemonList, (state, { pokemon }): Array<Pokemon> => {
    state = [].concat(pokemon);
    return state;
  }),
  on(emptyPokemonList, (state): Array<Pokemon> => state = []),
);

export const pokemonSelectReducer = createReducer(
  initialPokemonState,
  on(selectedPokemon, (state, {pokemon}): Pokemon => state = pokemon)
);
