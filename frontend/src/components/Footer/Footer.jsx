import { Icon } from "@iconify/react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="mt-28 group text-slate-50 flex justify-evenly text-center gap-12">
      <div className="flex items-center flex-col gap-5">
        <h5>Sites oficiais da franquia:</h5>
        <div className="flex gap-8 text-2xl">
          <a href="https://www.instagram.com/starwars/">
            <Icon icon="ri:instagram-fill" color="white" />
          </a>
          <a href="https://www.starwars.com">
            <Icon icon="fa6-solid:shuttle-space" color="white" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h4>Desenvolvido por Adailton Henrique</h4>
        <div className="">
          <p>Contatos:</p>
          <div className="flex group text-2xl gap-8 mt-4 mb-4">
            <a href="https://github.com/adailtondev">
              <Icon icon="arcticons:github" />
            </a>
            <a href="https://www.linkedin.com/in/adailtonhdev/">
              <Icon icon="la:linkedin" color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
