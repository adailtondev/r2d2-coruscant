import './Card.css'

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
    <div className="grid my-10 mx-10">
      <li
        className={`card-filme flex flex-col items-center w-[24rem] z-10 text-slate-100 hover:text-slate-800 group justify-center gap-5 text-center rounded-md bg-gray-600 hover:${corFundo}`}
      >
        <h1 className="text-lg h-6 mt-2 font-bold ">{movie.name}</h1>
        <img className="object-cover" src={movie.img} alt="" />
        <h3 className={` ${corSequencial} w-fit rounded-md p-1 `}>
          {movie.trilogy}
        </h3>
        <span className=" ">sequencial: {movie.sequential}</span>
        <span className="text-xl  ">{movie.year}</span>
      </li>
    </div>
  );
};

export default Filme;
