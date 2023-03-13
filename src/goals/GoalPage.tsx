import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { GoalPanel } from "./GoalPanel";
import { Goal } from "../dao/DaoTypes";
import TokenPanel from "../components/TokenPanel";

export default function GoalPage() {
  const {t} = useTranslation();

  const goals : Goal[] = [
    {id: 1, desc: 'Improving productivity'},
    {id: 2, desc: 'Reducing costs'},
    {id: 3, desc: 'Increasing sales'},
    {id: 4, desc: 'Exploring new business opportunities'},
  ]

  return (
      <div className="App">
        <div className='flexColumn gap20'>
          <div className='flexRow'>
            <div><Link to='/'><img alt='' height='25px' src='/icon-home-32.png' style={{paddingTop: '3px'}}/></Link>
            </div>
            <div>{t('welcome.name')} - {t('corp.toyota')}</div>
          </div>
          <div>
            {t('daohome.mydao')}: {t('daohome.goals')}
          </div>
          <GoalPanel goals={goals} />
          <TokenPanel/>
        </div>
      </div>
  );
}
