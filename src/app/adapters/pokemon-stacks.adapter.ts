import { ResponsePokemonById } from "../models"
export const adapterPokemonStats = ({types, stats, weight, height,base_experience} : ResponsePokemonById ) => {
   return {
        types,
        stats,
        weight,
        height,
        base_experience,
    }
}