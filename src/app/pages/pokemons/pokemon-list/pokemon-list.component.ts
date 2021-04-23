import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { retrievedPokemonList } from 'src/app/state/pokemons.actions';
import { PokemonService } from './pokemon-list.service';
import { Observable } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, map, mergeMap, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon.model';
import { selectedPokemon, researchPokemonList, emptyPokemonList } from '../../../state/pokemons.actions';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<Array<Pokemon>>;
  skip: number;
  total: number;
  searchInput = new FormControl('');

  constructor(
    public pokemonService: PokemonService,
    private store: Store<{ pokemons: Array<Pokemon>, pokemon: Pokemon }>,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.pokemons$ = this.store.pipe(select('pokemons'));
    this.skip = 0;
    this.total = 0;
  }

  ngOnInit(): void {
    this.navigation.showItems.next({back: false, tool: true});
    this.getPokemons();

    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchText => {
        // Vacío la lista para rellenarla con la próxima consulta
        if (!searchText) {
          this.getPokemons();
          return;
        }
        this.getPokemonByName(searchText);
      });
  }

  // tslint:disable-next-line: no-shadowed-variable
  view(pokemon: any): void {
    this.store.dispatch(selectedPokemon({ pokemon }));
    this.router.navigateByUrl('/pokemons/detail/' + pokemon.id);
  }

  getPokemons(): void {
    this.store.dispatch(emptyPokemonList());
    this.pokemonService
      .getPokemonsList(this.skip)
      .pipe(
        mergeMap((x: any) => x),
        // tslint:disable-next-line: no-shadowed-variable
        tap((Pokemon: any) => Pokemon),
        concatMap((pokemon) => {
          return this.pokemonService.getPokemonDetail(pokemon)
            .pipe(
              map((detail) => {
                // le agrego los campos que se mostrarán
                return {
                  ...pokemon,
                  id: detail.id,
                  sprites: detail.sprites,
                  stats: detail.stats,
                  moves: detail.moves,
                  types: detail.types,
                  order: detail.order,
                  weight: detail.weight,
                  height: detail.height,
                  abilities: detail.abilities,
                  imageUrl: detail.sprites.front_default
                };
              })
            );
        })
      )
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe((pokemon) => this.store.dispatch(retrievedPokemonList({ pokemon })));
  }

  getPokemonByName(term: string): void {
    this.pokemonService
      .getPokemonDetailById(term)
      .pipe(
        map((detail) => {
          return {
            ...detail,
            id: detail.id,
            sprites: detail.sprites,
            stats: detail.stats,
            moves: detail.moves,
            types: detail.types,
            order: detail.order,
            weight: detail.weight,
            height: detail.height,
            abilities: detail.abilities,
            imageUrl: detail.sprites.front_default
          };
        })
      )
      .subscribe( (pokemon) => {
        this.pokemonService.total = 1;
        this.store.dispatch(researchPokemonList({ pokemon }));
      });
  }

  paginate(event: any): void {
    this.skip = event.pageSize * event.pageIndex;
    this.getPokemons();
  }
}
