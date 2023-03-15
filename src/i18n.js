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
            funding_at: 'This idea will reach funding at:',
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
            title: 'あなたのDAOを選択してください',
            create: '新しいDAOを作る',
          },
          common: {
            yourtokens: 'あなたのDAOトークン:',
            info: '情報',
            back: 'Back',
            prev: 'Prev',
            next: 'Next',
            okay: 'OK',
            vote: '投票',
          },
          daohome: {
            mydao: 'Engineering DAO',
            people: '参加者',
            goals: '目標',
            ideas: 'アイデア',
          },
          daocreate: {
            title: 'あなたの会社のためのDAO組織:',
            name: 'DAO組織の名前',
            purpose: '企画するDAOの目的',
            objective: '方向性',
            icon: 'DAOのアイコンを選んでください',
            create: 'DAOを企画する',
          },
          person: {
            name: '名前:',
            position: '職位:',
            company: '会社:',
            wallet: 'ウォレットアドレス:',
            tokens: 'DAOトークン:',
          },
          goal: {
            id1: '生産性向上',
            id2: 'コスト削減',
            id3: '売上向上',
            id4: '新たなビジネス機会を探す',
            goal: '目標:',
            company: '会社:',
            wallet: 'ウォレットアドレス:',
            tokens: 'DAOトークン:',
          },
          idea: {
            idea: 'アイデア #',
            new: '新規のアイデア',
            details: 'もっと詳細なアイデアがあれば記入してください.',
            proposed_by: '提案者:',
            solves_goal: '解決手段:',
            status: 'ステータス:',
            wallet: 'ウォレットアドレス:',
            tokens: 'DAOトークン:',
          },
          status: {
            funding: '投資',
            waiting: '待ち',
            complete: '完了',
          },
          ideacreate: {
            welcome: '新しいアイデアを企画する',
            description: 'アイデアの概要:',
            details: '詳細:',
            proposed_by: '提案者:',
            solves_goal: '解決手段:',
            funding_at: 'This idea will reach funding at:',
            tokens: 'DAOトークン:',
            create: '自分のアイデアをつくる',
          },
          ideavote: {
            title: 'アイデアに投票する #',
            tokens: 'DAOトークン:',
            amount_to_spend: 'このアイデアに投資するDAOトークン:',
          },
        },
      }
    }
  });

export default i18n;