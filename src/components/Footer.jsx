import { NavLink } from "react-router";
import { PiGithubLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="w-auto h-40 flex flex-col items-center justify-evenly mt-auto">
      <div className="text-gray-500 flex justify-around w-3/4">
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
      <div className="w-50 flex justify-center gap-10">
        <PiGithubLogoThin className="text-gray-500" />
        <CiInstagram />
      </div>
      <span className="text-gray-500">2025 ZEKO</span>
    </footer>
  );
};

export default Footer;
