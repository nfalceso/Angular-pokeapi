import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { MdMenuModule, MdButtonModule, MdIconModule, MdCardModule } from '@angular/material'
// import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';
// import { NgxModalModule } from '@ngx-lite/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import { BerriesComponent } from './berries/berries.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    PokemonSearchComponent,
    PokemonComponent,
    // DashboardComponent,
    PokemonListComponent,
    HeaderComponent,
    BerriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // MdMenuModule,
    // MdButtonModule,
    // MdIconModule,
    // MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
