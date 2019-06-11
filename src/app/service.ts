import { Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { PokemonList, Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class Service{
    private URL="https://pokeapi.co/api/v2";

    constructor(
        private http: HttpClient) { }

    pokemon: Pokemon;

    getPokemon(){
        return this.http.get<Pokemon>(`${this.URL}/pokemon`);
    }
    
    getDetails(id: string){
        return this.http.get<Pokemon>(`${this.URL}/pokemon/${id}`);
      }
}