import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div>
        {t('welcome.title')}
      </div>
      <div className='flexColumn' style={{height: '150px'}}>
        <button className='whiteButton'>
          {t('welcome.start')} &gt;
        </button>
      </div>
      <div>
        <LanguageSwitcher/>
      </div>
    </div>
  );
}

export default App;
