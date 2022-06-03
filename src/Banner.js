import React, { useEffect, useState } from 'react';
import axois from './axios';
import "./Banner.css";
import requests from './requests';
// axios can be named anything here while importing as default export is used in axios.js

function Banner() {
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        
        async function fetchData(){
            const request = await axois.get(requests.fetchNetflixOriginals);
            // console.log(props.fetchUrl);
            // a=(request.data.results);
            const movieList = request.data.results;
            const movieForBanner = movieList[Math.floor(Math.random()*movieList.length - 1)];
            setMovie(movieForBanner);
            return request;
        }
        fetchData();
    },[])

    const truncate=(n)=>{
        let str = movie?.overview;
        console.log(str);
        return str.length > n ? str.substr(0,n-1) + "..." : str;
    }    
console.log(movie);

  return (
    <header
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
    }}
    className='banner'> 
        <div className="banner_contents">
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {movie?.overview}
                {/* {truncate(movie?.overview,500)} */}
                </h1>
        </div>
       
    </header>
  )
}

export default Banner;