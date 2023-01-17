import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs'; 
import {pokemon} from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemon$ = new BehaviorSubject<pokemon>({
    id: 2,
    imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    name: 'ivysaur'
  })
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  // private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
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
