import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

function Author() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Vida Pessoal",
      description:
        "George Lucas nasceu em 14 de maio de 1944, em Modesto, Califórnia. Ele foi criado em uma família de classe média, com pais que encorajaram sua criatividade e paixão pelo cinema. Desde cedo, Lucas desenvolveu interesse por filmes e tecnologia, e sua infância em Modesto serviu como inspiração para o seu filme 'American Graffiti'. Em 1969, Lucas se casou com Marcia Griffin, uma editora de filmes que conheceu durante a produção de 'THX 1138' (1971), um de seus primeiros filmes. O casal teve uma filha chamada Amanda, que nasceu em 1981. Durante o casamento, Marcia teve um papel significativo na carreira de Lucas, fornecendo feedback criativo valioso e editando os filmes da trilogia original de Star Wars. No entanto, o casamento de Lucas e Marcia terminou em divórcio em 1983. A experiência do divórcio e a batalha pela guarda de sua filha tiveram um impacto significativo em sua vida pessoal e emocional, levando-o a se afastar um pouco da indústria cinematográfica nos anos seguintes. Mais tarde, em 2013, Lucas se casou com Mellody Hobson, uma empresária e presidente da Ariel Investments. Juntos, eles têm uma filha chamada Everest, que nasceu em 2013. Lucas e Hobson têm sido conhecidos por seu trabalho filantrópico e apoio a diversas causas sociais. Além de sua paixão por filmes, Lucas também é um entusiasta do automobilismo. Ele é dono de uma equipe de corrida chamada Lucas Oil Motorsports, que compete em diversas categorias, como a Lucas Oil Off Road Racing Series. A vida pessoal de George Lucas teve altos e baixos, mas ele sempre foi impulsionado por sua paixão pelo cinema e sua busca contínua pela inovação criativa. Seu casamento, divórcio, paternidade e seu relacionamento com Mellody Hobson moldaram sua jornada pessoal e tiveram influência em seu trabalho artístico.",
      imageUrl:
        "https://listasnerds.com.br/wp-content/uploads/2021/10/Darth-Maul_DESTAQUE-850x560.png",
    },
    {
      name: "Vida profissional",
      description:
        "George Lucas começou sua carreira no cinema como roteirista e diretor. Seu filme 'American Graffiti', lançado em 1973, foi um grande sucesso e lhe rendeu várias indicações ao Oscar. No entanto, foi com a criação de Star Wars em 1977 que Lucas se tornou uma figura lendária na indústria do cinema. Ele escreveu e dirigiu o primeiro filme da saga, que se tornou um fenômeno cultural. Após o sucesso de Star Wars, Lucas fundou a Lucasfilm, uma empresa de produção de filmes e efeitos especiais. Ele também criou a Industrial Light & Magic (ILM), uma empresa líder em efeitos visuais. Lucas supervisionou a produção de novos filmes de Star Wars e expandiu o universo da franquia em livros, quadrinhos e séries de televisão.",
      imageUrl:
        "https://valeohype.com.br/v1/wp-content/uploads/2021/10/anakin-site.jpg",
    },
    {
      name: "Projetos futuros",
      description:
        "Após vender a Lucasfilm para a The Walt Disney Company em 2012, George Lucas se afastou da produção de novos filmes de Star Wars. No entanto, ele permaneceu como consultor criativo em algumas produções, como 'Star Wars: O Despertar da Força' (2015). Lucas expressou o desejo de se dedicar mais a projetos pessoais e explorar outras áreas criativas. Além disso, Lucas tem sido ativo em trabalhos filantrópicos e estabeleceu a George Lucas Educational Foundation, que busca promover a inovação na educação. Ele também tem investido em tecnologia e apoiado iniciativas relacionadas à preservação do patrimônio cinematográfico. Embora não esteja envolvido diretamente em projetos futuros de Star Wars, o legado de George Lucas continua a inspirar e influenciar cineastas e fãs em todo o mundo, e seu impacto na indústria do entretenimento é inegável.",

      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",
    },
  ];

  const itemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Navbar />
      <div className="flex justify-center w-[100%] flex-wrap items-center mt-20">
        <section className="container flex  gap-10 group text-gray-100 text-justify p-32 rounded-lg bg-gradient-to-tl from-cyan-900 to-black m-12  h-fit w-auto">
          <div className="">
            <h1 className="font-extrabold text-2xl mb-16 text-center">
              Curiosidades da franquia
            </h1>
            <ul className="list-inside">
              {items.map((item, index) => (
                <li
                  className="cursor-pointer text-center w-72 px-10 py-3 rounded-lg mb-16 bg-gray-300 text-black hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ease-in duration-300"
                  key={index}
                  onClick={() => itemClick(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {selectedItem && (
            <div className="curiosidade-texto gap-8">
              <h3 className="font-bold text-2xl">{selectedItem.name}</h3>
              <p className="leading-8">{selectedItem.description}</p>
              <p className="leading-8">{selectedItem.description1}</p>
              <img className="w-44 h-44" src={selectedItem.imageUrl} alt="" />
            </div>
          )}
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Author;
