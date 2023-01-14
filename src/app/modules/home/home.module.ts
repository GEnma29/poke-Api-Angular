import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PokemonTableComponent } from 'src/app/components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PokemonTableComponent,
  ]
})
export class HomeModule { }
