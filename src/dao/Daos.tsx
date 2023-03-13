import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function Daos() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <div className='flexColumn gap20'>
        <div className='flexRow'>
          <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link></div>
          <div>{t('welcome.name')} - {t('corp.toyota')}</div>
        </div>
        <div>
          {t('daos.title')}
        </div>
        <div className='flexColumn' style={{height: '200px'}}>
          <Link to='/daohome'>
            <button className='whiteButton'>
              <div className='flexRow'>
                <img alt='' height='50px' src='/icon-people.png'/>
                <div>Engineering DAO</div>
              </div>
            </button>
          </Link>
        </div>
        {/*<div className='flexColumn' style={{height: '200px'}}>*/}
        {/*  <Link to='/daocreate'><button className='whiteButton'>{t('daos.create')}</button></Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
