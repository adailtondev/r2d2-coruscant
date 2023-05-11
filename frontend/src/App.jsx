import { useState, useEffect } from "react";
import Filme from "./components/Filme/Filme";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);

  return (
    <>
      <Navbar />
      <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
        {movies.map((movie) => (
          <Filme key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}

export default App;
