import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const lista = [
  {
    id: "1",
    name: "Ataque dos Clones",
    year: 2002,
    sequential: 2,
    trilogy: "prequel",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Star_Wars_The_Clone_Wars.jpg/250px-Star_Wars_The_Clone_Wars.jpg",
  },
  {
    id: "2",
    name: "Solo: Uma História Star Wars",
    year: 2018,
    sequential: 4,
    trilogy: "spinoff",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/Solo_A_Star_Wars_Story.jpg/250px-Solo_A_Star_Wars_Story.jpg",
  },
  {
    id: "3",
    name: "A Vingança dos Sith",
    year: 2005,
    sequential: 3,
    trilogy: "prequel",
    img: "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg",
  },
  {
    id: "4",
    name: "Rogue One: Uma História Star Wars",
    year: 2016,
    sequential: 5,
    trilogy: "spinoff",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Rogue_One_-_A_Star_Wars_Story.jpg/250px-Rogue_One_-_A_Star_Wars_Story.jpg",
  },
  {
    id: "5",
    name: "A Ameaça Fantasma",
    year: 1999,
    sequential: 1,
    trilogy: "prequel",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg/240px-Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg",
  },
  {
    id: "6",
    name: "O Despertar da Força",
    year: 2015,
    sequential: 9,
    trilogy: "sequel",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg",
  },
  {
    id: "7",
    name: "Uma nova esperança",
    year: 1977,
    sequential: 6,
    trilogy: "classic",
    img: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Star_Wars_Epis%C3%B3dio_IV_Uma_Nova_Esperan%C3%A7a.jpg",
  },
  {
    id: "8",
    name: "Os Últimos Jedi",
    year: 2017,
    sequential: 10,
    trilogy: "sequel",
    img: "https://upload.wikimedia.org/wikipedia/pt/0/0e/Star_Wars_The_Last_Jedi.png",
  },
  {
    id: "9",
    name: "O Retorno de Jedi",
    year: 1983,
    sequential: 8,
    trilogy: "classic",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg",
  },
  {
    id: "10",
    name: "O Império Contra-Ataca",
    year: 1980,
    sequential: 7,
    trilogy: "classic",
    img: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/The_Empire_Strikes_Back.jpg/250px-The_Empire_Strikes_Back.jpg",
  },
  {
    id: "11",
    name: "A Ascensão Skywalker",
    year: 2019,
    sequential: 11,
    trilogy: "sequel",
    img: "https://m.media-amazon.com/images/I/71qDVK-VKQL._AC_SY741_.jpg",
  },
];

function Filme({ filme }) {
  let corFundo = "";
  let corSequencial = "";

  switch (filme.trilogy) {
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
      <h1 className="text-lg h-6 mb-1  font-bold ">{filme.name}</h1>
      <img className="w-40 h-60" src={filme.img} alt="" />
      <h3 className={` ${corSequencial} w-fit rounded-md p-1 `}>
        {filme.trilogy}
      </h3>
      <span className=" ">sequencial: {filme.sequential}</span>
      <span className="text-xl  ">{filme.year}</span>
    </li>
  );
}

function Apresentação() {
  return (
    <div className="flex justify-center rounded-md">
      <h1 className="text-center text-6xl bg-gray-600 w-fit p-6 text-slate-100 m-2 mb-8 rounded-md">
        Todos os filmes da franquia Star Wars:
      </h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Apresentação />
      <ul className="flex flex-wrap gap-5 items-center justify-center m-8 ">
        {lista.map((filme) => (
          <Filme key={filme.id} filme={filme} />
        ))}
      </ul>
    </>
  );
}

export default App;
