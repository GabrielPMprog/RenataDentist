import "./styles/Introduction.css";

import DentistImage from "../assets/DentistImage.png";

function Introduction() {
  return (
    <section className="introductionContainer">
      <img
        src={DentistImage}
        className="dentistImage"
        alt="Dra. Renata Biesdorf"
      />

      <div className="introductionContent">
        <h1>Dra. Renata Biesdorf</h1>
        <p>Cref: XXXXX</p>
        <p>
          “Eu acredito em uma Odontologia de excelência, de forma descomplicada
          e confortável. O amor pela minha profissão e a busca pelo melhor para
          os meus pacientes me mantém em uma jornada de experiência e constante
          atualização.”
        </p>
      
      </div>
    </section>
  );
}

export default Introduction;
