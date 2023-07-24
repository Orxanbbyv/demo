import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "./İ18n";
import Down from "../img/Down.svg";
import "../style/LanguageSelector.scss";

const LanguageSelector = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setDropdownVisible(false);
  };

  return (
    <div className="language">
      <span onClick={toggleDropdown}>{t("TR")}</span>
      <img src={Down} alt="down" onClick={toggleDropdown} />

      {isDropdownVisible && (
        <div className="language-dropdown">
          <div onClick={() => handleLanguageChange("tr")}>{t("TR")}</div>
          <div onClick={() => handleLanguageChange("en")}>{t("EN")}</div>
          <div onClick={() => handleLanguageChange("ru")}>{t("RU")}</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
