import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const route: Routes = [
  // { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  // { path: 'pokemon', component: PokemonComponent },
  // { path: 'pokemon-dashboard/page/:page', component: PokemonDashboardComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(route) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
