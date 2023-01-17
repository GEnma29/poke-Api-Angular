import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { letters } from 'src/app/constants';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from 'src/app/services';
import { ResponseApi } from 'src/app/models';

@Component({
  selector: 'app-number-of-pokemon-by-letter',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './number-of-pokemon-by-letter.component.html',
  styleUrls: ['./number-of-pokemon-by-letter.component.scss']
})
export class NumberOfPokemonByLetterComponent  {

  public letters: string[] = letters
  public selectLetter: string = 'A'
  public results :any[]= []
  public filterResults :any[]= []
  public numberOfResults : number = 59
  constructor(private pokemonService: PokemonService){}
  
  onSelectedLetter(letter: string){
    this.filterResults = []
    this.selectLetter = letter
    this.filterResults = this.results.filter(pokemon => pokemon.name.split('')?.[0] === this.selectLetter.toLocaleLowerCase())
    this.numberOfResults = this.filterResults.length
  }

  public getData(){
    this.pokemonService.getPokemon().subscribe((response: ResponseApi) => 
    this.results = response.results)
  } 

  ngOnInit() {
   this.getData()
   
  }
}
