//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Modules

//Class
import { PokemonList, Pokemon } from '../pokemon';

//Service
import { Service } from '../service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  pokemonList: PokemonList;

  constructor(
    protected service: Service) { }

  ngOnInit() {
    this.service.getPokemon()
    .subscribe((data: Pokemon) => console.log(this.pokemonList = {
      count: data['count'],
      next: data['next'],
      results: data['results']
    }))
  }

}
