export class Pokemon {
    name: string;
    url: string;
    base_experience: string;
}

export class PokemonList {
    count: number;
    next: string;
    results: Array;
    
    constructor (
        count: number,
        next: string,
        results: Array
    ) {
        this.count = count;
        this.next = next;
        this.results = results
    }
}

export class Array {
    name: string;
    url: string;
    base_experience: string;

    constructor (
        name: string,
        url: string,
        base_experience: string
    ) {
        this.name = name;
        this.url = url;
        this.base_experience = base_experience;
    }
}