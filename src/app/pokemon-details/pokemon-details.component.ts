import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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
  name: string;
  default = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";
  additionalPanelExpanded = false;
  statPanelExpanded = false;
  moveListPanelExpanded = false;

  constructor(
    private service: Service,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDetails(this.name)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data));
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDescription(this.name)
      .subscribe((data: Desc) => console.log(this.desc = data));
     });
   });
  //  ngGetDescription();
  }

  // ngGetDescription(){
  //   this.sub = this.route.params.subscribe(params => { this.name = params["name"];
  //   this.service.getDetails(this.name)
  //   .subscribe((data: Pokemon) => console.log(this.pokemon = data));
  //  });
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
