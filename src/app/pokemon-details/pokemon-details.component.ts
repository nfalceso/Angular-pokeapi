import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
//Class
import { PokemonList, Pokemon } from '../pokemon';

//Service
import { Service } from '../service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  // pokemon: any;
  pokemonList: PokemonList;
  sub: any;
  name: string;

  constructor(
    private service: Service,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDetails(this.name)
    .subscribe((data: PokemonList) => console.log(this.pokemonList = data));
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
