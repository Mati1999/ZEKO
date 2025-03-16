import { useState } from "react";
import { NavLink } from "react-router";
import logoImg from "/ZekoLogo.jpg";
import menuLogo from "/Menu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "green" : ""
    };
  };

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col w-full h-20">
      <div className="flex justify-between items-center px-3 relative">
        <NavLink to="/">
          <img className="w-30 y-20" src={logoImg} alt="" />
        </NavLink>
        <button
          className="size-fit border border-transparent focus:border-black focus:rounded-[28%]"
          onClick={() => showMenu()}
        >
          <img className="size-12" src={menuLogo} alt="" />
        </button>
      </div>
      <div
        className={`${
          !menuOpen ? "hidden" : "flex flex-col gap-2 text-center bg-white absolute top-20 w-full"
        } md:w-xl md:flex md:justify-around md:items-center`}
      >
        <NavLink to="/servicios" style={navLinkActive} className="">
          Servicios
        </NavLink>
        <NavLink to="/proyectos" style={navLinkActive} className="">
          Proyectos
        </NavLink>
        <NavLink to="/nosotros" style={navLinkActive} className="">
          Nosotros
        </NavLink>
        <NavLink to="/contacto" style={navLinkActive} className="">
          Contacto
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
