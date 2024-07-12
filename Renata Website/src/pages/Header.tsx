import "./styles/Header.css";

import { IoIosArrowDown } from "react-icons/io";

import logoRenata from "../assets/logoRenata.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={logoRenata} alt="Dra.Renata Biesdorf " />
      <div className="links">
        <ul className="linksList">
          <li>
            <p>Serviços</p> <IoIosArrowDown className="arrowIcon"/>
          </li>
          <li>
            <p>Contato</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
