import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
    response.json().then((json) => setMovies(json))
    );
  }, []);
  
  return (
    <>
      <Apresentação />
      <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
        {movies.map((movie) => (
          <Filme key={movie.id} movie={movie} />
          ))}
      </ul>
    </>
  );
}

function Filme({ movie }) {
  let corFundo = "";
  let corSequencial = "";

  switch (movie.trilogy) {
    case "prequel":
      (corFundo = "bg-amber-100"), (corSequencial = "bg-amber-400");
      break;
    case "sequel":
      (corFundo = "bg-lime-100"), (corSequencial = "bg-lime-400");
      break;
    case "classic":
      (corFundo = "bg-teal-100"), (corSequencial = "bg-teal-400");
      break;
    case "spinoff":
      (corFundo = "bg-indigo-100"), (corSequencial = "bg-indigo-400");
      break;
    default:
  }
  console.log(movie.img)
  return (
    <li
      className={`flex flex-col w-64 h-[30rem] items-center text-slate-100 hover:text-slate-800 group justify-center gap-6 text-center rounded-md bg-gray-600 hover:${corFundo}`}
    >
      <h1 className="text-lg h-6 mb-1  font-bold ">{movie.name}</h1>
      <img className="w-40 h-60" src={movie.img} alt="" />
      <h3 className={` ${corSequencial} w-fit rounded-md p-1 `}>
        {movie.trilogy}
      </h3>
      <span className=" ">sequencial: {movie.sequential}</span>
      <span className="text-xl  ">{movie.year}</span>
    </li>
  );
}

function Apresentação() {
  return (
    <div className="flex justify-center rounded-md">
      <h1 className="text-center text-6xl bg-gray-600 w-fit p-6 text-slate-100 m-2 mb-8 rounded-md">
        Todos os filmes da franquia Star Wars:
      </h1>
    </div>
  );
}
export default App;
