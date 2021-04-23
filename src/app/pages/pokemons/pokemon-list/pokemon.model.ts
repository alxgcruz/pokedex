export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  url: string;
  sprites: any;
  types: any;
  stats: any;
  moves: any;
  weight: number;
  abilities: any;
  imageUrl: string;
}

// tslint:disable: variable-name
export class PokemonModel {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  url: string;
  sprites: any;
  types: any;
  stats: any;
  moves: any;
  weight: number;
  abilities: any;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    url: string,
    sprites: any,
    types: any,
    stats: any,
    moves: any,
    weight: number,
    abilities: any,
    imageUrl: string
  ){
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.is_default = is_default;
    this.order = order;
    this.url = url;
    this.sprites = sprites;
    this.types = types;
    this.stats = stats;
    this.moves = moves;
    this.weight = weight;
    this.abilities = abilities;
    this.imageUrl = imageUrl;
  }
}
