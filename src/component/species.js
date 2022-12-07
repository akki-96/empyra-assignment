import React,{ useEffect } from "react";
import "../App.css"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"

function Species(props) {

    const store = useSelector((store) => store);
    useEffect(()=> {
        const speciesList = store.speciesList;
        props.setSpeciesListArr(speciesList);
    }, [store.speciesList])

    let pathId = window.location.pathname.split("/")[2]
    let filteredData = props.species && 
      props.species.length > 0 && 
      props.species.filter((item) => item.episode_id == pathId);
    let speciesList = filteredData && filteredData[0].species
    return (
        <div className="characters-container">
           <div className="char-heading">
             Species
           </div>
           <div className="char-list">
             {speciesList && 
              speciesList.length && 
              speciesList.map((item,idx)=> {
                return ( 
                <Link to={`/species-details/${idx+1}`}>
                 <div className="char-card" onClick={() => props.handleSpeciesDetails(item)}>
                  <div>
                   <img
                    className="charIcon"
                    src="https://cdn3.iconfinder.com/data/icons/ecological-interaction-flat/64/evolution-diversity-species-organism-animal-512.png"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Species - {idx + 1}
                  </div>
                 </div>
                </Link>
                )
             })}
           </div>
        </div>
    )
}

export default Species