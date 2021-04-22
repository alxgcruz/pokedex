import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Pokemon } from '../pokemon-list/pokemon.model';
import { PokemonService } from '../pokemon-list/pokemon-list.service';
import { selectedPokemon } from 'src/app/state/pokemons.actions';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon$ = this.store.pipe(select('pokemon'));
  pokemon: any;
  id = '';
  imagePath = '';

  constructor(
    private store: Store<{pokemon: Pokemon}>,
    private nav: ActivatedRoute,
    private pokeService: PokemonService,
    private navigation: NavigationService
    ) {
    }

  ngOnInit(): void {
    this.navigation.showBackButton.next(true);

    this.nav.params.subscribe( params => {
      this.id = params.id;
    });
    this.pokemon$.subscribe( poke => {
      // Si recargan y no hay pokemon seleccionado
      // se consulta con el id de la ruta
      if (poke.id) {
        this.pokemon = poke;
        this.imagePath = poke.sprites.other['official-artwork'].front_default;
      } else {
        this.getPokemon();
      }
    });
  }

  getPokemon(): void {
    this.pokeService.getPokemonDetailById(this.id)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe( pokemon => {
      this.imagePath = pokemon.sprites.other['official-artwork'].front_default;
      this.store.dispatch(selectedPokemon({pokemon}));
    });
  }

}
