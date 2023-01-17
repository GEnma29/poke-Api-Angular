export type pokemon = {
    id: number,
    imgUrl: string,
    name: string,
}
export type statsPokemon = {
    types: Type[],
    stats:  Stat[]
    weight: number;
    height: number;
    base_experience: number;
}
interface Type {
  slot: number;
  type: Ability;
}

interface Ability {
    name: string;
    url: string;
  }
interface Stat {
    base_stat: number;
    effort: number;
    stat: Ability;
  }