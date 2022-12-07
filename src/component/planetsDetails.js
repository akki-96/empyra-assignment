import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

function PlanetsDetails(props) {
   const detailList =  props.detailList;
   console.log("akkkkk pla",detailList)
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
            src="https://th.bing.com/th/id/OIP.AVKHnnekcSYE15YOvJW-HQHaG_?pid=ImgDet&rs=1"
            alt="User Icon"
            />
          </div>
          <div className="personalDetails"><span className="nameDetails">Name - {detailList && detailList.name}</span></div>
          <div className="detailsGroup">
            <div className="personalDetails">Climate - {detailList && detailList.climate}</div>
            <div className="personalDetails">Diameter - {detailList && detailList.diameter}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Gravity - {detailList && detailList.gravity}</div>
            <div className="personalDetails">Orbital Period - {detailList && detailList.orbital_period}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Population - {detailList && detailList.population}</div>
            <div className="personalDetails">Rotation Period - {detailList && detailList.rotation_period}</div>
          </div>
          <div className="detailsGroup">
          <div className="personalDetails">Terrain - {detailList && detailList.terrain}</div>
          <div className="personalDetails">Surface Water - {detailList && detailList.surface_water}</div>
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
        detailList.residents &&
        detailList.residents.length > 0 && ( 
        <div className="characters-container">
           <div className="char-heading">
             Residents
           </div>
           <div className="char-list">
             {detailList && 
              detailList.residents &&
              detailList.residents.length > 0 && 
              detailList.residents.map((item,idx)=> {
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
                    People - {idx + 1}
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

export default PlanetsDetails