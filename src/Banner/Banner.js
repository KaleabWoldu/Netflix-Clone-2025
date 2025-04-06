import React, { useEffect, useState } from 'react';
import axios from "../utils/axios"
import requests from "../utils/requests";
import "./Banner.css"

const Banner = () => {
     const [movie, setMovie] = useState({});
     useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log(error);
            }
        })()
     },[]);

     const truncate = (string, n) => {
       return string?.length > n ? string.substr(0, n - 1) + "..." : string;
     };
     
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        // backgroundImage: movie?.backdrop_path
        //   ? `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`
        //   : "url('/fallback-image.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </div>
  );
}

export default Banner
