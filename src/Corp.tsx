import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function Corp() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div className='flexColumn gap20'>
        <div className='flexRow'>
          <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link></div>
          <div>{t('welcome.name')}</div>
        </div>
        <div>
          {t('corp.choose')}
        </div>
        <div className='flexColumn' style={{}}>
          <Link to='/daos'>
            <button className='whiteButton' style={{padding: '20px'}}>
              <div className='flexColumn'>
                <div style={{fontSize: '15px'}}>{t('corp.toyota')}</div>
                <div><img alt='' height='150px' src='toyota-logo-150.png'/></div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
