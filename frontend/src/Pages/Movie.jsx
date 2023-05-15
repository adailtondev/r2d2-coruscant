function Movie () {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://r2d2-3nrw.onrender.com/movies/${id}`).then((response) =>{
        if (response.status == 200) {
            response.json().then((json) => setMovies(json))
        } else {

        }
    }
    );
  }, {id});

  return (
    <div>
        <img src={movies.img} alt="" />
    </div>
  )
}

export default Movie