import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PokemonTableComponent } from 'src/app/components';
import { PokeCardComponent } from 'src/app/components/poke-card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PokemonTableComponent,
    PokeCardComponent
  ]
})
export class HomeModule { }
