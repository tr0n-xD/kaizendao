import React, { useState } from "react";
import { Goal } from "../dao/DaoTypes";
import { GoalInfo } from "./GoalInfo";
import { GoalRow } from "./GoalRow";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function GoalPanel(props: {goals: Goal[]}) {
    const {t} = useTranslation();
    const [selectedInfo, setSelectedInfo] = useState<Goal | undefined>(undefined);

    return (
        <div className='flexColumn gap5' style={{minHeight: '250px', borderRadius: '10px'}}>
            {selectedInfo &&
              <GoalInfo goal={selectedInfo} selectOkay={() => setSelectedInfo(undefined)}/>
            }
            {selectedInfo === undefined &&
              <div className='flexColumn gap5'>
                  {props.goals.map(p =>
                      <GoalRow key={p.id} goal={p} selectInfo={() => setSelectedInfo(p)}/>
                  )}
                  <div style={{marginTop: '20px'}}><Link to='/daohome'><button className='whiteButton'>{t('common.back').toUpperCase()}</button></Link></div>
              </div>
            }
        </div>
    );
}
