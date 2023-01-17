import { Result } from "../models"
export const adapterPokemonTable = (pokemonArray: Result[]) => {
    const result = pokemonArray.map(({name}, index)=>{
       return {
        id: index + 1,
        imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        name : name,
       }
    })
    return result
}