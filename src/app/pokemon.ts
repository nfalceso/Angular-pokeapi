export class Pokemon {
    id: number;
    name: string;
    url: string;
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

    constructor (
        name: string,
        url: string
    ) {
        this.name = name;
        this.url = url;

    }
}