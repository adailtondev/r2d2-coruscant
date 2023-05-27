import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

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
  

  return (
    <section>
      <Navbar />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <section className="grid grid-cols-3 m-0 p-24 items-center">
        <div className="col-span-1 text-center w-[32rem]">
          <h1 className="text-slate-50 mb-12">{movie.name}</h1>
          <p className="text-slate-300">
            {movie.description}
          </p>
        </div>
        <div className="col-span-2 ml-32 h-[] w-[] flex">
          <div className="z-10">
            <img className="h-[18rem] w-[em] object-cover" src={movie.img} alt="" />
          </div>
          <div className="flex items-start ">
            <button
              className="bg-transparent border-none text-2xl"
              onClick={() => deleteMovie(movie)}
            >
              <Icon icon="material-symbols:delete" color="white" />
            </button>
            <button
              className="bg-transparent border-none text-2xl "
              onClick={() => navigate(`/editfilm/${movie.id}`)}
            >
              <Icon
                icon="material-symbols:edit-document-outline"
                color="white"
              />
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </div>
      </section>
    </section>
  );
}

export default Movie;
