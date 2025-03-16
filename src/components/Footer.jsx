import { NavLink } from "react-router";
import { PiGithubLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="w-auto h-100 flex flex-col items-center justify-evenly mt-auto md:h-60">
      <div className="text-gray-500 flex flex-col justify-around items-center gap-5 w-3/4 md:flex-row">
        <NavLink to="/servicios" className="">
          Servicios
        </NavLink>
        <NavLink to="/proyectos" className="">
          Proyectos
        </NavLink>
        <NavLink to="/nosotros" className="">
          Nosotros
        </NavLink>
        <NavLink to="/contacto" className="">
          Contacto
        </NavLink>
      </div>
      <div className="w-50 flex justify-center items-center gap-5">
        <PiGithubLogoThin className="text-gray-500" />
        <CiInstagram />
      </div>
      <NavLink to="/" className="text-gray-500">
        2025 ZEKO
      </NavLink>
    </footer>
  );
};

export default Footer;
