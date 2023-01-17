
import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PokemonService } from 'src/app/services';
import { pokemon, ResponsePokemonById, statsPokemon } from 'src/app/models';
import { adapterPokemonStats } from 'src/app/adapters/pokemon-stacks.adapter';

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
public statsPokemon: statsPokemon = {
  types: [
    {
      slot: 3,
      type: {
        name: 'string',
        url: 'string',
      },
    }
  ],
  base_experience: 0,
  height: 12,
  weight: 65,
  stats:[{
    base_stat: 4,
    effort: 4,
    stat: {
      name: 'string',
      url: 'string',
    }
  }]
  
}

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
