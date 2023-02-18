import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function DaoCreate() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div className='flexColumn gap20'>
        <div className='flexRow'>
          <div><Link to='/'><img alt='' height='25px' src='icon-home-32.png' style={{paddingTop: '3px'}}/></Link></div>
          <div>{t('welcome.name')} - {t('corp.toyota')}</div>
        </div>
        <div>
          {t('daocreate.title')}
        </div>
        <div>
          {t('daocreate.name')}
        </div>
        <div>
          {t('daocreate.purpose')}
        </div>
        <div>
          {t('daocreate.success')}
        </div>
        <div className='flexColumn' style={{}}>
          <button className='whiteButton'>{t('daocreate.create')}</button>
        </div>
      </div>
    </div>
  );
}
