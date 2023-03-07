import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../Types";
import { PersonPanel } from "./PersonPanel";

export default function PersonPage() {
  const {t} = useTranslation();

  const persons : Person[] = [
    {walletKey: '1fdba', name: 'Alex', points: 10},
    {walletKey: 'nmcn4', name: 'Tr0n', points: 15},
    {walletKey: 'ik5x4', name: 'Kenji', points: 25},
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
            Engineering DAO: People
          </div>
          <PersonPanel persons={persons} />
          <div style={{fontSize: '20px'}}>
            Your tokens: 25
          </div>
        </div>
      </div>
  );
}
