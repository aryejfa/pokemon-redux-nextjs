import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import PokemonMultipleImageReducer from "./PokemonMultipleImageReducer";
import PokemonMultipleSpeciesReducer from "./PokemonMultipleSpeciesReducer";
import PokemonUrlReducer from "./PokemonUrlReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  PokemonImage: PokemonMultipleImageReducer,
  PokemonSpecies: PokemonMultipleSpeciesReducer,
  PokemonUrl: PokemonUrlReducer,
});

export default RootReducer;
