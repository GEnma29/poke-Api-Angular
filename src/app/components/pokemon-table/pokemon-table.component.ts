import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PokemonService } from 'src/app/services';
import { ResponseApi } from 'src/app/models';
import { adapterPokemonTable } from 'src/app/adapters/pokemon-table.adapter';
import { pokemon } from 'src/app/models/pokemon.models';
import {MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pokemon-table',
  imports: [CommonModule,MatPaginatorModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatIconModule],
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'img', 'name'];
  dataSource: MatTableDataSource<pokemon>;
  data: pokemon[]= []
 // public pokemonArray = adapterPokemonTable(this.data)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(
    private pokemonService: PokemonService
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onPokemonClicked(pokemon: pokemon): void {
    this.pokemonService.setPokemon(pokemon)
    console.log(pokemon)
  }
  public getData(){
    this.pokemonService.getPokemon().subscribe((response: ResponseApi) => 
    this.dataSource.data = adapterPokemonTable(response.results))
  } 

  ngOnInit() {
   this.getData()
   
  }
}