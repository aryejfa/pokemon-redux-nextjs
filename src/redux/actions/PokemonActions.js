import axios from "axios";
import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAIL,
  POKEMON_IMAGE_LOADING,
  POKEMON_IMAGE_SUCCESS,
  POKEMON_IMAGE_FAIL,
  POKEMON_MULTIPLE_SPECIES_LOADING,
  POKEMON_MULTIPLE_SPECIES_SUCCESS,
  POKEMON_MULTIPLE_SPECIES_FAIL,
  POKEMON_URL_LOADING,
  POKEMON_URL_SUCCESS,
  POKEMON_URL_FAIL,
} from "../type/Type";

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_LIST_LOADING,
    });

    const perPage = 20;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_LIST_FAIL,
    });
  }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_MULTIPLE_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_MULTIPLE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_MULTIPLE_FAIL,
    });
  }
};

export const GetPokemonImage = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_IMAGE_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_IMAGE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_IMAGE_FAIL,
    });
  }
};

export const GetPokemonSpecies = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_MULTIPLE_SPECIES_LOADING,
    });

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );

    dispatch({
      type: POKEMON_MULTIPLE_SPECIES_SUCCESS,
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_MULTIPLE_SPECIES_FAIL,
    });
  }
};

export const GetPokemonUrl = (url_pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: POKEMON_URL_LOADING,
    });

    const res = await axios.get(`${url_pokemon}`);

    dispatch({
      type: POKEMON_URL_SUCCESS,
      payload: res.data,
      pokemonNameUrl: url_pokemon,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_URL_FAIL,
    });
  }
};
