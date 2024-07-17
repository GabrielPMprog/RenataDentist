import "../components/SliderBotox.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination"; 

export default function SliderBotox() {
  return (
    <div className="sliderBotoxContainer">
      <Swiper
        modules={[Pagination, Autoplay]}
        className="botoxPageSwiper"
        autoplay={{ delay: 4000 }} 
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        direction="vertical"
        pagination={{
          clickable: true,
        
        }}
      >
        <SwiperSlide className="botoxSwiperItemList">
          <h1 className="botoxItemTitle">
            <span>1</span>Consulta
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptate officia architecto animi eaque adipisci sequi! Ea ex,
            quasi magni similique voluptatem qui aut reprehenderit odit dolor,
            ipsa ad consequuntur!
          </p>
        </SwiperSlide>
        <SwiperSlide className="botoxSwiperItemList">
          <h1 className="botoxItemTitle">
            <span>2</span>Visualização
          </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptate officia architecto animi eaque adipisci sequi! Ea ex,
            quasi magni similique voluptatem qui aut reprehenderit odit dolor,
            ipsa ad consequuntur!
          </p>
        </SwiperSlide>
        <SwiperSlide className="botoxSwiperItemList">
          <h1 className="botoxItemTitle">
            <span>3</span>Contrato
          </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptate officia architecto animi eaque adipisci sequi! Ea ex,
            quasi magni similique voluptatem qui aut reprehenderit odit dolor,
            ipsa ad consequuntur!
          </p>
        </SwiperSlide>
        <SwiperSlide className="botoxSwiperItemList">
          <h1 className="botoxItemTitle">
            <span>4</span>aplicação
          </h1>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptate officia architecto animi eaque adipisci sequi! Ea ex,
            quasi magni similique voluptatem qui aut reprehenderit odit dolor,
            ipsa ad consequuntur!
          </p>
        </SwiperSlide>
    ...
      </Swiper>
    </div>
  );
}
