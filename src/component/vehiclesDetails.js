import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

function VehiclesDetails(props) {
   const detailList =  props.detailList;
   console.log("akkkkk specee",detailList)
   return (
    <div>
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
         <div className="autoScrollClass">
         <div className="char-details-card">
         <div className="char-card-sub">
          <div>
            <img
            className="charIconDetails"
            src="https://th.bing.com/th/id/OIP.DVsDW3YofGyI19-9NDwSnwHaHa?pid=ImgDet&rs=1"
            alt="User Icon"
            />
          </div>
          <div className="personalDetails"><span className="nameDetails">Name - {detailList && detailList.name}</span></div>
          <div className="detailsGroup">
            <div className="personalDetails">Cargo Capacity - {detailList && detailList.cargo_capacity}</div>
            <div className="personalDetails">Vehicle Class - {detailList && detailList.vehicle_class}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Consumable - {detailList && detailList.consumables}</div>
            <div className="personalDetails">Cost in Credits - {detailList && detailList.cost_in_credits}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Crew - {detailList && detailList.crew}</div>
            <div className="personalDetails">Hyperdrive Rating - {detailList && detailList.hyperdrive_rating}</div>
          </div>
          <div className="detailsGroup">
          <div className="personalDetails">Length - {detailList && detailList.length}</div>
          <div className="personalDetails">Manufacturer - {detailList && detailList.manufacturer}</div>
          </div>
          <div className="detailsGroup">
          <div className="personalDetails">Max Atmospheric Speed - {detailList && detailList.max_atmosphering_speed}</div>
          <div className="personalDetails">Model - {detailList && detailList.model}</div>
          </div>
          <div className="detailsGroup">
          <div className="personalDetails">Passengers - {detailList && detailList.passengers}</div>
          </div>
        </div>
        </div>
        {detailList && 
         detailList.films &&
         detailList.films.length > 0 && (
         <div className="characters-container">
           <div className="char-heading">
             Films
           </div>
           <div className="char-list">
             {detailList && 
              detailList.films &&
              detailList.films.length > 0 && 
              detailList.films.map((item,idx)=> {
                return ( 
                // <Link to={`/character-details/${idx+1}`}>
                 <div className="char-card">
                  <div>
                   <img
                    className="charIcon"
                    src="https://cdn2.iconfinder.com/data/icons/photo-and-video-ui/140/_video-512.png"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Films - {idx + 1}
                  </div>
                 </div>
                // </Link>
                )
             })}
           </div>
        </div>
        )}
        {detailList && 
        detailList.pilots &&
        detailList.pilots.length > 0 && ( 
        <div className="characters-container">
           <div className="char-heading">
            Pilots
           </div>
           <div className="char-list">
             {detailList && 
              detailList.pilots &&
              detailList.pilots.length > 0 && 
              detailList.pilots.map((item,idx)=> {
                return ( 
                // <Link to={`/species-details/${idx+1}`}>
                 <div className="char-card">
                  <div>
                   <img
                    className="charIcon"
                    src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Pilots - {idx + 1}
                  </div>
                 </div>
                // </Link>
                )
             })}
           </div>
        </div>
        )}
        </div>
       </div>
   )

}

export default VehiclesDetails