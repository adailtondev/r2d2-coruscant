import Logo from "../Logo/Logo";
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="flex justify-between w-auto navbar">
      <Logo />
      <ul className="flex gap-14 mr-[10rem] items-center justify-center">
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a href="#" className="text-white group-hover:text-gray-100">
            Ínicio
          </a>
        </li>
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-white group-hover:text-gray-100" href="#">
            Filmes
          </a>
        </li>
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-white group-hover:text-gray-100" href="#">
            Autor
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
