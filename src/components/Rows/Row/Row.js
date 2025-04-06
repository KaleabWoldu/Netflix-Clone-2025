import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
// import Youtube from "react-youtube";
import YouTube from "react-youtube";

const Row = ({ title, url, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  // const {trailerUrl, setTrailerUrl} = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  const singleImage = "https://image.tmdb.org/t/p/original";
  
  useEffect(() => {
    async function data() {
      try {
        const response = await axios.get(url);
        setMovie(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, [url]);
  console.log(movie);

// const handleClick = (movie) => {
//   if (trailerUrl) {
//     setTrailerUrl('')
//   } else {
//     movieTrailer(movie?.title || movie?.name || movie?.original_name)
//     .then((url) => {
//       console.log(url);
//       const urlParams = new URLSearchParams(new URL(url).search)
//       console.log(urlParams);
//       console.log(urlParams.get('v'));
//       setTrailerUrl(urlParams.get("v"));
//     })
//   }
// }
const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
        console.log("Returned URL:", url);

        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        } else {
          console.warn("No trailer URL found");
        }
      })
      .catch((error) => console.error("Trailer fetch failed:", error));
  }
};

const opts = {
  height: '390',
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
}


  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${singleImage}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster & {isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {/* {trailerUrl && <YouTube videoID={trailerUrl} opts={opts}/>} */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;


