import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

export default function DaoHome() {
  const {t} = useTranslation();

  return (
      <div className="App">
        <div className='flexColumn gap20'>
          <div className='flexRow'>
            <div><Link to='/'><img alt='' height='25px' src='icon-home-32.png' style={{paddingTop: '3px'}}/></Link>
            </div>
            <div>{t('welcome.name')} - {t('corp.toyota')}</div>
          </div>
          <div>
            Engineering DAO
          </div>
            <div className='flexColumn' style={{minHeight: '250px'}}>
                <div className='flexRow'>
                    <Link to='/people'>
                        <button className='bigButton bg-yellow'>
                            <div className='flexColumn gap5'>
                                <img alt='' height='50px' src='/icon-people.png'/>
                                <div>PEOPLE</div>
                            </div>
                        </button>
                    </Link>
                    <Link to='/goals'>
                        <button className='bigButton bg-blue'>
                            <div className='flexColumn gap5'>
                                <img alt='' height='50px' src='/icon-goals.png'/>
                                <div>GOALS</div>
                            </div>
                        </button>
                    </Link>
                </div>
                <Link to='/ideas'>
                    <button className='bigButton bg-green'>
                        <div className='flexColumn gap5'>
                            <img alt='' height='50px' src='/icon-ideas.png'/>
                            <div>IDEAS</div>
                        </div>
                    </button>
                </Link>
            </div>
          <div style={{fontSize: '20px'}}>
            Your tokens: 25
          </div>
        </div>
      </div>
  );
}
