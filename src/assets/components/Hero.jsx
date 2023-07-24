import React from 'react';
import Slider from 'react-slick';
import "../style/hero.scss";
import Card from './Card';

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
    <div className='hero'>
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card title={card.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
