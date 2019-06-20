//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Modules

//Class
import { PokemonList, Pokemon } from '../pokemon';

//Service
import { Service } from '../service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemon: any;
  pokemonList: PokemonList;
  sub: any;
  // id: string;
  page = 1;

  constructor(
    protected service: Service,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.service.getAllPokemon()
    // .subscribe((data: PokemonList) => this.searchPokemon(data.results,data.count))
  }

}
