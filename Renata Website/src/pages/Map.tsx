import "./styles/Map.css";

import { Element } from "react-scroll";

function Map() {
  return (
    <Element name="contact" >
    <section className="mapContainer"  >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7846093710355!2d-51.177897123674185!3d-30.043036631212498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977743138168d%3A0x5d668b75fcb0ae88!2sRenata%20Biesdorf%20%7C%20Invisalign%20%7C%20Harmoniza%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1720752501799!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></iframe>
      <div className="mapContent">
        <h1 className="mapTitle">Entre em Contato</h1>
        <p>
          Av. Sen. Tarso Dutra, 565 - Petrópolis, Porto Alegre - RS, 90690-140
        </p>
        <button>Agende sua Consulta</button>
      </div>
    </section>
    </Element>
  );
}

export default Map;
