import { MOVIE_LIST, CHAR_LIST, PLANET_LIST, SPECIES_LIST, STARSHIP_LIST, VEHICLES_LIST } from "../constant";

const initialState = {
    movieList: [],
    charList:[],
    planetList:[],
    speciesList:[],
    starshipList:[],
    vehiclesList:[],
    isLoading: false
}

const reducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case MOVIE_LIST:
            return {
                ...state,
                movieList: payload
            }   
        case CHAR_LIST: 
            return {
              ...state,
              charList: payload
            }    
        case PLANET_LIST: 
           return {
            ...state,
              planetList: payload
           }  
        case SPECIES_LIST: 
           return {
            ...state,
            speciesList: payload
           }    
        case STARSHIP_LIST: 
           return {
            ...state,
            starshipList: payload
           } 
        case VEHICLES_LIST: 
           return {
            ...state,
            vehiclesList: payload
           }
       default: return {
          ...state
       }
    }
}

export default reducer;