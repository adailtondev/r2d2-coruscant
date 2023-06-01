import Navbar from "../components/Navbar/Navbar";
import Sobre from "../components/Sobre/Sobre";
import Curiosidades from "../components/Curiosidades/Curiosidades";
import "../../index.css";
import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";

Home.propTypes = {
  movies: PropTypes.array,
};

function Home() {
  return (
    <section className="w-[98vw]">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="flex justify-center w-[98vw]">
        <Curiosidades />
      </div>
      <div className="flex justify-center w-[98vw]">
        <Sobre />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
