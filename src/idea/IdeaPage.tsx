import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { IdeaPanel } from "../idea/IdeaPanel";

export default function IdeaPage() {
  const {t} = useTranslation();

  const ideas = [
    {id: 1, desc: 'Improve material quality', points: 25, totalPoints: 100},
    {id: 2, desc: 'Change Battery Supplier', points: 5, totalPoints: 100},
    {id: 3, desc: 'Implement Training Program', points: 0, totalPoints: 100},
  ]

  return (
      <div className="App">
        <div className='flexColumn gap20'>
          <div className='flexRow'>
            <div><Link to='/'><img alt='' height='25px' src='icon-home-32.png' style={{paddingTop: '3px'}}/></Link>
            </div>
            <div>{t('welcome.name')} - {t('corp.toyota')}</div>
          </div>
          <div>
            Engineering DAO: Ideas
          </div>
          <IdeaPanel ideas={ideas} />
          <div style={{fontSize: '20px'}}>
            Your tokens: 25
          </div>
        </div>
      </div>
  );
}
