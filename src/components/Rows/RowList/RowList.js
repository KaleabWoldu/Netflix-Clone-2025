import React from 'react'
import Row from "../Row/Row"
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        url={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" url={requests.fetchTrending} />
      <Row title="Top-rated" url={requests.fetchTopRatedMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Tv Shows" url={requests.fetchTVShow} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList
