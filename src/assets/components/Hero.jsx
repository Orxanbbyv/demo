import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../style/hero.scss";
import Card from "./Card";

const Hero = () => {
  const cardsData = [
    { title: "Brave New World" },
    { title: "Vanguard" },
    { title: "Bad Times At The El Royale" },
    { title: "John Wick 3 Parabellum" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="hero container">
      <Slider {...sliderSettings}>
        <div>
          <Card title="Brave New World" />
        </div>
        <div>
          <Card title="Vanguard" />
        </div>
        <div>
          <Card title="Bad Times At The El Royale" />
        </div>
        <div>
          <Card title="John Wick 3 Parabellum" />
        </div>
        <div>
          <Card title="John Wick 3 Parabellum" />
        </div>
        <div>
          <Card title="John Wick 3 Parabellum" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;