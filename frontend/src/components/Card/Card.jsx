const Filme = ({ movie }) => {
  let corFundo = "";
  let corSequencial = "";

  switch (movie.trilogy) {
    case "prequel":
      (corFundo = "bg-amber-100"), (corSequencial = "bg-amber-400");
      break;
    case "sequel":
      (corFundo = "bg-lime-100"), (corSequencial = "bg-lime-400");
      break;
    case "classic":
      (corFundo = "bg-teal-100"), (corSequencial = "bg-teal-400");
      break;
    case "spinoff":
      (corFundo = "bg-indigo-100"), (corSequencial = "bg-indigo-400");
      break;
    default:
  }

  return (
    <li
      className={`flex flex-col w-64 h-[30rem] items-center text-slate-100 hover:text-slate-800 group justify-center gap-6 text-center rounded-md bg-gray-600 hover:${corFundo}`}
    >
      <h1 className="text-lg h-6 mb-1 font-bold ">{movie.name}</h1>
      <img className="w-40 h-60" src={movie.img} alt="" />
      <h3 className={` ${corSequencial} w-fit rounded-md p-1 `}>
        {movie.trilogy}
      </h3>
      <span className=" ">sequencial: {movie.sequential}</span>
      <span className="text-xl  ">{movie.year}</span>
    </li>
  );
};

export default Filme