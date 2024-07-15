import "./styles/Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState, useEffect } from "react";

//import slider Images
import botox from "../assets/sliderImages/botox.jpg";
import clareamento from "../assets/sliderImages/clareamento.jpg";
import expansao from "../assets/sliderImages/expansao.jpg";
import aparelho from "../assets/sliderImages/aparelho.jpg";
import Preenchimento from "../assets/sliderImages/Preenchimento.jpg";


export default function SwiperPage() {

const [direction, setDirection] = useState("")

useEffect(() => {

    if (window.innerWidth > 1200) {
      setDirection("horizontal");
    } else {
      setDirection("vertical");
    }
  }, [])

  return (
    <div className="swiperContainer">
      <h1>Serviços</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id atque earum
        vitae delectus odit dolorem laborum? Neque veniam porro, voluptatibus
        reprehenderit, voluptatum eligendi quam optio voluptates, veritatis
        quidem repellat adipisci!
      </p>
      <Swiper
      className="swiper"
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        direction={direction}
      >
        <SwiperSlide className="swiperItemList"><img className="imageSlider" src={botox} alt="botox" /></SwiperSlide>
        <SwiperSlide className="swiperItemList"><img className="imageSlider" src={clareamento} alt="clareamento" /></SwiperSlide>
        <SwiperSlide className="swiperItemList"><img className="imageSlider" src={expansao} alt="expansão maxilar" /></SwiperSlide>
        <SwiperSlide className="swiperItemList"><img className="imageSlider" src={aparelho} alt="aparelho" /></SwiperSlide>
        <SwiperSlide className="swiperItemList"><img className="imageSlider" src={Preenchimento} alt="preenchimento" /></SwiperSlide>

 
      </Swiper>
    </div>
  );
}
