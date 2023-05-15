import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from './Pages/Movie'


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<Movie />}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
