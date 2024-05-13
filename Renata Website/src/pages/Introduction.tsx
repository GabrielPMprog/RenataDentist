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
        <p>
          “Eu acredito em uma Odontologia de excelência, de forma descomplicada
          e confortável. O amor pela minha profissão e a busca pelo melhor para
          os meus pacientes me mantém em uma jornada de experiência e constante
          atualização.”
        </p>
        <ul>
          <li>Graduação</li>
          <li>Curso</li>
          <li>Anos exercendo a profissão</li>
          <li>Graduação</li>
          <li>Curso</li>
          <li>Anos exercendo a profissão</li>
        </ul>
      </div>
    </section>
  );
}

export default Introduction;
