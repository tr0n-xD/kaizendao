import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { IdeaPanel } from "./IdeaPanel";
import { Idea } from "../dao/DaoTypes";
import TokenPanel from "../components/TokenPanel";

export default function IdeaPage() {
  const {t} = useTranslation();

  const ideas : Idea[] = [
    {id: 1, desc: 'Improve material quality', details: 'This task is about improving material quality in the production processes', author: 'Kenji', points: 25, totalPoints: 100, status: 'FUNDING'},
    {id: 2, desc: 'Change Battery Supplier', details: 'Changing the battery supplier will increase realiability of the production', author: 'Tr0n', points: 5, totalPoints: 100, status: 'FUNDING'},
    {id: 3, desc: 'Implement Training Program', details: 'A training program will increase the quality of work from our workforce', author: 'Alex', points: 0, totalPoints: 100, status: 'FUNDING'},
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
          <TokenPanel />
        </div>
      </div>
  );
}
