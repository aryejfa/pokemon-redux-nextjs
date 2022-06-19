import {
  POKEMON_IMAGE_LOADING,
  POKEMON_IMAGE_FAIL,
  POKEMON_IMAGE_SUCCESS,
} from "../type/Type";

const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonMultipleImageReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case POKEMON_IMAGE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POKEMON_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon",
      };
    case POKEMON_IMAGE_SUCCESS:
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

export default PokemonMultipleImageReducer;
