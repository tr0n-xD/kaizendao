import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../dao/DaoTypes";
import { PersonPanel } from "./PersonPanel";
import TokenPanel from "../components/TokenPanel";

export default function PersonPage() {
  const {t} = useTranslation();

  const persons : Person[] = [
    {walletKey: 'ik5x4', name: 'Kenji', avatar: 'avatar-kenji.png', position: 'AI specialist', company: 'Toyota', points: 25},
    {walletKey: 'nmcn4', name: 'Tr0n', avatar: 'avatar-tr0n.png', position: 'lead developer', company: 'Restack.AI',points: 15},
    {walletKey: 'k7ty3', name: 'Tori', avatar: 'avatar-tori.png', position: 'engineer', company: 'Toyota',points: 25},
    {walletKey: '1fdba', name: 'Alex', avatar: 'avatar-alex.png', position: 'C.E.O.', company: 'Restack.AI', points: 10},
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
            Engineering DAO: People
          </div>
          <PersonPanel persons={persons} />
          <TokenPanel/>
        </div>
      </div>
  );
}
