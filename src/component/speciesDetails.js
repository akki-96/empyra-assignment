import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

function SpeciesDetails(props) {
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
            src="https://cdn3.iconfinder.com/data/icons/ecological-interaction-flat/64/evolution-diversity-species-organism-animal-512.png"
            alt="User Icon"
            />
          </div>
          <div className="personalDetails"><span className="nameDetails">Name - {detailList && detailList.name}</span></div>
          <div className="detailsGroup">
            <div className="personalDetails">Average Height - {detailList && detailList.average_height}</div>
            <div className="personalDetails">Average Lifespan - {detailList && detailList.average_lifespan}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Designation - {detailList && detailList.designation}</div>
            <div className="personalDetails">Eye Color - {detailList && detailList.eye_colors}</div>
          </div>
          <div className="detailsGroup">
            <div className="personalDetails">Hair Color - {detailList && detailList.hair_colors}</div>
            <div className="personalDetails">Classification - {detailList && detailList.classification}</div>
          </div>
          <div className="detailsGroup">
          <div className="personalDetails">Language - {detailList && detailList.language}</div>
          <div className="personalDetails">Skin Color - {detailList && detailList.skin_colors}</div>
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
        detailList.people &&
        detailList.people.length > 0 && ( 
        <div className="characters-container">
           <div className="char-heading">
            People
           </div>
           <div className="char-list">
             {detailList && 
              detailList.people &&
              detailList.people.length > 0 && 
              detailList.people.map((item,idx)=> {
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

export default SpeciesDetails