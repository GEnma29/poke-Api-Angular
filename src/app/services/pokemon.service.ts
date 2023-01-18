import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs'; 
import {pokemon} from '../models';
import { map } from 'rxjs/operators';
import { initialPokemon } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemon$ = new BehaviorSubject<pokemon>(initialPokemon)
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(
    private http: HttpClient,
  ) {}
  // read value
  get selectedPokemon$(): Observable<pokemon> {
    return this.pokemon$.asObservable();
  }
  // set value
  setPokemon(pokemon: pokemon): void {
    this.pokemon$.next(pokemon)
  }
   /**
   * Method that fetches data from
   * the Pokémon API.
   */

   getPokemon(): Observable<any> {
    return this.http
    .get(`${this.baseUrl}?limit=100000&offset=0`)
   }

   getPokemonById(id: number):Observable<any> {
    return this.http
    .get(`${this.baseUrl}${id}`)
   }
}
