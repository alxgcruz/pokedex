import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  total = 0;

  constructor(private http: HttpClient) { }

  getPokemonsList(skip: number): Observable<Array<Pokemon>> {
    return this.http
      .get<{ count: number, results: Pokemon[] }>(
        `https://pokeapi.co/api/v2/pokemon?offset=${skip}&limit=10`
      )
      .pipe(
        map( (pokemons) => {
          this.total = pokemons.count;
          return pokemons.results || [];
        })
      );
  }

  getPokemonDetail(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.get<Pokemon>( pokemon.url );
  }

  getPokemonDetailById(term: string): Observable<Pokemon> {
    return this.http.get<Pokemon>( `https://pokeapi.co/api/v2/pokemon/${term}/` );
  }
}
