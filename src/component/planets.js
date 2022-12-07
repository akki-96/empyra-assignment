import React, { useEffect } from "react";
import "../App.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Planets(props) {
    const store = useSelector((store) => store);
    useEffect(()=>{
        const planetList = store.planetList;
        props.setPlanetListArr(planetList);
    },[store.planetList])

    let pathId = window.location.pathname.split("/")[2]
    let filteredData = props.planets && 
     props.planets.length > 0 && 
     props.planets.filter((item) => item.episode_id == pathId);
    let planetsList = filteredData && filteredData[0].planets
    return (
        <div className="characters-container">
           <div className="char-heading">
             Planets
           </div>
           <div className="char-list">
             {planetsList && 
              planetsList.length && 
              planetsList.map((item, idx)=> {
              return ( 
                <Link to={`/planets-details/${idx+1}`}>
                 <div className="char-card" onClick={() => props.handlePlanetsDetails(item)}>
                  <div>
                   <img
                    className="charIcon"
                    src="https://th.bing.com/th/id/OIP.AVKHnnekcSYE15YOvJW-HQHaG_?pid=ImgDet&rs=1"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Planets - {idx + 1}
                  </div>
                  </div>
                </Link>
                )
             })}
           </div>
        </div>
    )
}

export default Planets