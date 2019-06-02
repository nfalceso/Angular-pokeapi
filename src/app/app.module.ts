import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonSearchComponent,
    PokemonComponent,
    DashboardComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
