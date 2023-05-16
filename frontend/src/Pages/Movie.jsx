import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.string,
};

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://r2d2-3nrw.onrender.com/movies/${id}`).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => setMovie(json));
      } else {
      }
    });
  }, [id]);

  return (
    <div>
      <section className="grid grid-cols-2 p-24 items-center">
        <div className="col-span-1 text-center">
          <h1 className="text-slate-50 mb-24">{movie.name}</h1>
          <p className="text-slate-300">
            Uma curiosidade interessante sobre o filme A Ameaça Fantasma é que
            o personagem Darth Maul foi originalmente concebido como um vilão
            menor, mas sua popularidade acabou levando a uma expansão de seu
            papel e presença na história.
          </p>
        </div>
        <div className="col-span-1 ml-32">
            <img src={movie.img} alt="" />
        </div>
      </section>
      
    </div>
  );
}

export default Movie;
