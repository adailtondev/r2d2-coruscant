import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex navbar justify-between">
      <img
        src="https://en.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png"
        alt=""
        className="w-[8%] h-[3%] mt-2 ml-16"
      />
      <ul className="flex gap-14 items-center justify-center mr-28">
        <Link to={"/"}>
          <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
            <a className="text-white group-hover:text-gray-100">Ínicio</a>
          </li>
        </Link>
        <Link to={"/movies"}>
          <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
            <a className="text-white group-hover:text-gray-100">Filmes</a>
          </li>
        </Link>
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-white group-hover:text-gray-100">Autor</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
