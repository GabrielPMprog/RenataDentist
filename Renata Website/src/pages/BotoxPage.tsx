import "./styles/BotoxPage.css";

import DentistImage from "../assets/DentistImage.png";

import SliderBotox from "./components/SliderBotox.jsx";

function BotoxPage() {
  return (
    <>
      <section className="botoxPageContainer">
        <img
          src={DentistImage}
          className="dentistImage"
          alt="Dra. Renata Biesdorf"
        />

        <div className="botoxPageContent">
          <h1>Botox</h1>

          <p>
            “Eu acredito em uma Odontologia de excelência, de forma
            descomplicada e confortável. O amor pela minha profissão e a busca
            pelo melhor para os meus pacientes me mantém em uma jornada de
            experiência e constante atualização.”
          </p>
        </div>
      </section>
      <SliderBotox />
    </>
  );
}

export default BotoxPage;
