import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import TokenPanel from "../components/TokenPanel";

export default function DaoHome() {
  const {t} = useTranslation();

  return (
      <div className="App">
        <div className='flexColumn gap20'>
          <div className='flexRow'>
            <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link>
            </div>
            <div>{t('welcome.name')} - {t('corp.toyota')}</div>
          </div>
          <div>
              {t('daohome.mydao')}
          </div>
            <div className='flexColumn' style={{minHeight: '250px'}}>
                <div className='flexRow'>
                    <Link to='/people'>
                        <button className='bigRoundButton bg-yellow'>
                            <div className='flexColumn gap5'>
                                <img alt='' height='50px' src='/icon-people.png'/>
                                <div>{t('daohome.people').toUpperCase()}</div>
                            </div>
                        </button>
                    </Link>
                    <Link to='/goals'>
                        <button className='bigRoundButton bg-blue'>
                            <div className='flexColumn gap5'>
                                <img alt='' height='50px' src='/icon-goals.png'/>
                                <div>{t('daohome.goals').toUpperCase()}</div>
                            </div>
                        </button>
                    </Link>
                </div>
                <Link to='/ideas'>
                    <button className='bigRoundButton bg-green'>
                        <div className='flexColumn gap5'>
                            <img alt='' height='50px' src='/icon-ideas.png'/>
                            <div>{t('daohome.ideas').toUpperCase()}</div>
                        </div>
                    </button>
                </Link>
            </div>
            <TokenPanel/>
        </div>
      </div>
  );
}
