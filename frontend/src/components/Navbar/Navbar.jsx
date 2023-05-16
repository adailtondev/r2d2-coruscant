import './Navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className="flex navbar justify-between w-screen">
      <img src="https://assets.stickpng.com/thumbs/602bb8655c5b2300043add95.png" alt="" className='w-[10%] ml-16'/>
      <ul className="flex gap-14 items-center justify-center mr-28">
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer" >
          <a href="#" className="text-white group-hover:text-gray-100">
            Ínicio
          </a>
        </li>
        <li className="hover:bg-cyan-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-white group-hover:text-gray-100" href="#" onClick={()=> navigate('/movies')}>
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
