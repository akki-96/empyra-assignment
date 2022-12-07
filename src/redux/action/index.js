import { MOVIE_LIST, CHAR_LIST, PLANET_LIST, SPECIES_LIST, STARSHIP_LIST, VEHICLES_LIST } from "../constant"


export const  getMovieList = (dispatch) => {
    try {
      fetch("https://swapi.dev/api/films/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: MOVIE_LIST,
            payload: data.results,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  export const  getCharList = (dispatch,url) => {
    try {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: CHAR_LIST,
            payload: data,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  export const  getPlanetsList = (dispatch,url) => {
    try {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: PLANET_LIST,
            payload: data,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  export const  getSpeciesList = (dispatch,url) => {
    try {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: SPECIES_LIST,
            payload: data,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  export const  getStarList = (dispatch,url) => {
    try {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: STARSHIP_LIST,
            payload: data,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  export const  getVehiclesList = (dispatch,url) => {
    try {
      fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((value) => value.json())
        .then((data) => {
          dispatch({
            type: VEHICLES_LIST,
            payload: data,
          }) 
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };