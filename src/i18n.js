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
          },
          corp: {
            choose: 'Please choose your Corporation',
            toyota: 'Toyota Motor Corporation',
          },
          daos: {
            title: 'The DAOs in your corporation are listed here:',
            create: 'Create a new DAO',
          },
          daocreate: {
            title: 'Create a DAO for your corporation:',
            name: 'Name of the DAO',
            purpose: 'Purpose of the DAO',
            success: 'Success criteria of the DAO',
            create: 'Create DAO',
          },
        },
      },
      jp: {
        translation: {
          welcome: {
            name: '改善道',
            title: 'カイゼン道へようこそ',
            start: '始める',
          },
          corp: {
            choose: 'あなたの会社を選んでください',
            toyota: 'トヨタ自動車株式会社',
          },
        },
      }
    }
  });

export default i18n;