import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <header className="bg-gray-300 flex justify-between">
      <Logo />
      <ul className="flex gap-14 mr-[26rem] items-center justify-center">
        <li className="hover:bg-slate-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a href="#" className="text-gray-700 group-hover:text-gray-100">
            Ínicio
          </a>
        </li>
        <li className="hover:bg-slate-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-slate-800 group-hover:text-gray-100" href="#">
            Filmes
          </a>
        </li>
        <li className="hover:bg-slate-700 px-16 py-4 rounded-md group ease-in duration-300 cursor-pointer">
          <a className="text-slate-800 group-hover:text-gray-100" href="#">
            Autor
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
