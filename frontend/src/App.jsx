import { useState, useEffect } from "react";
import Filme from "./components/Filme/Filme";
import Navbar from "./components/Navbar/Navbar";
import Sobre from "./components/Sobre/Sobre";
import Curiosidades from "./components/Curiosidades/Curiosidades";
import './index.css'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);

  return (
    <>
      <section className="page">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <section className="navbar">
          <Navbar />
        </section>
        <section className="flex justify-center">
          <Curiosidades />
        </section>
        <section>
          <Sobre />
        </section>

        <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
          {movies.map((movie) => (
            <Filme key={movie.id} movie={movie} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
