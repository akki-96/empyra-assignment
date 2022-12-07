import React, {useEffect} from "react";
import "../App.css"
import { useSelector }  from "react-redux"
import {Link } from "react-router-dom"

function Vehicles(props) {

    const store = useSelector((store) => store);
    useEffect(()=>{
        const vehiclesList = store.vehiclesList;
        props.setVehiclesListArr(vehiclesList);
    },[store.vehiclesList])


    let pathId = window.location.pathname.split("/")[2]
    let filteredData = props.vehicles && 
     props.vehicles.length > 0 && 
     props.vehicles.filter((item) => item.episode_id == pathId);
    let vehiclesList = filteredData && filteredData[0].vehicles
    return (
        <div className="characters-container">
           <div className="char-heading">
             Vehicles
           </div>
           <div className="char-list">
             {vehiclesList && 
              vehiclesList.length > 0 && 
              vehiclesList.map((item,idx)=> {
                return ( 
                <Link to={`/vehicles-details/${idx+1}`}>
                 <div className="char-card" onClick={() => props.handleVehiclesDetails(item)}>
                  <div>
                   <img
                    className="charIcon"
                    src="https://th.bing.com/th/id/OIP.DVsDW3YofGyI19-9NDwSnwHaHa?pid=ImgDet&rs=1"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Vehicles - {idx + 1}
                  </div>
                 </div>
                </Link>
                )
             })}
           </div>
        </div>
    )
}

export default Vehicles