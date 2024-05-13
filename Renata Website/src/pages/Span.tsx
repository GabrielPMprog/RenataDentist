import "./styles/Span.css";

import { Fade } from "react-awesome-reveal";

function Span() {
  return (
    <section className="spanContainer">
      <ul className="spanList">
        <Fade>
          <li className="spanNumber">
            <h1>12+</h1>
            Anos de experiência
          </li>
        </Fade>
        <Fade>
          <li className="spanNumber">
            <h1>10.000+</h1>
            consultas realizadas
          </li>
        </Fade>
        <Fade>
          <li className="spanNumber">
            <h1>10.000+</h1>
            sorrisos renovados
          </li>
        </Fade>
      </ul>
    </section>
  );
}

export default Span;
