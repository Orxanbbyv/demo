import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationTR from "../locales/tr.json";
import translationEN from "../locales/en.json";
import translationRU from "../locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      translation: translationTR,
    },
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export  {i18n};
