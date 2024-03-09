import React from "react"
import Movies from '../components/movielist.jsx'

import img from '../assets/JP.jpg'
import img1 from '../assets/IM.jpg'
import img2 from '../assets/HULK.jpg'
import img3 from '../assets/SP.jpg'
import img4 from '../assets/WM.jpg'

const movielist = [
  {
    Name :"Jurassic Park",
    image : img,
    trailer : ""

  },
  {
    Name :"Iron Man",
    image : img1,
    trailer : ""

  },
  {
    Name :"Hulk",
    image : img2,
    trailer : ""

  },
  {
    Name :"Super Man",
    image : img3,
    trailer : ""

  },
  {
    Name :"Wonder Woman",
    image : img4,
    trailer : ""

  },

]
 



const Home = ()=>{
    return (
    <div className="page-wrapper">
      <div className="nav-container">
        <div className="nav">
          <div className="logo">
            <img className='nav-logo' src='' alt='logo'/>
          </div>
          <div className="search-bar">
            <input type="text"  className="search-input" />
          </div>
          <div className="nav-items">
          <a href="">Home</a>
          <a href="">Movies</a>
          </div>
        </div>
      </div>
      <div className="movie-section">
        <div className="moviecard-container">
        {
        movielist.map((movie) => {
          return(
            <Movies
            name = {movie.Name}
            image = {movie.image}
            trailer ={movie.trailer}/>
          )
        })
      }
        </div>
      </div>
      

    </div>
    
    
    
    )
    
}

export default Home