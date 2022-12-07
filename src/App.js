import './App.css';
import React , { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getMovieList, getCharList, getPlanetsList, getSpeciesList, getStarList, getVehiclesList } from "./redux/action";
import Card from './component/card';
import Header from './component/header';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MovieList from './component/movieList';
import CharacterDetails from './component/characterDetails';
import PlanetsDetails from './component/planetsDetails';
import SpeciesDetails from "./component/speciesDetails";
import StarshipsDetails from "./component/starshipsDetails";
import VehiclesDetails from "./component/vehiclesDetails";

function App() {

  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  useEffect(() => {
    getMovieList(dispatch);
  }, []);
  
  const [charListArr, setCharList] = useState();
  const [planetListArr, setPlanetListArr] = useState();
  const [speciesListArr, setSpeciesListArr] = useState();
  const [starshipListArr, setStarshipListArr] = useState();
  const [vehiclesListArr, setVehiclesListArr] = useState();

  const handleCharDetails = (url) =>{
    getCharList(dispatch,url)
  }

  const handlePlanetsDetails = (url) =>{
    getPlanetsList(dispatch, url)
  }

  const handleSpeciesDetails = (url) =>{
    getSpeciesList(dispatch, url)
  }

  const handleStarDetails = (url) =>{
    getStarList(dispatch, url)
  }

  const handleVehiclesDetails = (url) =>{
    getVehiclesList(dispatch, url)
  }

  const movieList = store.movieList;
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
            <React.Fragment>
             <Header />
             <Card 
              movieList={movieList}
             />
            </React.Fragment>
            }
          />
          <Route exact path="/list/:id" element={
           <MovieList  
             movieList={movieList} 
             handleCharDetails={handleCharDetails} 
             handlePlanetsDetails={handlePlanetsDetails}
             handleVehiclesDetails={handleVehiclesDetails}
             handleStarDetails={handleStarDetails}
             handleSpeciesDetails={handleSpeciesDetails}
             setPlanetListArr={setPlanetListArr}
             setSpeciesListArr={setSpeciesListArr}
             setStarshipListArr={setStarshipListArr}
             setVehiclesListArr={setVehiclesListArr}
             setCharList={setCharList}
             />
            } 
          />
          <Route
            exact
            path={"/character-details/:id"}
            element={
              <CharacterDetails detailList={charListArr}/>
            }
          />
          <Route
            exact
            path={"/planets-details/:id"}
            element={
              <PlanetsDetails detailList = {planetListArr}/>
            }
          />
          <Route
            exact
            path={"/species-details/:id"}
            element={
              <SpeciesDetails detailList = {speciesListArr}/>
            }
          />
          
          <Route
            exact
            path={"/starships-details/:id"}
            element={
              <StarshipsDetails detailList = {starshipListArr}/>
            }
          />
          <Route
            exact
            path={"/vehicles-details/:id"}
            element={
              <VehiclesDetails detailList = {vehiclesListArr}/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
