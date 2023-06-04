import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './PageCarousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function PageCarousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r2d2-3nrw.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);
  return (
    <div className=" slider-container ">
      <Carousel className="carousel-style " autoPlay={true} interval={3000} showStatus={false} showThumbs={false} infiniteLoop={true}>
        {movies.map((movie) => (
          <Link key={movie.id} to={movie.id}>
            <div>
              <img className="" src={movie.img} alt="" />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default PageCarousel;
