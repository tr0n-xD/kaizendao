import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

export default function App() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div>
        {t('welcome.title')}
      </div>
      <div className='flexColumn' style={{height: '200px'}}>
        <Link to='/corp'><button className='whiteButton'>{t('welcome.start')} &gt;</button></Link>
      </div>
      <div>
        <LanguageSwitcher/>
      </div>
    </div>
  );
}
