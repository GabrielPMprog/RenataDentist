import "./styles/Home.css";

import { FaWhatsapp } from "react-icons/fa";

// import DentistImage from '../assets/DentistImage.png'

function Home() {
  return (
    <section className="homeContainer">
      <div className="homeContent">
        <h3>Renata Biesdorf | Invisalign | Harmonização </h3>
        <p>CRO/RS </p>
        <h1>Transformandoo vidas através de sorrisos</h1>
        <p>Agende sua avaliação</p>
        <button className="whatsBtn">
          <FaWhatsapp className="whatsIcon" /> Fale no WhatsApp
        </button>
      </div>
    </section>
  );
}

export default Home;
