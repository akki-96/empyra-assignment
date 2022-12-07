import React from "react";
import "../App.css"

function Header() {
  return (
    <div className="header">
      <div className="imgContainer">
        <img className="movieIcon" src="https://cdn2.iconfinder.com/data/icons/photo-and-video-ui/140/_video-512.png" />
      </div>
      <span>Movie App</span>
    </div>
  );
}

export default Header;
