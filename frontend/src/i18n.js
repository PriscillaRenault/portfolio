import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Détection automatique de la langue
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Si la langue choisie n'existe pas
    interpolation: { escapeValue: false },
  });

export default i18n;
