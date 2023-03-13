import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import { Person } from "../dao/DaoTypes";
import TokenPanel from "../components/TokenPanel";
import { PersonProfile } from "../people/PersonProfile";

export default function TeamPage() {
  const {t} = useTranslation();

  const persons : Person[] = [
    {walletKey: 'nmcn4', name: 'Tr0n (Steve Murphy)', avatar: 'avatar-tr0n.png', position: 'Lead developer', company: 'Restack.AI', country: 'AU', points: 25},
    {walletKey: 'ik5x4', name: 'Iida Kenji', avatar: 'avatar-kenji.png', position: 'Researcher', company: 'Toyota Motor Corporation', country: 'JP', points: 10},
    {walletKey: '1fdba', name: 'Alexander Grover', avatar: 'avatar-alex.png', position: 'C.E.O.', company: 'Restack.AI', country: 'US', points: 25},
    {walletKey: 'k7ty3', name: 'Miyabi Torimoto', avatar: 'avatar-tori.png', position: 'Engineer', company: 'Toyota Motor Corporation',country: 'JP', points: 10},
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
            Our Team - we built Kaizen DAO
          </div>
          <div className='flexRow' style={{flexWrap: 'wrap', width: '700px'}}>
            {persons.map(p =>
                <PersonProfile person={p}/>
            )}
          </div>

          <TokenPanel/>
        </div>
      </div>
  );
}
