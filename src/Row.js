import React, { useEffect, useState } from 'react';
import "./Row.css";
import axois from './axios';
// axios can be named anything here while importing as default export is used in axios.js
function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        
        async function fetchData(){
            const request = await axois.get(fetchUrl);
            const moviesData = request.data.results;
            setMovies(moviesData);
            return request;
        }
        fetchData();
    },[fetchUrl])

    // console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
            {/* container -> posters */}
            {movies.map(movie =>(
                <img
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src= {`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name} />
            ))}
        </div>
        
    </div>
  )
} 

export default Row;