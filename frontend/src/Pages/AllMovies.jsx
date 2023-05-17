import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);
  return (
    <section className="">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="flex justify-center items-center mt-24 mb-12">
        <h1 className="text-slate-50">
          Todos os filmes da franquia Star Wars:
        </h1>
      </div>
      <div>
        <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
          {movies.map((movie) => (
            <Link key={movie.id} to={movie.id}>
              <Card key={movie.id} movie={movie} />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AllMovies;
