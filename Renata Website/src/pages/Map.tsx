import "./styles/Map.css";
function Map() {
  return (
    <section className="mapContainer">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55279.09271600685!2d-51.19813203521298!3d-30.009784576375488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951976e66653ed7d%3A0xfa931b9deed844aa!2zQm9jw6NvIDE!5e0!3m2!1spt-BR!2sbr!4v1715282671716!5m2!1spt-BR!2sbr"
        loading="lazy"
      ></iframe>
      <div className="mapContent">
        <div className="">
          <h1>Entre em Contato</h1>
          <p>
            Integrare Clínica Odontológica Avenida Wenceslau Escobar, 3033 sl
            208 Porto Alegre, Rio Grande do Sul Telefone: (51) xxxxx-xxxx
          </p>
          <button>Agende sua Consulta</button>
        </div>
      </div>
    </section>
  );
}

export default Map;
