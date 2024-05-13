import "./styles/Advertising.css";

import { FaWhatsapp } from "react-icons/fa";

function Advertising() {
  return (
    <div className="advertisingContainer">
      <div className="advertisingContent">
        <h4>
          Sorria com confiança e desfrute de uma saúde bucal excepcional
          conosco.
        </h4>
        <h1>Seu sorriso é a nossa prioridade!</h1>
      </div>

      <button className="whatsBtn">
        <FaWhatsapp className="whatsIcon" /> Fale no WhatsApp
      </button>
    </div>
  );
}

export default Advertising;
