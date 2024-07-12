import "./styles/Header.css";

import { IoIosArrowDown } from "react-icons/io";

import logoRenata from "../assets/logoRenata.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={logoRenata} alt="Dra.Renata Biesdorf " />
      <div className="links">
        <ul className="linksList">
          <li className="serviceList">
            <p>Serviços</p> <IoIosArrowDown className="arrowIcon"/>
            <div className="groupFocus">
              <ul>
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
  );
}
