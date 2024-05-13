import SpaceVideo from "../assets/SpaceVideo.mp4";

import "./styles/Space.css";

function Space() {
  return (
    <div className="spaceContainer">
      <span>
        <video className="spaceVideo" controls>
          <source src={SpaceVideo} type="video/mp4" />
        </video>
      </span>
      <div className="feedbacks">
        <h1>Depoimentos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque
          corporis eius expedita nostrum molestiae, soluta voluptas officiis
          nemo iure architecto ducimus consectetur. Expedita consequatur
          accusamus maxime, doloremque id veniam. ⭐⭐⭐⭐⭐
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque
          corporis eius expedita nostrum molestiae, soluta voluptas officiis
          nemo iure architecto ducimus consectetur. Expedita consequatur
          accusamus maxime, doloremque id veniam. ⭐⭐⭐⭐⭐
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque
          corporis eius expedita nostrum molestiae, soluta voluptas officiis
          nemo iure architecto ducimus consectetur. Expedita consequatur
          accusamus maxime, doloremque id veniam. ⭐⭐⭐⭐⭐
        </p>
      </div>
    </div>
  );
}

export default Space;
