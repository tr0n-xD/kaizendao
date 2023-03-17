import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoalPanel } from "./GoalPanel";
import TokenPanel from "../components/TokenPanel";
import { KaizenDaoContext } from "../dao/DaoContext";

export default function GoalPage() {
  const kaizen = useContext(KaizenDaoContext);
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
            {t('daohome.mydao')}: {t('daohome.goals')}
          </div>
          <GoalPanel goals={kaizen.goals} />
          <TokenPanel/>
        </div>
      </div>
  );
}
