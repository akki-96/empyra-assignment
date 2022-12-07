import React, { useEffect } from "react";
import "../App.css"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"

function Characters(props) {
    const store = useSelector((store) => store);
    useEffect(()=>{
      const charList = store.charList;
      props.setCharList(charList);
    }, [store.charList])

    let pathId = window.location.pathname.split("/")[2]
    let filteredData = 
     props.characters && 
     props.characters.length > 0 && 
     props.characters.filter((item) => item.episode_id == pathId);
     
    let charactersList = filteredData && filteredData[0].characters

    return (
        <div className="characters-container">
           <div className="char-heading">
             Characters
           </div>
           <div className="char-list">
             {charactersList && 
              charactersList.length > 0 && 
              charactersList.map((item,idx)=> {
                return ( 
                <Link to={`/character-details/${idx+1}`}>
                 <div className="char-card" onClick={() => props.handleCharDetails(item)}>
                  <div>
                   <img
                    className="charIcon"
                    src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0"
                    alt="User Icon"
                   />
                  </div>
                  <div>
                    Characters - {idx + 1}
                  </div>
                 </div>
                </Link>
                )
             })}
           </div>
        </div>
    )
}

export default Characters