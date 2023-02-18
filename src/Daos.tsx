import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function Daos() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div className='flexColumn gap20'>
        <div>
          {t('welcome.name')} - {t('corp.toyota')}
        </div>
        <div>
          {t('daos.title')}
        </div>
        <div className='flexColumn' style={{height: '200px'}}>
          <button className='whiteButton'>{t('daos.create')} &gt;</button>
        </div>
      </div>
    </div>
  );
}
