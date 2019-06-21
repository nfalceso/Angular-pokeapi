//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Modules

//Class
import { PokemonList, Pokemon } from '../pokemon';

//Service
import { Service } from '../service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  pokemonList: PokemonList;
  sub: any;
  // id: string;
  pagedItems: any[];
  default = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";

  constructor(
    protected service: Service,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.service.getAllPokemon()
    .subscribe((data: PokemonList) => console.log(this.pokemonList = {
      count: data['count'],
      next: data['next'],
      results: data['results']
    }))
    
  }

  // onClick(string: name){}

  // clickPage() {
  //   this.service.getOnlyPokemon(name)
  // }
}