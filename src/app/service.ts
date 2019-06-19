import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { PokemonList, Pokemon, Desc } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class Service{
    private URL="https://pokeapi.co/api/v2";

    constructor(
      private http: HttpClient) { }

    pokemon: PokemonList;

    getPokemon(){
      return this.http.get<PokemonList>(`${this.URL}/pokemon?offset=0&limit=60`);
    }
    
    getDetails(name: string){
      return this.http.get<Pokemon>(`${this.URL}/pokemon/${name}`);
    }
    
    getOnlyPokemon(){
      return this.http.get<Pokemon>(`${this.URL}/pokemon/${name}`);
    }

    getDescription(name: string){
      return this.http.get<Desc>(`${this.URL}/pokemon-species/${name}`);
    }
}