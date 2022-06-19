import {
  POKEMON_MULTIPLE_SPECIES_LOADING,
  POKEMON_MULTIPLE_SPECIES_FAIL,
  POKEMON_MULTIPLE_SPECIES_SUCCESS,
} from "../type/Type";

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonMultipleSpeciesReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_SPECIES_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_MULTIPLE_SPECIES_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon",
      };
    case POKEMON_MULTIPLE_SPECIES_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PokemonMultipleSpeciesReducer;
