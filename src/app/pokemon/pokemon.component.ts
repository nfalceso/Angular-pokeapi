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
  sub: any;
  id: string;
  page = 1;

  constructor(
    protected service: Service,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => { this.page = +params["page"];
    // console.log("page: " + this.page)
    
    this.service.getPokemon()
    .subscribe((data: PokemonList) => console.log(this.pokemonList = {
      count: data['count'],
      next: data['next'],
      results: data['results']
    }))
  //   this.service.getDetails(this.id)
  //   .subscribe((data: PokemonList) => console.log(this.pokemonList = data))
  // });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
