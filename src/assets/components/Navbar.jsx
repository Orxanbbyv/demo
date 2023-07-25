import React, { useState } from "react";
import Logo from "../img/LOGO.svg";
import item1 from "../img/item1.png";
import item2 from "../img/item2.png";
import item3 from "../img/item3.png";
import item4 from "../img/item4.png";
import SVG from "../img/SVG.svg";
import Exit from "../img/Exit-Button.svg";
import Close from "../img/Exit-Button.png";
import Sound from "../img/Sound.svg";
import Menubar from "../img/MenuBar.svg";
import LanguageSelector from "./LanguageSelector";
import "../style/navbar.scss";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="nav">
      <div className="Sound">
        <img src={Sound} />
      </div>
      <div className="menubar">
        <img src={Menubar} />
      </div>
      <div className="mobilelogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="firstnav">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          <div>Menu 1</div>
          <div>Menu 2</div>
          <div className="language">
            <LanguageSelector />
          </div>
        </div>
      </div>

      <div className="lastnav">
        <div className="list" onClick={toggleDropdown}>
          Whatchlist
        </div>
        <div className="signin">Sign In</div>
      </div>

      {isDropdownVisible && (
        <div className="dropdown-menu">
          <div className="element">
            <div>
              <div className="img ">
                <img src={item1} />
              </div>{" "}
              <div className="text">
                The Witcher <img src={Exit} className="exitimg" />
              </div>
            </div>
            <div>
              <div className="img">
                <img src={item2} />
              </div>{" "}
              <div className="text">
                The Queen's Gambit <img src={Exit} className="exitimg" />
              </div>
            </div>
            <div>
              <div className="img">
                <img src={item3} />
              </div>{" "}
              <div className="text">
                The Dark Knight <img src={Exit} className="exitimg" />
              </div>
            </div>
            <div>
              <div className="img">
                <img src={item4} />
              </div>{" "}
              <div className="text">
                No Time To Day <img src={Exit} className="exitimg" />
              </div>
            </div>
          </div>
          <div>
            <img src={SVG} alt="" />
          </div>
          <div className="close">
            <img src={Close} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
