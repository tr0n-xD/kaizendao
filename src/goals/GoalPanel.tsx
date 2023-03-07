import React, { useState } from "react";
import { Goal } from "../Types";
import { GoalInfo } from "./GoalInfo";
import { GoalRow } from "./GoalRow";
import { Link } from "react-router-dom";

export function GoalPanel(props: {goals: Goal[]}) {
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
                  <div style={{marginTop: '20px'}}><Link to='/daohome'><button className='whiteButton'>BACK</button></Link></div>
              </div>
            }
        </div>
    );
}
