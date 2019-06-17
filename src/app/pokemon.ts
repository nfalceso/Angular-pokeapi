// export class Pokemon {
//     name: string;
//     url: string;
// }

export interface Pokemon {
    // name: string;
    // description: string;
    // url?: string;
    // base_experience?: number;
    // height?: number;
    // is_default?: boolean;
    // order?: number;
    // weight?: number;
    // species?: {
    //   name: string;
    //   url: string;
    // };
  }

export class PokemonList {
    count: number;
    next: string;
    results: Array;
    id: number;
    name: string;
    description: string;
    url?: string;
    base_experience?: number;
    height?: number;
    is_default?: boolean;
    order?: number;
    weight?: number;
    species?: {
      name: string;
      url: string;
    };
    // abilities?: Ability[];
    // moves?: Move[];
    // stats?: Stat[];
    // types?: Type[];
    
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


export interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

export class Array {
    name: string;
    url: string;
    // base_experience: string;

    constructor (
        name: string,
        url: string
        // base_experience: string
    ) {
        this.name = name;
        this.url = url;
        // this.base_experience = base_experience;
    }
}