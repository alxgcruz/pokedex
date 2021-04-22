import { createAction, props } from '@ngrx/store';

export const retrievedPokemonList = createAction(
  '[Pokemon List/API] Retrieve Pokemons Success',
  props<{ pokemon: any }>()
);

export const researchPokemonList = createAction(
  '[Pokemon List/API] Research Pokemon Success',
  props<{ pokemon: any }>()
);

export const emptyPokemonList = createAction(
  '[Pokemon Empty] Empty Pokemon List'
);

export const selectedPokemon = createAction(
  '[Pokemon Select] Select Pokemon',
  props<{ pokemon: any }>()
);
