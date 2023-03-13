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
            title: 'Please choose your DAO',
            create: 'Create a new DAO',
          },
          common: {
            yourtokens: 'Your DAO tokens:',
            info: 'Info',
            back: 'Back',
            prev: 'Prev',
            next: 'Next',
            okay: 'Okay',
            vote: 'Vote',
          },
          daohome: {
            mydao: 'Engineering DAO',
            people: 'People',
            goals: 'Goals',
            ideas: 'Ideas',
          },
          daocreate: {
            title: 'Create a DAO for your corporation:',
            name: 'Name of the DAO',
            purpose: 'Purpose of the DAO',
            objective: 'Objective of the DAO',
            icon: 'Choose an icon for the DAO',
            create: 'Create DAO',
          },
          person: {
            name: 'Name:',
            position: 'Position:',
            company: 'Company:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          goal: {
            id1: 'Improving productivity',
            id2: 'Reducing costs',
            id3: 'Increasing sales',
            id4: 'Exploring new business opportunities',
            goal: 'Goal:',
            company: 'Company:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          idea: {
            idea: 'idea #',
            new: 'New Idea',
            details: 'A fuller and more detailed description of the idea goes here. The reader can understand the idea and how to implement it.',
            proposed_by: 'proposed by:',
            solves_goal: 'solves goal:',
            status: 'STATUS:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          status: {
            funding: 'FUNDING',
            waiting: 'WAITING',
            complete: 'COMPLETE',
          },
          ideacreate: {
            welcome: 'Create a new idea',
            description: 'Description of the idea:',
            details: 'Explain the details:',
            proposed_by: 'This idea is proposed by:',
            solves_goal: 'The idea will solve this goal:',
            tokens: 'DAO tokens:',
            create: 'Create my Idea',
          },
          ideavote: {
            title: 'vote for idea #',
            tokens: 'DAO tokens:',
            amount_to_spend: 'DAO tokens to spend on this idea:',
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
          daos: {
            title: 'Please choose your DAO',
            create: 'Create a new DAO',
          },
          common: {
            yourtokens: 'Your DAO tokens:',
            info: 'Info',
            back: 'Back',
            prev: 'Prev',
            next: 'Next',
            okay: 'Okay',
            vote: 'Vote',
          },
          daohome: {
            mydao: 'Engineering DAO',
            people: 'People',
            goals: 'Goals',
            ideas: 'Ideas',
          },
          daocreate: {
            title: 'Create a DAO for your corporation:',
            name: 'Name of the DAO',
            purpose: 'Purpose of the DAO',
            objective: 'Objective of the DAO',
            icon: 'Choose an icon for the DAO',
            create: 'Create DAO',
          },
          person: {
            name: 'Name:',
            position: 'Position:',
            company: 'Company:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          goal: {
            id1: 'Improving productivity',
            id2: 'Reducing costs',
            id3: 'Increasing sales',
            id4: 'Exploring new business opportunities',
            goal: 'Goal:',
            company: 'Company:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          idea: {
            idea: 'idea #',
            new: 'New Idea',
            details: 'A fuller and more detailed description of the idea goes here. The reader can understand the idea and how to implement it.',
            proposed_by: 'proposed by:',
            solves_goal: 'solves goal:',
            status: 'STATUS:',
            wallet: 'Wallet address:',
            tokens: 'DAO tokens:',
          },
          status: {
            funding: 'FUNDING',
            waiting: 'WAITING',
            complete: 'COMPLETE',
          },
          ideacreate: {
            welcome: 'Create a new idea',
            description: 'Description of the idea:',
            details: 'Explain the details:',
            proposed_by: 'This idea is proposed by:',
            solves_goal: 'The idea will solve this goal:',
            tokens: 'DAO tokens:',
            create: 'Create my Idea',
          },
          ideavote: {
            title: 'vote for idea #',
            tokens: 'DAO tokens:',
            amount_to_spend: 'DAO tokens to spend on this idea:',
          },
        },
      }
    }
  });

export default i18n;