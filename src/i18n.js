import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_EN } from "./assets/localization/en/translation";
import { TRANSLATIONS_IT } from "./assets/localization/it/translation";

const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
  it: {
    translation: TRANSLATIONS_IT,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: {
    default: ["it"],
  },
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator", "path", "htmlTag", "cookie"],
    caches: ["localStorage", "cookie"],
  },
});

export default i18n;
