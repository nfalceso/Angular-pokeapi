import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.co?

const routes: Routes = [
  // { path: '', redirectTo: 'pokemon-dashboard', pathMatch: 'full' },
  // { path: 'pokemon-dashboard', component: PokemonDashboardComponent },
  // { path: 'pokemon-dashboard/page/:page', component: PokemonDashboardComponent },
  // { path: 'pokemon-detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
