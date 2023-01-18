
import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PokemonService } from 'src/app/services';
import { pokemon, ResponsePokemonById, statsPokemon } from 'src/app/models';
import { adapterPokemonStats } from 'src/app/adapters/pokemon-stacks.adapter';
import { initialStatsPokemon } from 'src/app/constants';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
constructor( private pokemonService: PokemonService){}
public selectPokemon!: pokemon
public statsPokemon: statsPokemon = initialStatsPokemon

getPokemon(){
   this.pokemonService.selectedPokemon$.subscribe(res =>{
    this.selectPokemon = res
    this.pokemonService.getPokemonById(res.id).subscribe((response: ResponsePokemonById) => 
    this.statsPokemon = adapterPokemonStats(response))
   }
    
    )
  } 

ngOnInit(): void {
  this.getPokemon()
}

}
