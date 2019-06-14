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
  pokemon: Pokemon;
  sub: any;
  name: string;

  constructor(
    private service: Service,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.name = params["name"];
    this.service.getDetails(this.name)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data));
   });
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
