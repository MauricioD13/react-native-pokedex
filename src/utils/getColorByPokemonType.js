import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = (t) => POKEMON_TYPE_COLORS[t.toLowerCase()];

export default getColorByPokemonType;
