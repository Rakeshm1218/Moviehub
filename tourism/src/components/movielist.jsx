import React from "react"
// import './movielist.css'


const Movies = (props) => {
    return(
        <div className="movie-card">
            <div className="movie-img">
              <img src={props.image} alt="img"/>
            </div>
            <div className="movie-desc">
                <h3>{props.name}</h3>
                <button className="movie-btn" ><a href={props.trailer}>Watch Now</a></button>
            </div>
          </div>
    )
    
}

export default Movies


