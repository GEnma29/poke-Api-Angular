import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PokemonTableComponent } from "./components/pokemon-table/pokemon-table.component";
import { HttpClientModule } from '@angular/common/http';
import { PokeCardComponent } from './components/poke-card';
import { NumberOfPokemonByLetterComponent } from './components/number-of-pokemon-by-letter/number-of-pokemon-by-letter.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToolbarComponent,
        PokemonTableComponent,
        PokeCardComponent,
        NumberOfPokemonByLetterComponent
    ]
})
export class AppModule { }
