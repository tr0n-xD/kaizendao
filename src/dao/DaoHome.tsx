import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { PropositionRow } from "../proposition/PropositionRow";

export default function DaoHome() {
  const {t} = useTranslation();

  const propositions = [
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
            Engineering DAO
          </div>
          <div className='flexColumn gap5' style={{height: '200px', padding: '20px', borderRadius: '10px'}}>
            <div style={{fontSize: '20px'}}>Active DAO propositions:</div>
            {propositions.map(p => (<PropositionRow p={p}/>))}
          </div>
          <div style={{fontSize: '20px'}}>
            Your tokens: 25
          </div>
        </div>
      </div>
  );
}
