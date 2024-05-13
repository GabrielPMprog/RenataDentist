import { useState } from "react";

import slideImages1 from "../assets/slideImages1.png";
import slideImages2 from "../assets/slideImages2.png";
import slideImages3 from "../assets/slideImages3.png";
import slideImages4 from "../assets/slideImages4.png";
import slideImages5 from "../assets/slideImages5.png";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./styles/SlideImages.css";

const SlideImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondCurrentIndex, setSecondCurrentIndex] = useState(0);

  const images = [
    slideImages1,
    slideImages2,
    slideImages3,
    slideImages4,
    slideImages5,
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const secondImages = [
    slideImages1,
    slideImages2,
    slideImages3,
    slideImages4,
    slideImages5,
  ];

  const goToPrevSlideSecond = () => {
    setSecondCurrentIndex((prevIndex) =>
      prevIndex === 0 ? secondImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlideSecond = () => {
    setSecondCurrentIndex((prevIndex) =>
      prevIndex === secondImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mainSlideImages">
      
      <div className="slideImageContainer">
      {/* Carousel 1  */}
      <div className="carousel-container ">
        <button className="prev-button" onClick={goToPrevSlide}>
          <FaArrowLeft />
        </button>
        <img
          className="carousel-image"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
        />
        <button className="next-button" onClick={goToNextSlide}>
          <FaArrowRight />
        </button>

        {/* Carousel 2  */}
      </div>
      <div className="carousel-container secondCarousel-container ">
        <button className="prev-button" onClick={goToPrevSlideSecond}>
          <FaArrowLeft />
        </button>
        <img
          className="carousel-image"
          src={secondImages[secondCurrentIndex]}
          alt={`Slide ${secondCurrentIndex}`}
        />
        <button className="next-button" onClick={goToNextSlideSecond}>
          <FaArrowRight />
        </button>
      </div>
    </div>
    </div>
  );
};

export default SlideImages;
