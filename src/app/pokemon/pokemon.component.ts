//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Modules

//Class
import { Pokemon } from '../pokemon';
import { Service } from '../service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon;
  constructor(
    protected service: Service) { }

  ngOnInit() {
    this.service.getPokemon()
    .subscribe((data: Pokemon) => console.log(this.pokemons = data))
  }

}
