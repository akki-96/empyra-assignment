import React from "react";
import {Link} from "react-router-dom"
import "../App.css"
import Characters from "./characters";
import Planets from "./planets";
import Species from "./species";
import Starships from "./starships";
import Vehicles from "./vehicles";

function MovieList(props) {
  return (
    <div className="movie-list-container">
         <div className="header">
         <Link to="/">
          <div className="imgContainers">
           <img className="movieIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MGm22wfxciun9fod1tuR0908e92Fn9ryCoohMGwx6Q&s" />
          </div>
          </Link>
          <div  className="imgContainer">
           <img className="movieIcons" src="https://cdn2.iconfinder.com/data/icons/photo-and-video-ui/140/_video-512.png" />
          </div>
         </div>
         <div className="movie-list-subcontainer">
            <Characters 
             characters={props.movieList} 
             handleCharDetails={props.handleCharDetails} 
             setCharList={props.setCharList}
            />
            <Planets 
             planets={props.movieList} 
             handlePlanetsDetails={props.handlePlanetsDetails} 
             setPlanetListArr={props.setPlanetListArr}
            />
            <Species 
             species={props.movieList} 
             handleSpeciesDetails={props.handleSpeciesDetails} 
             setSpeciesListArr={props.setSpeciesListArr}
            />
            <Starships 
             starships={props.movieList}  
             handleStarDetails={props.handleStarDetails} 
             setStarshipListArr={props.setStarshipListArr}
            />
            <Vehicles 
             vehicles={props.movieList} 
             handleVehiclesDetails={props.handleVehiclesDetails} 
             setVehiclesListArr={props.setVehiclesListArr}
            />
         </div>
    </div>
  )
}

export default MovieList