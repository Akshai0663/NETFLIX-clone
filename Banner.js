import React, { useEffect, useState } from 'react'
import { API_KEY,imageurl } from '../../Constant/Constant'
import './Banner.css';
import axios from '../../Axios'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respone)=>{
    const movies = respone.data.results;
        const randomMovie = movies[(movies.length * Math.random()) | 0];
        setMovie(randomMovie);
  })
}, [])

  return (
    <div
      style={{backgroundImage: `url(${movie ? imageurl+movie.backdrop_path : ''})`}}
     className='banner'>
      <div className='content'>
       <h1 className='title'>{movie ? movie.title || movie.name : 'Loading...'}</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='discription'> {movie ? movie.overview : ''} </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
