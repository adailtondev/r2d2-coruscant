import Navbar from "../components/Navbar/Navbar";
import Sobre from "../components/Sobre/Sobre";
import Curiosidades from "../components/Curiosidades/Curiosidades";
import "../../index.css";
import PropTypes from "prop-types";

Home.propTypes = {
  movies: PropTypes.array,
};

function Home() {
  return (
    <>
      <section className="page ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <section className="navbar w-fit">
          <Navbar />
        </section>
        <section className="flex justify-center container-curiosidades w-screen">
          <Curiosidades />
        </section>
        <section className="flex justify-center w-[100%]">
          <Sobre />
        </section>
      </section>
    </>
  );
}

export default Home;
