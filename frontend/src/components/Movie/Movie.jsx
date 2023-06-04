import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./Movie.css";

Movie.propTypes = {
  id: PropTypes.string,
};

function Movie() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://r2d2-3nrw.onrender.com/movies/${id}`).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => setMovie(json));
      }
    });
  }, [id]);

  const deleteMovie = async (data) => {
    const response = await fetch(
      `https://r2d2-3nrw.onrender.com/movies/${data.id}`,
      {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      }
    );

    if (response.status == 200) {
      navigate("/movies/");
    }
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <section className="w-[100vw]">
      <Navbar />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className="container grid grid-cols-3 mt-14 mr-0 p-24 items-center">
        <div className="col-span-1 text-center w-[32rem]  container-texto">
          <h1 className="text-slate-50 text-2xl font-bold mb-12">
            {movie.name}
          </h1>
          <p className="text-slate-300">{movie.description}</p>
        </div>
        <div className="col-span-2 ml-32 flex">
          <div className="z-10">
            <img
              className="h-[18rem] w-[em] object-cover"
              src={movie.img}
              alt=""
            />
          </div>
          <div>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-tooltip-content="Deletar filme do banco de dados"
              className="bg-transparent border-none text-2xl my-anchor-element"
              onClick={() => deleteMovie(movie)}
            >
              <Icon icon="material-symbols:delete" color="white" />
            </button>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-tooltip-content="Editar informações do filme"
              className="bg-transparent border-none text-2xl my-anchor-element"
              onClick={() => navigate(`/editfilm/${movie.id}`)}
            >
              <Icon
                icon="material-symbols:edit-document-outline"
                color="white"
              />
            </button>
            <Tooltip
              place="bottom"
              effect="solid"
              type="info"
              anchorSelect=".my-anchor-element"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Movie;
