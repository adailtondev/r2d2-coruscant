import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from './components/Movie/Movie'
import Create from "./Pages/Create";
import AllMovies from "./Pages/AllMovies";
import EditFilm from "./Pages/EditFilm";
import Author from "./Pages/Author";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies/:id" element={<Movie />}/>
          <Route path='/create/' element={<Create />} />
          <Route path='/movies' element={<AllMovies/>}/>
          <Route path='/editfilm/:id' element={<EditFilm/>}/>
          <Route path='/author' element={<Author/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
