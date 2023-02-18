import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const {i18n} = useTranslation();

  return (
    <div className='flexRow'>
      <button className='whiteButton'
              style={{width: '150px', fontWeight: i18n.resolvedLanguage === 'en' ? 'bold' : 'normal'}}
              type="submit" onClick={() => i18n.changeLanguage('en')}>
        <div>English (英語)</div>
      </button>
      <button className='whiteButton'
              style={{width: '150px', fontWeight: i18n.resolvedLanguage === 'jp' ? 'bold' : 'normal'}}
              type="submit" onClick={() => i18n.changeLanguage('jp')}>
        日本語 (Japanese)
      </button>
    </div>

  );
}