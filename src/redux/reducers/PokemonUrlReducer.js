import {
  POKEMON_URL_LOADING,
  POKEMON_URL_FAIL,
  POKEMON_URL_SUCCESS,
} from "../type/Type";

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonUrlReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_URL_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_URL_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon",
      };
    case POKEMON_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokemonNameUrl]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PokemonUrlReducer;
