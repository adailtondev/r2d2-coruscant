import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

function PageCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);
  return (
    <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
      {movies.map((movie) => (
        <Link key={movie.id} to={movie.id}>
          <Card key={movie.id} movie={movie} />
        </Link>
      ))}
    </ul>
  );
}

export default PageCard