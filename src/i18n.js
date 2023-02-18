import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, fallbackLng: 'en', interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }, resources: {
      en: {
        translation: {
          welcome: {
            name: 'Kaizen DAO',
            title: 'Welcome to Kaizen DAO',
            start: 'Start',
          }
        }
      },
      jp: {
        translation: {
          welcome: {
            name: '改善道',
            title: 'カイゼン道へようこそ',
            start: '始める',
          }
        }
      }
    }
  });

export default i18n;