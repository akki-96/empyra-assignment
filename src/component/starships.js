import React, { useEffect } from "react";
import "../App.css"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"

function Starships(props) {

    const store = useSelector((store) => store);
    useEffect(()=>{
        const starshipList = store.starshipList;
        props.setStarshipListArr(starshipList);
    },[store.starshipList])

    let pathId = window.location.pathname.split("/")[2]
    let filteredData = props.starships && 
      props.starships.length > 0 && 
      props.starships.filter((item) => item.episode_id == pathId);
    let starshipsList = filteredData && filteredData[0].starships
    return (
        <div className="characters-container">
           <div className="char-heading">
             Starships
           </div>
           <div className="char-list">
             {starshipsList && 
              starshipsList.length && 
              starshipsList.map((item, idx)=> {
                return ( 
                <Link to={`/starships-details/${idx+1}`}>
                 <div className="char-card" onClick={() => props.handleStarDetails(item)}>
                  <div>
                   <img
                    className="charIcon"
                    src="https://cdn2.iconfinder.com/data/icons/future-of-technology-2/340/space_spaceship_ship_science_technology_star_universe_shuttle-512.png"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Starships - {idx + 1}
                  </div>
                 </div>
                </Link>
                )
             })}
           </div>
        </div>
    )
}

export default Starships