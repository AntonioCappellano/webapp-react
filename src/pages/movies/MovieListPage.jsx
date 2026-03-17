import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);

  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios.get("http://localhost:3000/movies").then((res) => {
      setMovies(res.data.result);
    });
  }

  return (
    <>
      <h1>Catalogo Film</h1>
      <MovieList movies={movies} />
    </>
  );
}
