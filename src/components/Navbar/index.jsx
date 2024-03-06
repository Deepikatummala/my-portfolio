import React, { useState } from "react";
import { FaBars,   } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './navbarstyles.css';

const data = [

  {
    label: "About",
    to: "/about",
  },

  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
          <h1>Deepika</h1>
          </Link>
        </div>
        <ul className={`navbar__container__menu  ${toggleIcon ? "active" : ""}`} >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item" >
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {
          toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
          }
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
