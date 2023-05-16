import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from './Pages/Movie'
import Create from "./Pages/Create";
import AllMovies from "./Pages/AllMovies";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies/:id" element={<Movie />}/>
          <Route path='/create/' element={<Create />} />
          <Route path='/movies' element={<AllMovies/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
