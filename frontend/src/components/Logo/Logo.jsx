import Img from "../../assets/logo.png";
import './Logo.css'

const Logo = () => {
  return (
    <a href="#">
      <img className="w-32 h-24 ml-20" src={Img} alt="" />
    </a>
  );
};

export default Logo;
