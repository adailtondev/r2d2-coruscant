import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import PageCard from "../components/PageCard/PageCard";
import PageCarousel from "../components/PageCarousel/PageCarousel";

function AllMovies() {
  const [movies, setMovies] = useState([]);

  const [optionsButton, setoptionsButton] = useState("carrossel");

  const handleSelectView = (event) => {
    setoptionsButton(event.target.value);
  };

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);

  return (
    <section className="w-screen">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="flex justify-center items-center mt-24 mb-12">
        <h1 className="text-slate-50">
          Todos os filmes da franquia Star Wars:
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col mb-10">
        <h4 className="text-slate-50 mb-2">Opções de visualização: </h4>
        <select value={optionsButton} onChange={handleSelectView} className="bg-cyan-900 text-slate-50 rounded-3xl p-2">
          <option value="carrossel">Carrossel</option>
          <option value="grid">Grid</option>
        </select>
      </div>
      <div>
        {optionsButton === "carrossel" ? <PageCarousel /> : <PageCard />}
      </div>
    </section>
  );
}

export default AllMovies;
