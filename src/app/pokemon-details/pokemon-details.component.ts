import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
//Class
import { PokemonList, Pokemon, Desc } from '../pokemon';

//Service
import { Service } from '../service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon;
  desc: Desc;
  sub: any;
  id: number;
  name: string;
  // prev: number;
  // next: number;
  default = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";
  additionalPanelExpanded = false;
  statPanelExpanded = false;
  moveListPanelExpanded = false;
  normalPanelExpanded = true;
  shinyPanelExpanded = false;

  constructor(
    private service: Service,
    private route: ActivatedRoute,
    // private router: Router
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDetails(this.name)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data));
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDescription(this.name)
      .subscribe((data: Desc) => console.log(this.desc = data));
     });
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // prevPoke(prev: number){
  //   this.service.getNextPokemon(this.prev);
  // }

  getPokemonbyID(id: number){
    console.log(this.id);
  }

  // nextPoke(){
  //   this.service.getPokeById(this.id+1)
  //   .subscribe(service => {
  //     this.next = service.species.name
  //     this.router.navigate(['/',this.nextpokename])
  //   })
  // }
}
