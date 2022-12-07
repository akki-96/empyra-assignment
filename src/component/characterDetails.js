import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

function CharacterDetails(props) {
   const detailList =  props.detailList;
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
            src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
            alt="User Icon"
            />
          </div>
          <div className="personalDetails"><span className="nameDetails">Name - {detailList && detailList.name}</span></div>
          <div className="detailsGroup">
            <div className="personalDetails">DOB - {detailList && detailList.birth_year}</div>
            <div className="personalDetails">Gender - {detailList && detailList.gender}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Height - {detailList && detailList.height}</div>
            <div className="personalDetails">Weight - {detailList && detailList.mass}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Skin color - {detailList && detailList.skin_color}</div>
            <div className="personalDetails">Eye color - {detailList && detailList.eye_color}</div>
          </div>
          <div className="personalDetails">Hair color - {detailList && detailList.hair_color}</div>
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
        detailList.species &&
        detailList.species.length > 0 && ( 
        <div className="characters-container">
           <div className="char-heading">
             Species
           </div>
           <div className="char-list">
             {detailList && 
              detailList.species &&
              detailList.species.length > 0 && 
              detailList.species.map((item,idx)=> {
                return ( 
                // <Link to={`/species-details/${idx+1}`}>
                 <div className="char-card">
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
                // </Link>
                )
             })}
           </div>
        </div>
        )}
        {detailList && 
         detailList.starships &&
         detailList.starships.length > 0 && (
         <div className="characters-container">
           <div className="char-heading">
             Starships
           </div>
           <div className="char-list">
             {detailList && 
              detailList.starships &&
              detailList.starships.length > 0 && 
              detailList.starships.map((item,idx)=> {
                return ( 
                // <Link to={`/starships-details/${idx+1}`}>
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
                // </Link>
                )
             })}
           </div>
        </div>
        )}
        {detailList && 
         detailList.vehicles &&
         detailList.vehicles.length > 0 && (
         <div className="characters-container">
           <div className="char-heading">
             Vehicles
           </div>
           <div className="char-list">
             {detailList && 
              detailList.vehicles &&
              detailList.vehicles.length > 0 && 
              detailList.vehicles.map((item,idx)=> {
                return ( 
                // <Link to={`/vehicles-details/${idx+1}`}>
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

export default CharacterDetails