import React, { useState } from 'react';
import photo from "../img/Hero.png";
import Like from "../img/Like.svg"
import DisLike from "../img/DisLike.svg"
import Play from "../img/Play.svg"
import "../style/card.scss";

const Card = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: isHovered ? "8px" : "none",
        background: isHovered ? "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.263) 100%)" : "none",
        width: isHovered ? "342px" : "297px",
        height: isHovered ? "311px" : "212px",
        boxShadow: isHovered
          ? "-2.244035243988037px -2.244035243988037px 112.2017822265625px 0px #FFFFFF05 inset"
          : "none",
      }}
    >
      <div>
        <img src={photo} alt="img" style={{ width: "100%", height: "70%" }} />
      </div>
      <div className='text' style={{
        bottom: isHovered ? "76px" : "-10px",
      }}>
        {title}
        {isHovered && (
          <div className="details">
            <span className="duration">28 . 1h23m</span>
            <div className="buttons">
              <button className="like-button"><img src={Like} alt="beğen" /></button>
              <button className="play-button"><img src={Play} alt="oynat" /></button>
              <button className="dislike-button"><img src={DisLike} alt="beğenme" /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
