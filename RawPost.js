import React, { useEffect, useState } from 'react'
import './RawPost.css'
import axios from '../../Axios'
import { imageurl,API_KEY } from '../../Constant/Constant'
import YouTube from 'react-youtube'
function RawPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlid] = useState('')
  useEffect(() => {
   axios.get(props.url).then(respone=>{
    console.log(respone.data)
    setMovies(respone.data.results)
   }).catch(err=>{
     alert('network error')
   })
  },[props.url])
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      console.log(response.data)
      if (response.data.results.length!==0) {
        setUrlid(response.data.results[0])
      }
    })
    
  }
  return (
    <div className='raw'>
      <h2>{props.title}</h2>
      <div className="posters">
      {movies.map((obj)=> 
       <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small_poster': 'poster'} src={`${imageurl+obj.backdrop_path}`} alt="" />
        )}
      </div>
     {urlid &&  <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RawPost
