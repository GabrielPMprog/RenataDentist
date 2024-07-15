import { useState } from "react";
import "./styles/Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import logoRenata from "../assets/logoRenata.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerContainer">
      <img src={logoRenata} alt="Dra.Renata Biesdorf" />

      <div className="linksToggle">
            <ul className="linksListToggle">
              <li className="serviceListToggle">
                <p>Serviços</p> <IoIosArrowForward className="arrowIcon" />
                <div className="groupFocus">
                  <ul className="groupFocusList">
                    <li>Botox</li>
                    <li>Invisalign</li>
                  </ul>
                </div>
              </li>
              <li>
                <p>Contato</p>
              </li>
            </ul>
          </div>

      <FaBars className="hamburgerIcon" onClick={toggleMenu} />
      {menuOpen && (
        <div className="fullScreenMenu">
          <FaTimes className="closeIcon" onClick={toggleMenu} />
          <div className="links">
            <ul className="linksList">
              <li className="serviceList">
                <p>Serviços</p> <IoIosArrowForward className="arrowIcon" />
                <div className="groupFocus">
                  <ul className="groupFocusList">
                    <li>Botox</li>
                    <li>Invisalign</li>
                  </ul>
                </div>
              </li>
              <li>
                <p>Contato</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
