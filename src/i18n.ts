import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  // Language detector relies on a set of things for fetching the required languages
  // Order can be seen on the GitHub official repo page of this package
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Default fallback to "en" language
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;