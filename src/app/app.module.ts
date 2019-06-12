import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonSearchComponent,
    PokemonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
