import { useState } from "react";
import './Curiosidades.css'

const Curiosidades = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "A Ameaça Fantasma",
      description:
        "Uma curiosidade interessante sobre o filme A Ameaça Fantasma é que o personagem Darth Maul foi originalmente concebido como um vilão menor, mas sua popularidade acabou levando a uma expansão de seu papel e presença na história.",
      description1:
        "Inicialmente, George Lucas planejou que Darth Maul aparecesse em apenas uma cena de luta com Qui-Gon Jinn, mas o designer de personagens Iain McCaig ficou tão impressionado com o visual do personagem que pediu para expandir seu papel. Assim, o papel de Darth Maul foi aumentado e ele se tornou o principal antagonista do filme, com direito a uma das cenas de luta mais icônicas da franquia.",
      imageUrl:
        "https://listasnerds.com.br/wp-content/uploads/2021/10/Darth-Maul_DESTAQUE-850x560.png",
    },
    {
      name: "Ataque dos Clones",
      description:
        "Uma curiosidade interessante sobre o filme Ataque dos Clones é que durante as filmagens, o ator Hayden Christensen, que interpretou Anakin Skywalker, teve que fazer muitas cenas de luta com um sabre de luz, mas ele ocasionalmente quebrava os bastões de luta durante as sequências de ação intensas.",
      description1: "Devido à força e intensidade com que Hayden Christensen realizava os movimentos de luta, ele acabou quebrando vários sabres de luz de propósito durante as filmagens. Isso se tornou uma piada nos bastidores, com a equipe de produção brincando que ele tinha 'força demais'.",
      imageUrl: "https://valeohype.com.br/v1/wp-content/uploads/2021/10/anakin-site.jpg",
    },
    {
      name: "A vingança dos Sith",
      description:
        "Uma curiosidade fascinante sobre o filme A Vingança dos Sith é que a lendária cena em que Darth Vader recebe sua icônica armadura negra foi mantida em segredo absoluto durante as filmagens e pós-produção. Para garantir que a revelação do traje de Darth Vader fosse uma surpresa para o público, o diretor George Lucas tomou medidas extremas para manter o sigilo. Apenas um número muito limitado de pessoas teve acesso à cena completa durante a produção do filme.",
      description1: "As filmagens da cena foram realizadas em um set separado e todas as janelas foram cobertas para evitar vazamentos. Além disso, apenas um grupo seleto de membros da equipe de produção e atores, incluindo o próprio Hayden Christensen e o diretor George Lucas, estavam presentes durante as filmagens. Os figurinistas e aderecistas trabalharam em segredo para criar o traje, que foi mantido oculto em um local seguro.",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg",
    },
  ];

  const itemClick = (item) => {
    setSelectedItem(item);
  };

  

  return (
    <section className="flex justify-center gap-10 group text-gray-100 text-justify p-32 rounded-lg  m-12 bg-gradient-to-tr from-cyan-900 to-black mt-36 h-fit w-auto">
      <div className="w-[24rem] flex flex-col items-center">
      <h1 className="font-extrabold text-2xl mb-16">Curiosidades da franquia</h1>
        <ul className="list-inside">
          {items.map((item, index) => (
            <li className="cursor-pointer w-72 px-10 py-3 rounded-lg mb-16 bg-gray-300 text-black hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ease-in duration-300" key={index} onClick={() => itemClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
        
      </div>
      {selectedItem && (
          <div className="flex flex-col gap-8 w-[32rem]">
            <h3 className="font-bold text-2xl">{selectedItem.name}</h3>
            <p className="leading-8">{selectedItem.description}</p>
            <p className="leading-8">{selectedItem.description1}</p>
            <img className="w-44 h-44" src={selectedItem.imageUrl} alt="" />
          </div>
        )}
    </section>
  );
};

export default Curiosidades;
