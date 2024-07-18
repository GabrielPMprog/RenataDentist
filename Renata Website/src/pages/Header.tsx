import { useState } from "react";
import "./styles/Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import logoRenata from "../assets/logoRenata.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerContainer">
      <ScrollLink to="introduction" smooth={true} duration={500} offset={-100}>
        <RouterLink to="/">
          <img
            src={logoRenata}
            alt="Dra.Renata Biesdorf"
            className="logoRenata"
          />
        </RouterLink>
      </ScrollLink>

      <div className="linksToggle">
        <ul className="linksListToggle">
          <li className="serviceListToggle">
            <p>Serviços</p> <IoIosArrowForward className="arrowIcon" />
            <div className="groupFocus groupFocusToggle">
              <ul className="groupFocusList">
                <li>
                  <RouterLink to="/botox" className="headerLink">
                    Botox
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/invisalign" className="headerLink">
                    Invisalign
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="headerBtn">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
              <RouterLink to="/">
                <p>Contato</p>
              </RouterLink>
            </ScrollLink>
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
                <div className="groupFocus groupFocusHamburger">
                  <ul className="groupFocusList">
                    <li>
                      <RouterLink
                        to="/botox"
                        className="headerLink headerLinkHamburger"
                      >
                        Botox
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        to="/invisalign"
                        className="headerLink headerLinkHamburger"
                      >
                        Invisalign
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  <RouterLink to="/">
                    <p>Contato</p>
                  </RouterLink>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
