import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import PageCard from "../components/PageCard/PageCard";
import PageCarousel from "../components/PageCarousel/PageCarousel";
import MoonLoader from "react-spinners/MoonLoader";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AllMovies() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const [optionsButton, setoptionsButton] = useState("carrossel");

  const handleSelectView = (event) => {
    setoptionsButton(event.target.value);
  };

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) => {
      if (response.status == 200) {
        response.json().then((json) => setMovies(json));
        setLoading(false);
      } else {
      }
    });
    setLoading(true);
  }, []);

  return (
    <div>
      {loading ? (
        <section>
          <Navbar />
          <div className="flex items-center justify-center h-[80vh] flex-col">
            <h2 className="text-slate-50 mb-10">Carregando...</h2>
            <MoonLoader color="#36d7b7" size={40} />
          </div>
        </section>
      ) : (
        <section className="">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <Navbar />
          <div className="flex justify-center items-center mt-24 mb-12">
            <h1 className="text-slate-50 text-3xl text-center">
              Todos os filmes da franquia Star Wars:
            </h1>
          </div>
          <div className="flex justify-center items-center flex-col mb-10">
            <p className="text-slate-50 mb-2">Opções de visualização: </p>
            <select
              value={optionsButton}
              onChange={handleSelectView}
              className="bg-cyan-900 text-slate-50 rounded-3xl p-2 text-center"
            >
              <option value="carrossel">Carrossel</option>
              <option value="grid">Grid</option>
            </select>
          </div>
          <div className="">
            {optionsButton === "carrossel" ? <PageCarousel /> : <PageCard />}
          </div>
          <div className="relative create-movie">
            <div className="absolute top-0 right-12 text-slate-50 text-center ">
              <h4 className="mb-4 text-xs">Sentiu falta de algum filme?</h4>
              <button className="text-sm cursor-pointer px-5 py-2 rounded-lg bg-gray-300 text-black hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ease-in duration-300" onClick={() => navigate('/create')}>
                Clique aqui para adicionar!
              </button>
            </div>
          </div>

          <Footer />
        </section>
      )}
    </div>
  );
}

export default AllMovies;
