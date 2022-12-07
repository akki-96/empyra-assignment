import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Card(props) {
  const usersDetailsHandler = () => {
    return props.movieList.map((item, idx) => {
      return (
        <Link to={`/list/${idx+1}`}>
        <div className="cards" key={idx}>
          <div>
            <img
              className="userIcon"
              src="https://cdn2.iconfinder.com/data/icons/photo-and-video-ui/140/_video-512.png"
              alt="User Icon"
            />
          </div>
          <div className="detail-container">
            <div className="card-details film-title">
              Title - {item.title}
            </div>
            <div className="card-details director">
              Director - {item.director}
            </div>
            <div className="card-details director">
              Producer - {item.producer}
            </div>
            <div className="card-details director">
              Episode - {item.episode_id}
            </div>
            <div className="card-details director">
              Release Date - {item.release_date}
            </div>
            <div className="card-details desc">
              {item.opening_crawl}
            </div>
          </div>
        </div>
        </Link>
      );
    });
  };

  return <div className={"card-container"}>{usersDetailsHandler()}</div>;
}

export default Card;
