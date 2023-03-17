import React, { useState } from "react";
import { Person } from "../dao/DaoTypes";
import { PersonRow } from "./PersonRow";
import { PersonInfo } from "./PersonInfo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function PersonPanel(props: {people: Person[]}) {
    const {t} = useTranslation();
    const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(undefined);

    return (
        <div className='flexColumn gap5' style={{minHeight: '250px', borderRadius: '10px'}}>
            {selectedPerson &&
              <PersonInfo person={selectedPerson} selectOkay={() => setSelectedPerson(undefined)}/>
            }
            {selectedPerson === undefined &&
              <div className='flexColumn gap5'>
                  {props.people.map(p =>
                      <PersonRow key={p.walletKey} person={p} selectPerson={() => setSelectedPerson(p)}/>
                  )}
                <div style={{fontSize: '20px', marginTop: '20px', width: '60%'}}>
                  DAO members receive new DAO tokens every month based on their seniority (years in the company)
                </div>
                <div style={{marginTop: '20px'}}><Link to='/daohome'><button className='whiteButton'>{t('common.back').toUpperCase()}</button></Link></div>
              </div>
            }
        </div>
    );
}
