import { NavLink } from "react-router";
import logoImg from "../../public/Luma-Logo.gif";

const Header = () => {
  return (
    <div className="w-auto flex justify-around gap-50">
      <NavLink to="/">
        <img className="w-30 y-30" src={logoImg} alt="" />
      </NavLink>
      <div className="w-xl flex justify-around items-center">
        <NavLink to="/servicios" className="hover:border-2">
          Servicios
        </NavLink>
        <NavLink to="/proyectos" className="hover:border-2">
          proyectos
        </NavLink>
        <NavLink to="/nosotros" className="hover:border-2">
          nosotros
        </NavLink>
        <NavLink to="/contacto" className="hover:border-2">
          contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
