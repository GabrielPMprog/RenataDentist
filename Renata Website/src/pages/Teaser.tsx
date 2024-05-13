import "./styles/Teaser.css";

import { FaCheck } from "react-icons/fa";

import TeaserImage from "../assets/TeaserImage.png";

function Teaser() {
  return (
    <section className="teaserContainer">
      <img
        className="teaserImage"
        src={TeaserImage}
        alt="Imagem de apresentação"
      />

      <div className="teaserContent">
        <h1>Conquiste o sorriso dos sonhos</h1>
        <ul className="teaserList">
          <li><FaCheck className="checkIcon"/>Clinica geral</li>
          <li><FaCheck className="checkIcon"/>Clareamento</li>
          <li><FaCheck className="checkIcon"/>Ortodontia</li>
          <li><FaCheck className="checkIcon"/>Invisalign</li>
          <li><FaCheck className="checkIcon"/>Tratamento com Toxina botulínica</li>
          <li><FaCheck className="checkIcon"/>Tratamento para bruxismo</li>
        </ul>
      </div>
    </section>
  );
}

export default Teaser;
