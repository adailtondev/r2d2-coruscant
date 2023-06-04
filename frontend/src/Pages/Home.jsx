import Navbar from "../components/Navbar/Navbar";
import Sobre from "../components/Sobre/Sobre";
import Curiosidades from "../components/Curiosidades/Curiosidades";
import "../../index.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

Home.propTypes = {
  movies: PropTypes.array,
};

function Home() {
  const navigate = useNavigate();
  return (
    <section className="w-[100%]">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="flex justify-center w-[100%] flex-wrap items-center mt-20">
        <Curiosidades />
        <div className="w-[420px]">
          <Carousel autoPlay={true} interval={3000} showStatus={false} showThumbs={false} infiniteLoop={true}>
            <div className="text-gray-100 text-center bg-gradient-to-tl h-[450px] from-cyan-900 to-black flex flex-col items-center p-9 rounded-lg">
              <h2 className="text-xl mb-10">
                Deseja ver a lista completa de filmes e seus detalhes?
              </h2>
              <img src="https://img.olhardigital.com.br/wp-content/uploads/2023/03/Star-Wars.jpg" alt="" className="h-[200px]"/>
              <button className="mt-8 cursor-pointer text-center w-[70%] px-10 py-3 rounded-lg mb-16 bg-gray-300 text-black hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ease-in duration-300" onClick={() => navigate('/movies')}>Clique aqui!</button>
            </div>
            <div className="text-gray-100 text-center bg-gradient-to-tl h-[450px] from-cyan-900 to-black flex flex-col items-center p-9 rounded-lg ">
              <h2 className="text-xl mb-10">Deseja conhecer mais sobre o autor da série?</h2>
              <img src="https://www.suno.com.br/wp-content/uploads/2021/06/George_Lucas-2.jpg" alt="" className="h-[200px] object-cover"/>
              <button className="mt-8 cursor-pointer text-center w-[70%] px-10 py-3 rounded-lg  bg-gray-300 text-black hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ease-in duration-300" onClick={() => navigate('/author')}>Clique aqui!</button>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center w-[100%]">
        <Sobre />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
