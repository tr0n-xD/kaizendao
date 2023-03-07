import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { GoalPanel } from "./GoalPanel";
import { Goal } from "../Types";

export default function GoalPage() {
  const {t} = useTranslation();

  const goals : Goal[] = [
    {id: 1, desc: 'Quality is improved'},
    {id: 2, desc: 'Time to market is reduced'},
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
            Engineering DAO: Goals
          </div>
          <GoalPanel goals={goals} />
          <div style={{fontSize: '20px'}}>
            Your tokens: 25
          </div>
        </div>
      </div>
  );
}
