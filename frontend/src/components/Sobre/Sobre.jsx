import './Sobre.css'

const Sobre = () => {
  return (
      <section className="container-sobre text-gray-100 text-justify items-center p-20 rounded-lg gap-14 m-12 bg-gradient-to-tl from-cyan-900 to-black mt-36 h-fit ">
        <h1 className="font-bold text-4xl col-span-2 text-center">
          Sobre a franquia:
        </h1>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <p className="leading-8 mr-24">
            A franquia Star Wars é uma das mais icônicas e amadas do mundo do
            entretenimento. Criada por George Lucas em 1977, a saga espacial
            cativou gerações de fãs ao longo dos anos, transportando-os para um
            universo repleto de aventuras épicas, personagens memoráveis e uma
            rica mitologia.
          </p>
          <img
            className="w-[30rem] h-[22rem] rounded-md border-solid border-gray-50 sobre-img"
            src="https://assets.b9.com.br/wp-content/uploads/2020/02/glb9.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <img
            className="w-[30rem] h-[22rem] rounded-md sobre-img"
            src="https://www.metroworldnews.com.br/resizer/SwqV2Okv_hUWODsHFslzY69w4ac=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/6NP7OFWQARGTVMQ4DPI4FVUPFU.png"
            alt=""
          />
          <p className="ml-28 leading-8">
            A base de fãs de Star Wars é notável por sua dedicação e paixão. Os
            fãs são conhecidos como "jedis" e se estendem por todas as idades,
            culturas e países. Desde os fãs que acompanharam a trilogia original
            nos cinemas até os mais jovens que descobriram a saga por meio das
            prequelas ou sequências, a comunidade de fãs de Star Wars continua a
            crescer e se renovar.
          </p>
        </div>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <p className="leading-8 mr-28">
            O que torna Star Wars tão especial é a maneira como ela transcende
            as telas. Os fãs se envolvem profundamente com os personagens e
            histórias, criando uma conexão emocional duradoura. Eles se reúnem
            em convenções, eventos temáticos, cosplay e fóruns online para
            discutir teorias, compartilhar fanarts e memórias de como a saga
            impactou suas vidas.
          </p>
          <img
            className="w-[30rem] h-[22rem] rounded-md sobre-img"
            src="https://media.vanityfair.com/photos/6297f3d1f0746bf707feb23a/4:3/w_2560%2Cc_limit/Florida%2520Cosplayers%2520-%2520Star%2520Wars%2520Celebration%25201.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <img
            className="w-[30rem] h-[22rem] rounded-md sobre-img"
            src="https://www.planocritico.com/wp-content/uploads/2020/11/Star-Wars-O-Despertar-da-Forca-Sem-Spoilers.jpg"
            alt=""
          />
          <p className="leading-8 ml-28">
            O futuro da franquia Star Wars é promissor e cheio de
            possibilidades. A Disney adquiriu a Lucasfilm em 2012 e desde então
            tem expandido o universo de Star Wars com novos filmes, séries de
            TV, livros e quadrinhos. A trilogia de sequência, iniciada com "O
            Despertar da Força" em 2015, trouxe de volta personagens amados e
            introduziu novos heróis e vilões para a próxima geração.
          </p>
        </div>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <p className="leading-8 mr-28">
            Além das sequências, a Disney também lançou uma série de filmes
            derivados, como "Rogue One: Uma História Star Wars" e "Han Solo: Uma
            História Star Wars", explorando diferentes aspectos da galáxia
            muito, muito distante. As séries de TV, como "The Mandalorian" e
            "The Bad Batch", ganharam grande popularidade e expandiram ainda
            mais o universo de Star Wars, com histórias envolventes e
            personagens cativantes.
          </p>
          <img
            className="w-[30rem] h-[22rem] rounded-md sobre-img"
            src="https://cdn.mos.cms.futurecdn.net/9acdFyuRut7qLHaJBXsXFe-1200-80.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-5 items-center col-span-2 my-12">
          <img
            className="w-[30rem] h-[22rem] rounded-md sobre-img"
            src="https://i.ytimg.com/vi/7Ct1GIzjkok/maxresdefault.jpg"
            alt=""
          />
          <p className="leading-8 ml-28">
            O futuro reserva ainda mais emocionantes aventuras no universo Star
            Wars. Novos filmes estão sendo planejados, assim como séries de TV
            que explorarão personagens específicos, expandirão a mitologia e
            mergulharão em épocas distintas da cronologia. Essa expansão
            permitirá que os fãs se aprofundem ainda mais nesse universo tão
            querido. Com uma base de fãs leais e uma história rica para contar,
            Star Wars continuará a emocionar e inspirar pessoas de todas as
            idades. A saga sempre será um marco cultural, unindo gerações e
            capturando a imaginação de milhões ao redor do mundo. Que a Força
            esteja conosco enquanto embarcamos em novas jornadas pela galáxia
            Star Wars!
          </p>
        </div>
      </section>
  );
};

export default Sobre;
